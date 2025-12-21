// ============================================================================
// MSc Economics Study Plan Builder - Enhanced Version
// Features: Multi-plan, Credits tracking, Import/Export, Print, External catalog
// ============================================================================

// ============================================================================
// Constants and Configuration
// ============================================================================

const STORAGE_VERSION = 2;
const STORAGE_KEY = 'studyPlanBuilderState';
const DEFAULT_CREDITS_MSC = 6;
const DEFAULT_CREDITS_PHD = 6;
const EXPORT_SCHEMA_VERSION = 1;

// ============================================================================
// Application State
// ============================================================================

let appState = {
    version: STORAGE_VERSION,
    activePlanId: null,
    plans: [],
    planDataById: {},
    catalogCache: {
        lastFetchedAt: null,
        courses: []
    },
    customCourses: [] // Global custom courses
};

// UI State
let draggedCourse = null;
let activeFilters = new Set(['all', 'base', 'A', 'B', 'C', 'extra', 'PhD']);
let activeTimingFilters = new Set(['all', 'S1', 'S2']);
let showNotes = true;
let editingPlacedCourse = null;

// ============================================================================
// Storage and Migration Functions
// ============================================================================

function loadState() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    
    if (storedData) {
        try {
            const parsed = JSON.parse(storedData);
            
            if (parsed.version === STORAGE_VERSION) {
                appState = parsed;
                return;
            }
        } catch (e) {
            console.error('Error parsing stored state:', e);
        }
    }
    
    // Migration from old format
    const oldCourses = localStorage.getItem('courses');
    const oldPlacedCourses = localStorage.getItem('placedCourses');
    
    if (oldCourses || oldPlacedCourses) {
        migrateOldStorage(oldCourses, oldPlacedCourses);
    } else {
        // Initialize fresh state
        const defaultPlanId = generateId();
        appState = {
            version: STORAGE_VERSION,
            activePlanId: defaultPlanId,
            plans: [{
                id: defaultPlanId,
                name: 'Default Plan',
                createdAt: Date.now(),
                updatedAt: Date.now()
            }],
            planDataById: {
                [defaultPlanId]: {
                    placements: {},
                    customCourses: []
                }
            },
            catalogCache: {
                lastFetchedAt: null,
                courses: []
            },
            customCourses: []
        };
    }
}

function migrateOldStorage(oldCoursesStr, oldPlacedCoursesStr) {
    console.log('Migrating from old storage format...');
    
    const defaultPlanId = generateId();
    const planData = {
        placements: {},
        customCourses: []
    };
    
    // Migrate custom courses
    if (oldCoursesStr) {
        try {
            const oldCourses = JSON.parse(oldCoursesStr);
            const customCourses = oldCourses.filter(c => c.id.startsWith('custom-'));
            // Add credits if missing
            planData.customCourses = customCourses.map(c => ({
                ...c,
                credits: c.credits || DEFAULT_CREDITS_MSC
            }));
        } catch (e) {
            console.error('Error migrating courses:', e);
        }
    }
    
    // Migrate placed courses
    if (oldPlacedCoursesStr) {
        try {
            const oldPlaced = JSON.parse(oldPlacedCoursesStr);
            Object.entries(oldPlaced).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    planData.placements[key] = value;
                } else {
                    // Old format: single course
                    planData.placements[key] = [value];
                }
            });
        } catch (e) {
            console.error('Error migrating placements:', e);
        }
    }
    
    appState = {
        version: STORAGE_VERSION,
        activePlanId: defaultPlanId,
        plans: [{
            id: defaultPlanId,
            name: 'Default Plan',
            createdAt: Date.now(),
            updatedAt: Date.now()
        }],
        planDataById: {
            [defaultPlanId]: planData
        },
        catalogCache: {
            lastFetchedAt: null,
            courses: []
        },
        customCourses: []
    };
    
    saveState();
    
    // Clean up old storage
    localStorage.removeItem('courses');
    localStorage.removeItem('placedCourses');
    
    console.log('Migration complete');
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
        console.error('Error saving state:', e);
        alert('Failed to save your changes. Your browser storage might be full.');
    }
}

// ============================================================================
// Catalog Management
// ============================================================================

