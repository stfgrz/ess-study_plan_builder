# MSc Economics Study Plan Builder

A comprehensive web-based application for planning your Bocconi MSc in Economics and Social Sciences course schedule with drag-and-drop functionality, multiple plan management, credits tracking, and import/export capabilities.

## Features

### Core Functionality
- **Drag and Drop Interface**: Easily drag courses from the sidebar and drop them into your study plan
- **2-Year Calendar**: Plan your courses across 2 years, divided into 4 quarters each (2 semesters/year)
- **Multiple Courses per Quarter**: Add as many courses as needed to each semester
- **Two Course Types**:
  - **MSc Courses**: Span an entire semester (2 consecutive quarters), worth 6 credits each
  - **PhD Courses**: Occupy 1 quarter only, worth 6 credits each

### Credits Tracking & Summary Panel
- **Real-time Credits Calculation**: Automatically calculates total credits for your plan
- **Credits by Year/Semester**: View credits breakdown for Y1S1, Y1S2, Y2S1, Y2S2
- **Credits by Category**: See how credits are distributed across Base, A, B, C, Extra, and PhD categories
- **Smart Duplicate Prevention**: MSc courses spanning two quarters are counted only once
- **Warnings System**: Highlights courses placed in wrong timing slots with visual indicators

### Multiple Plans Management
- **Create Multiple Plans**: Maintain different course schedule scenarios
- **Quick Switching**: Instantly switch between plans with dropdown selector
- **Plan Operations**:
  - **New Plan**: Create a blank plan or duplicate an existing one
  - **Rename Plan**: Give your plans descriptive names
  - **Duplicate Plan**: Copy a plan to try variations
  - **Delete Plan**: Remove plans you no longer need (cannot delete last plan)
- **Independent Storage**: Each plan stores its own placements and custom courses

### Course Management
- **228 Pre-loaded Courses**: Comprehensive course catalog loaded from external JSON
- **Six Course Categories**: Base, A (Core), B (Field), C (Topics), Extra, and PhD
- **Add Custom Courses**: Create your own courses with:
  - Name, category, type (MSc/PhD), timing (semester/quarter)
  - Credits (customizable, default 6)
  - Optional notes (professor, schedule, prerequisites, etc.)
- **Delete Custom Courses**: Remove custom courses from your plan
- **Course Notes**: Each course can include detailed notes with clickable syllabus links
- **Edit Placed Course Notes**: Click edit button on placed courses to modify notes

### Filtering & Organization
- **Category Filter**: Filter courses by category (Base, A, B, C, Extra, PhD)
- **Timing Filter**: Filter by semester (S1, S2)
- **Notes Toggle**: Show/hide course notes globally for cleaner view

### Import/Export
- **Export Plans**: Download your plan as a JSON file
  - File naming: `ess-plan_<planname>_<YYYY-MM-DD>.json`
  - Includes: placements, custom courses, plan metadata
  - Versioned schema for future compatibility
- **Import Plans**: Load previously exported plans
  - Choose to create new plan or overwrite current plan
  - Validation and error handling for invalid files
  - XSS protection for imported content
- **Backup & Restore**: Use export/import for plan backups

### Print/PDF Export
- **One-Click Print**: Generate clean, print-ready version of your plan
- **Comprehensive Output**:
  - Plan name and print date header
  - Full 2-year course grid
  - All placed courses with details
  - Notes visible in print version
- **Print-Optimized CSS**: Clean layout without controls/sidebars
- **PDF Ready**: Use browser's "Print to PDF" for permanent copy

### Validation & Feedback
- **Timing Validation**: Courses placed in wrong quarters are highlighted in red with pulsing animation
- **Wrong Slot Warning**: Visual "⚠ Wrong timing!" indicator for misplaced courses
- **Clear Error Messages**: User-friendly alerts for validation issues
- **Placement Rules**: Prevents invalid placements (e.g., MSc courses extending beyond calendar)

### Data Persistence
- **Local Storage**: Plans automatically saved in browser
- **Auto-save**: Changes saved immediately after edits
- **Migration Support**: Automatically migrates old single-plan storage to new multi-plan format
- **Backward Compatible**: Preserves existing data when upgrading

### Additional Features
- **Course Selection Guidelines**: Built-in instructions tab explaining program requirements
- **Clickable Syllabus Links**: Course notes with URLs open in new tabs
- **Color-coded Categories**: Visual distinction between course types
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **External Catalog**: Course list loaded from `courses.json` for easy updates

