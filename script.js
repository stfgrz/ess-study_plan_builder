// Default courses data
const defaultCourses = [
    // Category A
    { id: 'a1', name: 'Microeconomic Theory', category: 'A', type: 'msc' },
    { id: 'a2', name: 'Macroeconomic Theory', category: 'A', type: 'msc' },
    { id: 'a3', name: 'Econometrics I', category: 'A', type: 'msc' },
    { id: 'a4', name: 'Mathematical Methods', category: 'A', type: 'msc' },
    
    // Category B
    { id: 'b1', name: 'Development Economics', category: 'B', type: 'msc' },
    { id: 'b2', name: 'Public Economics', category: 'B', type: 'msc' },
    { id: 'b3', name: 'International Economics', category: 'B', type: 'msc' },
    { id: 'b4', name: 'Labor Economics', category: 'B', type: 'msc' },
    
    // Category C
    { id: 'c1', name: 'Financial Economics', category: 'C', type: 'msc' },
    { id: 'c2', name: 'Industrial Organization', category: 'C', type: 'msc' },
    { id: 'c3', name: 'Behavioral Economics', category: 'C', type: 'msc' },
    { id: 'c4', name: 'Health Economics', category: 'C', type: 'msc' },
    
    // Extra
    { id: 'e1', name: 'Research Methods', category: 'extra', type: 'msc' },
    { id: 'e2', name: 'Economic History', category: 'extra', type: 'msc' },
    { id: 'e3', name: 'Game Theory', category: 'extra', type: 'msc' },
    
    // PhD courses
    { id: 'p1', name: 'Advanced Microeconomics', category: 'PhD', type: 'phd' },
    { id: 'p2', name: 'Advanced Macroeconomics', category: 'PhD', type: 'phd' },
    { id: 'p3', name: 'Advanced Econometrics', category: 'PhD', type: 'phd' },
    { id: 'p4', name: 'Research Seminar', category: 'PhD', type: 'phd' },
];

// Application state
let courses = [];
let placedCourses = {};
let draggedCourse = null;
let activeFilters = new Set(['all', 'A', 'B', 'C', 'extra', 'PhD']);

// Initialize the application
function init() {
    // Load courses from localStorage or use defaults
    const savedCourses = localStorage.getItem('courses');
    courses = savedCourses ? JSON.parse(savedCourses) : [...defaultCourses];
    
    // Load placed courses from localStorage
    const savedPlacedCourses = localStorage.getItem('placedCourses');
    placedCourses = savedPlacedCourses ? JSON.parse(savedPlacedCourses) : {};
    
    // Render the UI
    renderCourseList();
    renderPlacedCourses();
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Add course button
    document.getElementById('addCourseBtn').addEventListener('click', addNewCourse);
    
    // Clear plan button
    document.getElementById('clearPlanBtn').addEventListener('click', clearPlan);
    
    // Save plan button
    document.getElementById('savePlanBtn').addEventListener('click', savePlan);
    
    // Filter checkboxes
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });
    
    // Set up drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
}

// Render the course list
function renderCourseList() {
    const container = document.getElementById('courseListContainer');
    container.innerHTML = '';
    
    const filteredCourses = courses.filter(course => {
        if (activeFilters.has('all')) return true;
        return activeFilters.has(course.category);
    });
    
    filteredCourses.forEach(course => {
        const courseElement = createCourseElement(course);
        container.appendChild(courseElement);
    });
}

// Create a course element
function createCourseElement(course) {
    const div = document.createElement('div');
    div.className = 'course-item';
    div.draggable = true;
    div.dataset.courseId = course.id;
    div.dataset.category = course.category;
    div.dataset.type = course.type;
    
    div.innerHTML = `
        <div class="course-name">${course.name}</div>
        <div class="course-meta">
            <span class="course-badge badge-category-${course.category}">${course.category}</span>
            <span class="course-badge badge-type-${course.type}">${course.type === 'msc' ? 'MSc (2Q)' : 'PhD (1Q)'}</span>
        </div>
    `;
    
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragend', handleDragEnd);
    
    return div;
}

// Handle drag start
function handleDragStart(e) {
    draggedCourse = {
        id: e.target.dataset.courseId,
        category: e.target.dataset.category,
        type: e.target.dataset.type,
        name: courses.find(c => c.id === e.target.dataset.courseId).name
    };
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

// Handle drag end
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedCourse = null;
}

// Handle drag over
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const dropZone = e.currentTarget;
    if (!dropZone.classList.contains('drag-over')) {
        dropZone.classList.add('drag-over');
    }
}

// Handle drag leave
function handleDragLeave(e) {
    if (e.target.classList.contains('drop-zone')) {
        e.target.classList.remove('drag-over');
    }
}

// Handle drop
function handleDrop(e) {
    e.preventDefault();
    const dropZone = e.currentTarget;
    dropZone.classList.remove('drag-over');
    
    if (!draggedCourse) return;
    
    const quarter = dropZone.closest('.quarter');
    const year = parseInt(quarter.dataset.year);
    const quarterNum = parseInt(quarter.dataset.quarter);
    
    // Check if the quarter is available
    if (!canPlaceCourse(year, quarterNum, draggedCourse.type)) {
        alert('Cannot place course here. The quarter(s) are already occupied or span beyond the calendar.');
        return;
    }
    
    // Place the course
    placeCourse(year, quarterNum, draggedCourse);
    renderPlacedCourses();
    savePlan();
}