async function loadCatalog() {
    try {
        const response = await fetch('courses.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const courses = await response.json();
        
        // Validate and sanitize
        const validCourses = courses.filter(c => 
            c.id && c.name && c.category && c.type && c.timing
        ).map(c => ({
            ...c,
            credits: c.credits || DEFAULT_CREDITS_MSC
        }));
        
        appState.catalogCache = {
            lastFetchedAt: Date.now(),
            courses: validCourses
        };
        
        saveState();
        return validCourses;
        
    } catch (error) {
        console.error('Failed to fetch courses.json:', error);
        
        // Fallback to cached catalog
        if (appState.catalogCache.courses && appState.catalogCache.courses.length > 0) {
            console.log('Using cached catalog');
            return appState.catalogCache.courses;
        }
        
        // Fallback to minimal embedded set
        console.warn('No cached catalog available. Using minimal fallback.');
        alert('Could not load course catalog. Please check your connection. A minimal course set will be used.');
        return getMinimalFallbackCatalog();
    }
}

function getMinimalFallbackCatalog() {
    return [
        { id: 'base1', name: 'Adv. Maths', category: 'base', type: 'msc', timing: 'S1', notes: '', credits: 6 },
        { id: 'base2', name: 'Adv. Stats', category: 'base', type: 'msc', timing: 'S1', notes: '', credits: 6 },
        { id: 'a1', name: 'Adv. Macro', category: 'A', type: 'msc', timing: 'S2', notes: '', credits: 6 },
        { id: 'a2', name: 'Adv. Micro', category: 'A', type: 'msc', timing: 'S2', notes: '', credits: 6 },
        { id: 'b1', name: 'Development Economics', category: 'B', type: 'msc', timing: 'S2', notes: '', credits: 6 },
        { id: 'c1', name: 'Behavioral Economics', category: 'C', type: 'msc', timing: 'S2', notes: '', credits: 6 }
    ];
}

function getAllCourses() {
    const activePlan = getActivePlan();
    const planData = activePlan ? appState.planDataById[activePlan.id] : null;
    const customCourses = planData ? planData.customCourses : [];
    
    return [...appState.catalogCache.courses, ...customCourses];
}

// ============================================================================
// Plan Management
// ============================================================================

function getActivePlan() {
    return appState.plans.find(p => p.id === appState.activePlanId);
}

function getActivePlanData() {
    const activePlan = getActivePlan();
    if (!activePlan) return null;
    
    if (!appState.planDataById[activePlan.id]) {
        appState.planDataById[activePlan.id] = {
            placements: {},
            customCourses: []
        };
    }
    
    return appState.planDataById[activePlan.id];
}

function createPlan(name = null, sourceTemplate = null) {
    const newId = generateId();
    const planName = name || `Plan ${appState.plans.length + 1}`;
    
    const newPlan = {
        id: newId,
        name: planName,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };
    
    let planData = {
        placements: {},
        customCourses: []
    };
    
    // If duplicating from another plan
    if (sourceTemplate) {
        const sourceData = appState.planDataById[sourceTemplate];
        if (sourceData) {
            planData = {
                placements: JSON.parse(JSON.stringify(sourceData.placements)),
                customCourses: JSON.parse(JSON.stringify(sourceData.customCourses))
            };
        }
    }
    
    appState.plans.push(newPlan);
    appState.planDataById[newId] = planData;
    appState.activePlanId = newId;
    
    saveState();
    renderPlanSelector();
    renderAll();
}

function renamePlan(planId, newName) {
    const plan = appState.plans.find(p => p.id === planId);
    if (plan) {
        plan.name = newName.trim() || plan.name;
        plan.updatedAt = Date.now();
        saveState();
        renderPlanSelector();
        updateSummary();
    }
}

function duplicatePlan(planId) {
    const plan = appState.plans.find(p => p.id === planId);
    if (plan) {
        const newName = `${plan.name} (Copy)`;
        createPlan(newName, planId);
    }
}

function deletePlan(planId) {
    if (appState.plans.length <= 1) {
        alert('Cannot delete the last remaining plan.');
        return;
    }
    
    const plan = appState.plans.find(p => p.id === planId);
    if (!plan) return;
    
    if (!confirm(`Delete plan "${plan.name}"? This cannot be undone.`)) {
        return;
    }
    
    appState.plans = appState.plans.filter(p => p.id !== planId);
    delete appState.planDataById[planId];
    
    // Switch to another plan if we deleted the active one
    if (appState.activePlanId === planId) {
        appState.activePlanId = appState.plans[0].id;
    }
    
    saveState();
    renderPlanSelector();
    renderAll();
}

function setActivePlan(planId) {
    if (appState.activePlanId === planId) return;
    
    appState.activePlanId = planId;
    saveState();
    renderAll();
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// ============================================================================
// Summary Computation Engine
// ============================================================================

function computePlanSummary() {
    const planData = getActivePlanData();
    if (!planData) {
        return {
            totalCredits: 0,
            byYearSemester: {
                'Y1S1': 0, 'Y1S2': 0, 'Y2S1': 0, 'Y2S2': 0
            },
            byCategory: {},
            warnings: []
        };
    }
    
    const allCourses = getAllCourses();
    const placements = planData.placements;
    
    // Track unique courses per semester to avoid double-counting spanning courses
    const coursesBySemester = {
        'Y1S1': new Map(), // courseId -> course
        'Y1S2': new Map(),
        'Y2S1': new Map(),
        'Y2S2': new Map()
    };
    
    const warnings = [];
    
    // Process all placements
    Object.entries(placements).forEach(([key, coursesInQuarter]) => {
        if (!coursesInQuarter || coursesInQuarter.length === 0) return;
        
        const [year, quarter] = key.split('-').map(Number);
        const semester = getSemesterForQuarter(year, quarter);
        
        coursesInQuarter.forEach(placedCourse => {
            // Find the course definition
            const courseDef = allCourses.find(c => c.id === placedCourse.id);
            if (!courseDef) return;
            
            // For MSc courses, only count once per semester (at the start quarter)
            if (placedCourse.type === 'msc' && placedCourse.isStart) {
                coursesBySemester[semester].set(placedCourse.id, {
                    ...courseDef,
                    placedCourse
                });
            } else if (placedCourse.type === 'phd') {
                // PhD courses: count once
                coursesBySemester[semester].set(placedCourse.id + '_' + placedCourse.placementId, {
                    ...courseDef,
                    placedCourse
                });
            }
            
            // Check for timing warnings
            if (checkWrongSlot(placedCourse, quarter)) {
                warnings.push({
                    type: 'timing',
                    courseName: placedCourse.name,
                    location: `Year ${year}, Quarter ${quarter}`,
                    message: `${placedCourse.name} is placed in the wrong timing slot`
                });
            }
        });
    });
    
    // Calculate totals
    let totalCredits = 0;
    const byYearSemester = {
        'Y1S1': 0, 'Y1S2': 0, 'Y2S1': 0, 'Y2S2': 0
    };
    const byCategory = {};
    
    Object.entries(coursesBySemester).forEach(([semester, coursesMap]) => {
        coursesMap.forEach(course => {
            const credits = course.credits || DEFAULT_CREDITS_MSC;
            totalCredits += credits;
            byYearSemester[semester] += credits;
            
            const cat = course.category;
            byCategory[cat] = (byCategory[cat] || 0) + credits;
        });
    });
    
    return {
        totalCredits,
        byYearSemester,
        byCategory,
        warnings
    };
}

function getSemesterForQuarter(year, quarter) {
    if (quarter === 1 || quarter === 2) {
        return `Y${year}S1`;
    } else {
        return `Y${year}S2`;
    }
}

function checkWrongSlot(course, quarter) {
    const timing = course.timing || 'S1';
    
    if (course.type === 'msc') {
        if (course.isStart) {
            if (timing === 'S1') {
                return quarter !== 1;
            } else {
                return quarter !== 3;
            }
        } else {
            if (timing === 'S1') {
                return quarter !== 2;
            } else {
                return quarter !== 4;
            }
        }
    } else {
        // PhD courses
        if (timing === 'Q1') return quarter !== 1;
        if (timing === 'Q2') return quarter !== 2;
        if (timing === 'Q3') return quarter !== 3;
        if (timing === 'Q4') return quarter !== 4;
    }
    
    return false;
}

// ============================================================================
// Import/Export Functions
// ============================================================================

function exportPlan() {
    const activePlan = getActivePlan();
    if (!activePlan) {
        alert('No active plan to export');
        return;
    }
    
    const planData = getActivePlanData();
    
    const exportData = {
        schemaVersion: EXPORT_SCHEMA_VERSION,
        exportedAt: new Date().toISOString(),
        plan: {
            name: activePlan.name,
            placements: planData.placements,
            customCourses: planData.customCourses
        },
        catalogVersionInfo: {
            lastFetchedAt: appState.catalogCache.lastFetchedAt
        }
    };
    
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const date = new Date().toISOString().split('T')[0];
    const filename = `ess-plan_${sanitizeFilename(activePlan.name)}_${date}.json`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(url);
}

function sanitizeFilename(name) {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

function importPlan() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importData = JSON.parse(event.target.result);
                validateAndImportPlan(importData);
            } catch (error) {
                alert('Invalid JSON file. Please select a valid plan export file.');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
    };
    
    input.click();
}

function validateAndImportPlan(importData) {
    // Validate schema
    if (!importData.schemaVersion || !importData.plan) {
        alert('Invalid plan file format.');
        return;
    }
    
    if (importData.schemaVersion !== EXPORT_SCHEMA_VERSION) {
        if (!confirm('This plan was exported from a different version. Continue anyway?')) {
            return;
        }
    }
    
    const plan = importData.plan;
    
    // Validate required fields
    if (!plan.placements || typeof plan.placements !== 'object') {
        alert('Invalid plan data: missing placements.');
        return;
    }
    
    // Sanitize data (prevent XSS)
    const sanitizedPlan = {
        name: escapeHtml(plan.name || 'Imported Plan'),
        placements: plan.placements,
        customCourses: (plan.customCourses || []).map(c => ({
            ...c,
            name: escapeHtml(c.name || ''),
            notes: escapeHtml(c.notes || '')
        }))
    };
    
    // Ask user: create new plan or overwrite current?
    const choice = confirm(
        'Import as a new plan?\n\nOK = Create new plan\nCancel = Overwrite current plan'
    );
    
    if (choice) {
        // Create new plan
        const newId = generateId();
        const newPlan = {
            id: newId,
            name: sanitizedPlan.name,
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        
        appState.plans.push(newPlan);
        appState.planDataById[newId] = {
            placements: sanitizedPlan.placements,
            customCourses: sanitizedPlan.customCourses
        };
        appState.activePlanId = newId;
    } else {
        // Overwrite current plan
        const activePlan = getActivePlan();
        if (activePlan) {
            activePlan.name = sanitizedPlan.name;
            activePlan.updatedAt = Date.now();
            appState.planDataById[activePlan.id] = {
                placements: sanitizedPlan.placements,
                customCourses: sanitizedPlan.customCourses
            };
        }
    }
    
    saveState();
    renderPlanSelector();
    renderAll();
    alert('Plan imported successfully!');
}

// ============================================================================
// Print/PDF Export
// ============================================================================

function printPlan() {
    window.print();
}

// ============================================================================
// Course Placement Functions
// ============================================================================

function canPlaceCourse(year, quarter, type) {
    if (type === 'msc') {
        let nextYear = year;
        let nextQuarter = quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        if (nextYear > 2) return false;
    }
    
    return true;
}

function placeCourse(year, quarter, course) {
    const planData = getActivePlanData();
    if (!planData) return;
    
    const key = `${year}-${quarter}`;
    
    if (!planData.placements[key]) {
        planData.placements[key] = [];
    }
    
    const placedCourse = {
        ...course,
        year,
        quarter,
        isStart: true
    };
    
    planData.placements[key].push(placedCourse);
    
    // For MSc courses, also mark the next quarter
    if (course.type === 'msc') {
        let nextYear = year;
        let nextQuarter = quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        const key2 = `${nextYear}-${nextQuarter}`;
        
        if (!planData.placements[key2]) {
            planData.placements[key2] = [];
        }
        
        planData.placements[key2].push({
            ...course,
            year: nextYear,
            quarter: nextQuarter,
            isStart: false,
            continuesFrom: key
        });
    }
    
    const activePlan = getActivePlan();
    if (activePlan) {
        activePlan.updatedAt = Date.now();
    }
    
    saveState();
}

function removeCourse(key, placementId) {
    const planData = getActivePlanData();
    if (!planData) return;
    
    const coursesInQuarter = planData.placements[key];
    if (!coursesInQuarter) return;
    
    const courseIndex = coursesInQuarter.findIndex(c => c.placementId === placementId);
    if (courseIndex === -1) return;
    
    const course = coursesInQuarter[courseIndex];
    
    // Remove from current quarter
    planData.placements[key] = coursesInQuarter.filter(c => c.placementId !== placementId);
    if (planData.placements[key].length === 0) {
        delete planData.placements[key];
    }
    
    // If this is an MSc course, also remove from the other quarter
    if (course.type === 'msc') {
        if (course.isStart) {
            let nextYear = course.year;
            let nextQuarter = course.quarter + 1;
            
            if (nextQuarter > 4) {
                nextQuarter = 1;
                nextYear += 1;
            }
            
            const nextKey = `${nextYear}-${nextQuarter}`;
            if (planData.placements[nextKey]) {
                planData.placements[nextKey] = planData.placements[nextKey].filter(c => c.placementId !== placementId);
                if (planData.placements[nextKey].length === 0) {
                    delete planData.placements[nextKey];
                }
            }
        } else if (course.continuesFrom) {
            if (planData.placements[course.continuesFrom]) {
                planData.placements[course.continuesFrom] = planData.placements[course.continuesFrom].filter(c => c.placementId !== placementId);
                if (planData.placements[course.continuesFrom].length === 0) {
                    delete planData.placements[course.continuesFrom];
                }
            }
        }
    }
    
    const activePlan = getActivePlan();
    if (activePlan) {
        activePlan.updatedAt = Date.now();
    }
    
    saveState();
    renderPlacedCourses();
    updateSummary();
}

function addCustomCourse() {
    const name = document.getElementById('newCourseName').value.trim();
    const category = document.getElementById('newCourseCategory').value;
    const type = document.getElementById('newCourseType').value;
    const timing = document.getElementById('newCourseTiming').value;
    const notes = document.getElementById('newCourseNotes').value.trim();
    const creditsInput = document.getElementById('newCourseCredits');
    const credits = creditsInput ? parseInt(creditsInput.value) || DEFAULT_CREDITS_MSC : DEFAULT_CREDITS_MSC;
    
    if (!name) {
        alert('Please enter a course name');
        return;
    }
    
    if (!timing) {
        alert('Please select a semester/quarter for the course');
        return;
    }
    
    const planData = getActivePlanData();
    if (!planData) return;
    
    const id = 'custom-' + generateId();
    
    const newCourse = {
        id,
        name,
        category,
        type,
        timing,
        notes,
        credits,
        placementId: 'placement-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    };
    
    planData.customCourses.push(newCourse);
    
    const activePlan = getActivePlan();
    if (activePlan) {
        activePlan.updatedAt = Date.now();
    }
    
    saveState();
    renderCourseList();
    
    // Clear form
    document.getElementById('newCourseName').value = '';
    document.getElementById('newCourseNotes').value = '';
    document.getElementById('newCourseTiming').value = '';
    if (creditsInput) creditsInput.value = DEFAULT_CREDITS_MSC;
    
    alert(`Course "${name}" added successfully!`);
}

function deleteCustomCourse(courseId) {
    const planData = getActivePlanData();
    if (!planData) return;
    
    const course = planData.customCourses.find(c => c.id === courseId);
    if (!course) return;
    
    if (confirm(`Delete custom course "${course.name}"?`)) {
        planData.customCourses = planData.customCourses.filter(c => c.id !== courseId);
        
        const activePlan = getActivePlan();
        if (activePlan) {
            activePlan.updatedAt = Date.now();
        }
        
        saveState();
        renderCourseList();
    }
}

// ============================================================================
// Rendering Functions
// ============================================================================

function renderAll() {
    renderPlanSelector();
    renderCourseList();
    renderPlacedCourses();
    updateSummary();
}

function renderPlanSelector() {
    const container = document.getElementById('planSelector');
    if (!container) return;
    
    const select = document.getElementById('planSelect');
    if (!select) return;
    
    // Update dropdown
    select.innerHTML = '';
    appState.plans.forEach(plan => {
        const option = document.createElement('option');
        option.value = plan.id;
        option.textContent = plan.name;
        option.selected = plan.id === appState.activePlanId;
        select.appendChild(option);
    });
}

function renderCourseList() {
    const container = document.getElementById('courseListContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const allCourses = getAllCourses();
    
    const filteredCourses = allCourses.filter(course => {
        const passesCategory = activeFilters.has('all') || activeFilters.has(course.category);
        
        let passesTiming = activeTimingFilters.has('all');
        if (!passesTiming) {
            const courseTiming = course.timing || 'S1';
            if (courseTiming === 'Q1' || courseTiming === 'Q2' || courseTiming === 'S1') {
                passesTiming = activeTimingFilters.has('S1');
            } else if (courseTiming === 'Q3' || courseTiming === 'Q4' || courseTiming === 'S2') {
                passesTiming = activeTimingFilters.has('S2');
            }
        }
        
        return passesCategory && passesTiming;
    });
    
    filteredCourses.forEach(course => {
        const courseElement = createCourseElement(course);
        container.appendChild(courseElement);
    });
}

function createCourseElement(course) {
    const div = document.createElement('div');
    div.className = 'course-item';
    div.draggable = true;
    div.dataset.courseId = course.id;
    div.dataset.category = course.category;
    div.dataset.type = course.type;
    
    const notesClass = showNotes ? '' : 'hidden';
    const notesHtml = course.notes ? `<div class="course-notes ${notesClass}">${formatNotes(course.notes)}</div>` : '';
    
    const timing = course.timing || 'S1';
    let timingLabel = timing;
    if (timing === 'S1') timingLabel = 'Sem 1';
    else if (timing === 'S2') timingLabel = 'Sem 2';
    
    const credits = course.credits || DEFAULT_CREDITS_MSC;
    const isCustom = course.id.startsWith('custom-');
    
    div.innerHTML = `
        ${isCustom ? `<button class="delete-course" data-course-id="${course.id}" title="Delete course">×</button>` : ''}
        <div class="course-name">${escapeHtml(course.name)}</div>
        <div class="course-meta">
            <span class="course-badge badge-category-${course.category}">${course.category}</span>
            <span class="course-badge badge-type-${course.type}">${course.type === 'msc' ? 'MSc (2Q)' : 'PhD (1Q)'}</span>
            <span class="timing-badge ${timing}">${timingLabel}</span>
            <span class="credits-badge">${credits} cr</span>
        </div>
        ${notesHtml}
    `;
    
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragend', handleDragEnd);
    
    if (isCustom) {
        div.querySelector('.delete-course').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCustomCourse(course.id);
        });
    }
    
    return div;
}

function renderPlacedCourses() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = '';
        zone.classList.remove('has-courses');
    });
    
    const planData = getActivePlanData();
    if (!planData) return;
    
    const allCourses = getAllCourses();
    
    Object.entries(planData.placements).forEach(([key, coursesInQuarter]) => {
        if (!coursesInQuarter || coursesInQuarter.length === 0) return;
        
        const [year, quarter] = key.split('-').map(Number);
        const quarterElement = document.querySelector(`.quarter[data-year="${year}"][data-quarter="${quarter}"]`);
        if (!quarterElement) return;
        
        const dropZone = quarterElement.querySelector('.drop-zone');
        
        coursesInQuarter.forEach((placedCourse) => {
            const courseDef = allCourses.find(c => c.id === placedCourse.id);
            const isWrong = checkWrongSlot(placedCourse, quarter);
            
            const placedElement = document.createElement('div');
            placedElement.className = 'placed-course';
            if (isWrong) {
                placedElement.classList.add('wrong-slot');
            }
            placedElement.dataset.category = placedCourse.category;
            placedElement.dataset.placementId = placedCourse.placementId;
            placedElement.dataset.key = key;
            
            if (placedCourse.type === 'msc' && !placedCourse.isStart) {
                placedElement.classList.add('msc-spanning');
            }
            
            const notesClass = showNotes ? '' : 'hidden';
            const notesHtml = placedCourse.notes ? `<div class="placed-course-notes ${notesClass}">${formatNotes(placedCourse.notes)}</div>` : '';
            
            const timing = placedCourse.timing || 'S1';
            let timingLabel = timing;
            if (timing === 'S1') timingLabel = 'Sem 1';
            else if (timing === 'S2') timingLabel = 'Sem 2';
            
            const credits = courseDef ? (courseDef.credits || DEFAULT_CREDITS_MSC) : DEFAULT_CREDITS_MSC;
            
            placedElement.innerHTML = `
                <div class="placed-course-name">${escapeHtml(placedCourse.name)}</div>
                <div class="placed-course-meta">
                    ${placedCourse.category} • ${placedCourse.type === 'msc' ? (placedCourse.isStart ? 'Part 1/2' : 'Part 2/2') : 'PhD'} • ${timingLabel} • ${credits} cr
                </div>
                ${notesHtml}
                <div class="placed-course-actions">
                    <button class="edit-notes-btn" data-placement-id="${placedCourse.placementId}" data-key="${key}" title="Edit notes">✎</button>
                    <button class="remove-course" data-placement-id="${placedCourse.placementId}" data-key="${key}">×</button>
                </div>
            `;
            
            dropZone.appendChild(placedElement);
            
            placedElement.querySelector('.remove-course').addEventListener('click', (e) => {
                e.stopPropagation();
                removeCourse(e.target.dataset.key, e.target.dataset.placementId);
            });
            
            placedElement.querySelector('.edit-notes-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openNotesModal(e.target.dataset.key, e.target.dataset.placementId);
            });
        });
        
        if (coursesInQuarter.length > 0) {
            dropZone.classList.add('has-courses');
        }
    });
}