## How to Use

### Getting Started

1. **Open the Application**: Open `index.html` in your web browser (Chrome, Firefox, or Safari)

2. **View Guidelines**: Click "📋 Course Selection Guidelines" button for program requirements

### Managing Plans

1. **Switch Plans**: Use the dropdown selector in the header to switch between plans
2. **Create New Plan**: Click "+ New" button and enter a plan name
3. **Rename Plan**: Click "✎ Rename" to change the current plan's name
4. **Duplicate Plan**: Click "⎘ Duplicate" to create a copy of the current plan
5. **Delete Plan**: Click "🗑 Delete" to remove the current plan (requires confirmation)

### Adding and Organizing Courses

1. **Browse Courses**: 
   - Use category checkboxes to filter by type (Base, A, B, C, Extra, PhD)
   - Use timing checkboxes to filter by semester
   - Toggle "Show Notes" to view/hide course details

2. **Place Courses**: 
   - Drag a course from the sidebar
   - Drop it into any quarter in the 2-year calendar
   - MSc courses automatically span two quarters
   - PhD courses occupy one quarter

3. **Add Custom Courses**: 
   - Enter course name
   - Select category and type (MSc/PhD)
   - Select timing (Semester 1/2 for MSc, Quarter 1-4 for PhD)
   - Enter credits (default: 6)
   - Add optional notes
   - Click "Add Course"

4. **Edit Course Notes**: 
   - Click the ✎ button on any placed course
   - Edit notes in the modal
   - Click "Save Notes"

5. **Remove Courses**: 
   - Click the × button on any placed course to remove it
   - For MSc courses, both quarters are removed automatically

### Viewing Credits Summary

The summary panel (right side or bottom on mobile) shows:
- **Total Credits**: Overall credit count
- **By Year/Semester**: Credits for each semester (Y1S1, Y1S2, Y2S1, Y2S2)
- **By Category**: Credits breakdown by category (Base, A, B, C, Extra, PhD)
- **Warnings**: Any timing mismatches or validation issues

Click the "−/+" button to collapse/expand the summary panel.

### Import/Export Plans

**To Export a Plan:**
1. Click "📤 Export" button in the header
2. File downloads as `ess-plan_<planname>_<date>.json`
3. Save this file as a backup

**To Import a Plan:**
1. Click "📥 Import" button in the header
2. Select a previously exported JSON file
3. Choose to create a new plan or overwrite the current plan
4. Confirm the import

**Backup Strategy:**
- Export your plans regularly
- Store export files in cloud storage (Dropbox, Google Drive, etc.)
- Before major changes, export a backup

### Printing Your Plan

1. Click "🖨 Print" button in the header
2. Your browser's print dialog opens
3. Options:
   - Print to a physical printer
   - Save as PDF (recommended for sharing/archiving)
4. The print version includes:
   - Plan name and date
   - Complete 2-year grid
   - All course details and notes
   - Clean layout without controls

### Updating the Course Catalog

The course catalog is stored in `courses.json` (external file, not in code):

1. **Edit courses.json**: Open the file in a text editor
2. **Format**: Each course is a JSON object with:
   ```json
   {
     "id": "unique-id",
     "name": "Course Name",
     "category": "base|A|B|C|extra|PhD",
     "type": "msc|phd",
     "timing": "S1|S2|Q1|Q2|Q3|Q4",
     "notes": "Optional course notes",
     "credits": 6
   }
   ```
3. **Save**: Save the file
4. **Refresh**: Reload the application to see updated courses

**Note**: Custom courses added through the UI are stored separately per plan and are not in courses.json.

## Course Categories Explained

- **Base** (Gray): Compulsory foundation courses
  - Examples: Adv. Maths, Adv. Stats, FSS I, FSS II, Econometrics

- **Category A - Core** (Red): Advanced theoretical courses
  - Examples: Adv. Macro, Adv. Micro, Macroeconometrics, Microeconometrics
  - **Requirement**: At least 1 from this category

- **Category B - Field** (Blue): Applied economics courses
  - Examples: Development Economics, Game Theory, Labour Economics, Political Economics, Public Economics
  - **Requirement**: At least 1 from this category

- **Category C - Topics** (Green): Specialized and interdisciplinary courses
  - Examples: Behavioral Economics and Finance, Decision Theory, Econ of Crime, Time Series Analysis
  - **Requirement**: At least 1 from this category