// Check if a course can be placed in the given quarter
function canPlaceCourse(year, quarter, type) {
    const key1 = `${year}-${quarter}`;
    
    // Check if the first quarter is occupied
    if (placedCourses[key1]) return false;
    
    // For MSc courses, check the next quarter too
    if (type === 'msc') {
        let nextYear = year;
        let nextQuarter = quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        // Check if next quarter exists and is not occupied
        if (nextYear > 2) return false;
        
        const key2 = `${nextYear}-${nextQuarter}`;
        if (placedCourses[key2]) return false;
    }
    
    return true;
}

// Place a course
function placeCourse(year, quarter, course) {
    const key = `${year}-${quarter}`;
    placedCourses[key] = {
        ...course,
        year,
        quarter,
        isStart: true
    };
    
    // For MSc courses, also mark the next quarter
    if (course.type === 'msc') {
        let nextYear = year;
        let nextQuarter = quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        const key2 = `${nextYear}-${nextQuarter}`;
        placedCourses[key2] = {
            ...course,
            year: nextYear,
            quarter: nextQuarter,
            isStart: false,
            continuesFrom: key
        };
    }
}

// Render placed courses in the calendar
function renderPlacedCourses() {
    // Clear all drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = '';
        zone.classList.remove('occupied');
    });
    
    // Place courses
    Object.entries(placedCourses).forEach(([key, course]) => {
        const [year, quarter] = key.split('-').map(Number);
        const quarterElement = document.querySelector(`.quarter[data-year="${year}"][data-quarter="${quarter}"]`);
        const dropZone = quarterElement.querySelector('.drop-zone');
        
        const placedElement = document.createElement('div');
        placedElement.className = 'placed-course';
        placedElement.dataset.category = course.category;
        placedElement.dataset.key = key;
        
        if (course.type === 'msc' && !course.isStart) {
            placedElement.classList.add('msc-spanning');
        }
        
        placedElement.innerHTML = `
            <div class="placed-course-name">${course.name}</div>
            <div class="placed-course-meta">
                ${course.category} • ${course.type === 'msc' ? (course.isStart ? 'Part 1/2' : 'Part 2/2') : 'PhD'}
            </div>
            <button class="remove-course" data-key="${key}">×</button>
        `;
        
        dropZone.appendChild(placedElement);
        dropZone.classList.add('occupied');
        
        // Add remove event listener
        placedElement.querySelector('.remove-course').addEventListener('click', (e) => {
            e.stopPropagation();
            removeCourse(e.target.dataset.key);
        });
    });
}

// Remove a course from the calendar
function removeCourse(key) {
    const course = placedCourses[key];
    
    if (!course) return;
    
    // If this is the start of an MSc course, also remove the continuation
    if (course.type === 'msc' && course.isStart) {
        let nextYear = course.year;
        let nextQuarter = course.quarter + 1;
        
        if (nextQuarter > 4) {
            nextQuarter = 1;
            nextYear += 1;
        }
        
        const nextKey = `${nextYear}-${nextQuarter}`;
        delete placedCourses[nextKey];
    }
    
    // If this is the continuation of an MSc course, also remove the start
    if (course.type === 'msc' && !course.isStart && course.continuesFrom) {
        delete placedCourses[course.continuesFrom];
    }
    
    delete placedCourses[key];
    renderPlacedCourses();
    savePlan();
}

// Add a new course
function addNewCourse() {
    const name = document.getElementById('newCourseName').value.trim();
    const category = document.getElementById('newCourseCategory').value;
    const type = document.getElementById('newCourseType').value;
    
    if (!name) {
        alert('Please enter a course name');
        return;
    }
    
    // Generate a unique ID
    const id = 'custom-' + Date.now();
    
    const newCourse = {
        id,
        name,
        category,
        type
    };
    
    courses.push(newCourse);
    saveCourses();
    renderCourseList();
    
    // Clear the form
    document.getElementById('newCourseName').value = '';
    
    alert(`Course "${name}" added successfully!`);
}

// Handle filter changes
function handleFilterChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'all') {
        if (isChecked) {
            activeFilters = new Set(['all', 'A', 'B', 'C', 'extra', 'PhD']);
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
            document.querySelector('.category-filter[value="all"]').checked = false;
        }
        
        // Check if all individual filters are selected
        const allSelected = ['A', 'B', 'C', 'extra', 'PhD'].every(cat => activeFilters.has(cat));
        if (allSelected) {
            activeFilters.add('all');
            document.querySelector('.category-filter[value="all"]').checked = true;
        }
    }
    
    renderCourseList();
}

// Clear the study plan
function clearPlan() {
    if (confirm('Are you sure you want to clear your entire study plan?')) {
        placedCourses = {};
        renderPlacedCourses();
        savePlan();
    }
}

// Save the study plan
function savePlan() {
    localStorage.setItem('placedCourses', JSON.stringify(placedCourses));
    
    // Show a brief confirmation (you could make this more elegant)
    const saveBtn = document.getElementById('savePlanBtn');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = '✓ Saved!';
    setTimeout(() => {
        saveBtn.textContent = originalText;
    }, 1500);
}

// Save courses to localStorage
function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', init);