function updateSummary() {
    const summary = computePlanSummary();
    const container = document.getElementById('summaryPanel');
    if (!container) return;
    
    const activePlan = getActivePlan();
    const planName = activePlan ? activePlan.name : 'No Plan';
    
    let warningsHtml = '';
    if (summary.warnings.length > 0) {
        warningsHtml = '<div class="summary-warnings"><h4>⚠️ Warnings</h4><ul>';
        summary.warnings.forEach(w => {
            warningsHtml += `<li><strong>${escapeHtml(w.courseName)}</strong> (${escapeHtml(w.location)}): ${escapeHtml(w.message)}</li>`;
        });
        warningsHtml += '</ul></div>';
    }
    
    let categoryHtml = '';
    Object.keys(summary.byCategory).sort().forEach(cat => {
        categoryHtml += `<div class="summary-item"><span class="summary-label">${escapeHtml(cat)}:</span> <span class="summary-value">${summary.byCategory[cat]} credits</span></div>`;
    });
    
    container.innerHTML = `
        <div class="summary-header">
            <h3>${escapeHtml(planName)}</h3>
            <button id="toggleSummary" class="toggle-summary-btn" title="Toggle summary">−</button>
        </div>
        <div class="summary-content">
            <div class="summary-section">
                <h4>Total Credits</h4>
                <div class="summary-total">${summary.totalCredits}</div>
            </div>
            
            <div class="summary-section">
                <h4>Credits by Year/Semester</h4>
                <div class="summary-item"><span class="summary-label">Year 1, Semester 1:</span> <span class="summary-value">${summary.byYearSemester.Y1S1} credits</span></div>
                <div class="summary-item"><span class="summary-label">Year 1, Semester 2:</span> <span class="summary-value">${summary.byYearSemester.Y1S2} credits</span></div>
                <div class="summary-item"><span class="summary-label">Year 2, Semester 1:</span> <span class="summary-value">${summary.byYearSemester.Y2S1} credits</span></div>
                <div class="summary-item"><span class="summary-label">Year 2, Semester 2:</span> <span class="summary-value">${summary.byYearSemester.Y2S2} credits</span></div>
            </div>
            
            <div class="summary-section">
                <h4>Credits by Category</h4>
                ${categoryHtml || '<div class="summary-item"><span class="summary-label">No courses placed</span></div>'}
            </div>
            
            ${warningsHtml}
        </div>
    `;
    
    // Add toggle listener
    const toggleBtn = document.getElementById('toggleSummary');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSummaryPanel);
    }
}