- **Extra** (Orange): Graduate School electives from other MSc programs
  - Examples: Asset Management, Blockchain and Crypto Assets, Private Equity and Venture Capital
  - **Requirement**: At least 1 from lists A+B+C combined

- **PhD** (Purple): Doctoral-level courses (require application and selection)
  - Examples: Advanced Macro 1-4, Microeconomics 1-4, Structural Econometrics
  - **Note**: Each worth 6 credits; students can take up to 3, with 2 counting as MSc electives

## Technical Details

### Technology Stack
- Pure HTML, CSS, and JavaScript (no frameworks or build tools required)
- Uses browser localStorage for data persistence
- Responsive design with CSS Grid and Flexbox
- External JSON for course catalog

### File Structure
```
├── index.html       # Main HTML structure
├── styles.css       # Styling and layout (including @media print)
├── script.js        # Application logic
├── courses.json     # External course catalog (228 courses)
└── README.md        # This file
```

### Storage Format

The app stores data in localStorage under the key `studyPlanBuilderState` with this structure:

```json
{
  "version": 2,
  "activePlanId": "plan-id",
  "plans": [
    {
      "id": "plan-id",
      "name": "Plan Name",
      "createdAt": 1234567890,
      "updatedAt": 1234567890
    }
  ],
  "planDataById": {
    "plan-id": {
      "placements": {
        "1-1": [{ /* course */ }],
        "1-2": [{ /* course */ }]
      },
      "customCourses": [{ /* custom course */ }]
    }
  },
  "catalogCache": {
    "lastFetchedAt": 1234567890,
    "courses": [{ /* cached courses */ }]
  }
}
```

### Browser Compatibility

Works in all modern browsers:
- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile Browsers**: Responsive design supports mobile usage

Requires:
- ES6+ JavaScript support
- localStorage
- Fetch API

## Troubleshooting

### Catalog Not Loading

**Problem**: "Could not load course catalog" message appears

**Solutions**:
1. Ensure `courses.json` is in the same directory as `index.html`
2. If running locally, use a local web server (not `file://` protocol):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server installed)
   npx http-server
   ```
3. Check browser console for specific error messages
4. The app will use cached catalog if available, or minimal fallback set

### Plans Not Saving

**Problem**: Changes don't persist after refresh

**Solutions**:
1. Check if localStorage is enabled in your browser
2. Clear browser cache and reload
3. Check available storage space (localStorage has ~5-10MB limit)
4. Try exporting your plan as backup and reimporting

### Import Fails

**Problem**: Imported JSON file shows error

**Solutions**:
1. Verify the file is a valid JSON file (open in text editor)
2. Ensure the file was exported from this app (correct schema)
3. Check file hasn't been corrupted during transfer
4. Try exporting a test plan and importing it to verify functionality

### Print Layout Issues

**Problem**: Print output doesn't look right

**Solutions**:
1. Use Chrome or Firefox for best print results
2. In print dialog, choose:
   - Orientation: Landscape (recommended)
   - Margins: Default or Minimum
   - Scale: Fit to page width
3. For PDF: Choose "Print to PDF" or "Save as PDF"
4. Disable "Headers and Footers" for cleaner output

### Migration Issues

**Problem**: Old plan data not showing after update

**Solutions**:
1. The app automatically migrates old data on first load
2. Check browser console for migration messages
3. If issues persist, export using old version, then import in new version
4. Contact support with browser console logs

## Credits & Default Values

- **MSc Courses**: 6 credits (default, editable in custom courses)
- **PhD Courses**: 6 credits (default, editable in custom courses)
- **Total Required**: Program requirements vary; use summary panel to track
- **Custom Courses**: You can set any credit value (1-30)

## License

See LICENSE file for details.

## Support

For issues, questions, or suggestions:
1. Check this README for troubleshooting tips
2. Review browser console for error messages
3. Export your plan before making experimental changes
4. Keep backups of exported plans

## Version History

### Version 2.0 (Current)
- Multi-plan management
- Credits tracking and summary panel
- Import/export functionality
- Print/PDF export
- External course catalog (courses.json)
- Storage migration from v1
- Enhanced UI with plan controls

### Version 1.0
- Single plan support
- Basic drag-and-drop
- Course repository management
- Timing validation
- Local storage persistence