function toggleSummaryPanel() {
    const content = document.querySelector('.summary-content');
    const btn = document.getElementById('toggleSummary');
    if (content && btn) {
        const isCollapsed = content.style.display === 'none';
        content.style.display = isCollapsed ? 'block' : 'none';
        btn.textContent = isCollapsed ? '−' : '+';
    }
}

// ============================================================================
// Event Handlers
// ============================================================================

function handleDragStart(e) {
    const courseId = e.target.dataset.courseId;
    const allCourses = getAllCourses();
    const course = allCourses.find(c => c.id === courseId);
    
    if (!course) return;
    
    draggedCourse = {
        id: course.id,
        category: course.category,
        type: course.type,
        name: course.name,
        timing: course.timing || 'S1',
        notes: course.notes || '',
        credits: course.credits || DEFAULT_CREDITS_MSC,
        placementId: 'placement-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
    };
    
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedCourse = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const dropZone = e.currentTarget;
    if (!dropZone.classList.contains('drag-over')) {
        dropZone.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    if (e.target.classList.contains('drop-zone')) {
        e.target.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.classList.remove('drag-over');
    
    if (!draggedCourse) return;
    
    const quarter = dropZone.closest('.quarter');
    const year = parseInt(quarter.dataset.year);
    const quarterNum = parseInt(quarter.dataset.quarter);
    
    if (!canPlaceCourse(year, quarterNum, draggedCourse.type)) {
        alert('Cannot place course here. MSc courses span 2 quarters and would extend beyond the calendar.');
        return;
    }
    
    placeCourse(year, quarterNum, draggedCourse);
    renderPlacedCourses();
    updateSummary();
}

function handleFilterChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'all') {
        if (isChecked) {
            activeFilters = new Set(['all', 'base', 'A', 'B', 'C', 'extra', 'PhD']);
            document.querySelectorAll('.category-filter').forEach(cb => cb.checked = true);
        } else {
            activeFilters.clear();
            document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
        }
    } else {
        if (isChecked) {
            activeFilters.add(value);
        } else {
            activeFilters.delete(value);
            activeFilters.delete('all');
            const allCheckbox = document.querySelector('.category-filter[value="all"]');
            if (allCheckbox) allCheckbox.checked = false;
        }
        
        const allSelected = ['base', 'A', 'B', 'C', 'extra', 'PhD'].every(cat => activeFilters.has(cat));
        if (allSelected) {
            activeFilters.add('all');
            const allCheckbox = document.querySelector('.category-filter[value="all"]');
            if (allCheckbox) allCheckbox.checked = true;
        }
    }
    
    renderCourseList();
}

function handleTimingFilterChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'all') {
        if (isChecked) {
            activeTimingFilters = new Set(['all', 'S1', 'S2']);
            document.querySelectorAll('.timing-filter').forEach(cb => cb.checked = true);
        } else {
            activeTimingFilters.clear();
            document.querySelectorAll('.timing-filter').forEach(cb => cb.checked = false);
        }
    } else {
        if (isChecked) {
            activeTimingFilters.add(value);
        } else {
            activeTimingFilters.delete(value);
            activeTimingFilters.delete('all');
            const allCheckbox = document.querySelector('.timing-filter[value="all"]');
            if (allCheckbox) allCheckbox.checked = false;
        }
        
        const allSelected = ['S1', 'S2'].every(t => activeTimingFilters.has(t));
        if (allSelected) {
            activeTimingFilters.add('all');
            const allCheckbox = document.querySelector('.timing-filter[value="all"]');
            if (allCheckbox) allCheckbox.checked = true;
        }
    }
    
    renderCourseList();
}

function handleNotesToggle(e) {
    showNotes = e.target.checked;
    renderCourseList();
    renderPlacedCourses();
}

function updateTimingOptions() {
    const type = document.getElementById('newCourseType').value;
    const timingSelect = document.getElementById('newCourseTiming');
    
    if (type === 'msc') {
        timingSelect.innerHTML = `
            <option value="">-- Select Semester --</option>
            <option value="S1">Semester 1 (Q1-Q2)</option>
            <option value="S2">Semester 2 (Q3-Q4)</option>
        `;
    } else {
        timingSelect.innerHTML = `
            <option value="">-- Select Quarter --</option>
            <option value="Q1">Quarter 1</option>
            <option value="Q2">Quarter 2</option>
            <option value="Q3">Quarter 3</option>
            <option value="Q4">Quarter 4</option>
        `;
    }
}

function clearPlan() {
    if (!confirm('Are you sure you want to clear your entire study plan?')) {
        return;
    }
    
    const planData = getActivePlanData();
    if (planData) {
        planData.placements = {};
        
        const activePlan = getActivePlan();
        if (activePlan) {
            activePlan.updatedAt = Date.now();
        }
        
        saveState();
        renderPlacedCourses();
        updateSummary();
    }
}

function savePlanManually() {
    saveState();
    
    const saveBtn = document.getElementById('savePlanBtn');
    if (saveBtn) {
        const originalText = saveBtn.textContent;
        saveBtn.textContent = '✓ Saved!';
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1500);
    }
}

function openNotesModal(key, placementId) {
    const planData = getActivePlanData();
    if (!planData) return;
    
    const coursesInQuarter = planData.placements[key];
    if (!coursesInQuarter) return;
    
    const course = coursesInQuarter.find(c => c.placementId === placementId);
    if (!course) return;
    
    editingPlacedCourse = { key, placementId };
    
    document.getElementById('modalCourseName').textContent = course.name;
    document.getElementById('modalNotes').value = course.notes || '';
    document.getElementById('notesModal').classList.add('active');
    document.getElementById('modalNotes').focus();
}

function closeModal() {
    document.getElementById('notesModal').classList.remove('active');
    editingPlacedCourse = null;
}

function saveNotesFromModal() {
    if (!editingPlacedCourse) return;
    
    const { key, placementId } = editingPlacedCourse;
    const newNotes = document.getElementById('modalNotes').value;
    
    const planData = getActivePlanData();
    if (!planData) return;
    
    // Update notes for this course and its continuation (if MSc)
    Object.keys(planData.placements).forEach(k => {
        const coursesInQuarter = planData.placements[k];
        if (!coursesInQuarter) return;
        
        coursesInQuarter.forEach(course => {
            if (course.placementId === placementId) {
                course.notes = newNotes;
            }
        });
    });
    
    const activePlan = getActivePlan();
    if (activePlan) {
        activePlan.updatedAt = Date.now();
    }
    
    closeModal();
    saveState();
    renderPlacedCourses();
}

function openInstructionsModal() {
    document.getElementById('instructionsModal').classList.add('active');
}

function closeInstructionsModal() {
    document.getElementById('instructionsModal').classList.remove('active');
}

// ============================================================================
// Utility Functions
// ============================================================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatNotes(text) {
    if (!text) return '';
    let formatted = escapeHtml(text);
    formatted = formatted.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">View syllabus ↗</a>'
    );
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
}

// ============================================================================
// Plan Management UI Functions
// ============================================================================

function showNewPlanDialog() {
    const name = prompt('Enter name for the new plan:');
    if (name && name.trim()) {
        createPlan(name.trim());
    }
}

function showRenamePlanDialog() {
    const activePlan = getActivePlan();
    if (!activePlan) return;
    
    const newName = prompt('Enter new name for the plan:', activePlan.name);
    if (newName && newName.trim()) {
        renamePlan(activePlan.id, newName.trim());
    }
}

function showDuplicatePlanDialog() {
    const activePlan = getActivePlan();
    if (!activePlan) return;
    
    duplicatePlan(activePlan.id);
}

function showDeletePlanDialog() {
    const activePlan = getActivePlan();
    if (!activePlan) return;
    
    deletePlan(activePlan.id);
}

// ============================================================================
// Initialization
// ============================================================================

async function init() {
    // Load state from localStorage
    loadState();
    
    // Load catalog from JSON
    await loadCatalog();
    
    // Initial render
    renderAll();
    
    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Plan management
    const planSelect = document.getElementById('planSelect');
    if (planSelect) {
        planSelect.addEventListener('change', (e) => setActivePlan(e.target.value));
    }
    
    const newPlanBtn = document.getElementById('newPlanBtn');
    if (newPlanBtn) {
        newPlanBtn.addEventListener('click', showNewPlanDialog);
    }
    
    const renamePlanBtn = document.getElementById('renamePlanBtn');
    if (renamePlanBtn) {
        renamePlanBtn.addEventListener('click', showRenamePlanDialog);
    }
    
    const duplicatePlanBtn = document.getElementById('duplicatePlanBtn');
    if (duplicatePlanBtn) {
        duplicatePlanBtn.addEventListener('click', showDuplicatePlanDialog);
    }
    
    const deletePlanBtn = document.getElementById('deletePlanBtn');
    if (deletePlanBtn) {
        deletePlanBtn.addEventListener('click', showDeletePlanDialog);
    }
    
    // Import/Export
    const exportBtn = document.getElementById('exportPlanBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportPlan);
    }
    
    const importBtn = document.getElementById('importPlanBtn');
    if (importBtn) {
        importBtn.addEventListener('click', importPlan);
    }
    
    // Print
    const printBtn = document.getElementById('printPlanBtn');
    if (printBtn) {
        printBtn.addEventListener('click', printPlan);
    }
    
    // Course management
    const addCourseBtn = document.getElementById('addCourseBtn');
    if (addCourseBtn) {
        addCourseBtn.addEventListener('click', addCustomCourse);
    }
    
    const clearPlanBtn = document.getElementById('clearPlanBtn');
    if (clearPlanBtn) {
        clearPlanBtn.addEventListener('click', clearPlan);
    }
    
    const savePlanBtn = document.getElementById('savePlanBtn');
    if (savePlanBtn) {
        savePlanBtn.addEventListener('click', savePlanManually);
    }
    
    // Filters
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    
    document.querySelectorAll('.timing-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleTimingFilterChange);
    });
    
    // Notes toggle
    const notesToggle = document.getElementById('showNotesToggle');
    if (notesToggle) {
        notesToggle.addEventListener('change', handleNotesToggle);
    }
    
    // Course type change
    const courseType = document.getElementById('newCourseType');
    if (courseType) {
        courseType.addEventListener('change', updateTimingOptions);
    }
    
    // Drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
    
    // Modal
    const modalClose = document.querySelector('#notesModal .modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    const saveNotesBtn = document.getElementById('saveNotesBtn');
    if (saveNotesBtn) {
        saveNotesBtn.addEventListener('click', saveNotesFromModal);
    }
    
    const notesModal = document.getElementById('notesModal');
    if (notesModal) {
        notesModal.addEventListener('click', (e) => {
            if (e.target.id === 'notesModal') closeModal();
        });
    }
    
    const instructionsModal = document.getElementById('instructionsModal');
    if (instructionsModal) {
        instructionsModal.addEventListener('click', (e) => {
            if (e.target.id === 'instructionsModal') closeInstructionsModal();
        });
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
