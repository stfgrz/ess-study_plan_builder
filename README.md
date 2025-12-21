# MSc Economics Study Plan Builder

A web-based application for planning your Bocconi MSc in Economics and Social Sciences course schedule with drag-and-drop functionality.

## Features

### Core Functionality
- **Drag and Drop Interface**: Easily drag courses from the sidebar and drop them into your study plan
- **2-Year Calendar**: Plan your courses across 2 years, divided into 2 semesters each
- **Multiple Courses per Quarter**: Add as many courses as needed to each semester
- **Two Course Types**:
  - **MSc Courses**: Span an entire semester (2 consecutive quarters)
  - **PhD Courses**: Occupy 1 quarter only

### Course Management
- **Six Course Categories**: Base, A (Core), B (Field), C (Topics), Extra, and PhD
- **228 Pre-loaded Courses**: Comprehensive course catalog with metadata
- **Add Custom Courses**: Add your own courses with name, category, timing, and optional notes
- **Delete Courses**: Remove courses from the repository (hover over course, click ×)
- **Course Notes**: Each course can include detailed notes (course code, professor, syllabus link, disciplinary field, etc.)
- **Edit Notes**: Click on placed courses to edit their notes

### Filtering & Organization
- **Category Filter**: Filter courses by category (Base, A, B, C, Extra, PhD)
- **Timing Filter**: Filter by semester (S1, S2) or quarter (Q1, Q2, Q3, Q4)
- **Notes Toggle**: Show/hide course notes globally

### Validation & Feedback
- **Timing Validation**: Courses placed in wrong quarters are highlighted in red with pulsing animation
- **Wrong Slot Warning**: Visual "⚠ Wrong timing!" indicator for misplaced courses

### Data Persistence
- **Local Storage**: Your study plan and course list are automatically saved in your browser
- **Auto-save**: Changes are saved immediately

### Additional Features
- **Course Selection Guidelines**: Built-in instructions tab explaining program requirements
- **Clickable Syllabus Links**: Course notes with URLs open in new tabs
- **Color-coded Categories**: Visual distinction between course types
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. **Open the Application**: Open `index.html` in your web browser

2. **View Guidelines**: Click "📋 Course Selection Guidelines" button for program requirements

3. **Browse Courses**: 
   - Use category checkboxes to filter by type (Base, A, B, C, Extra, PhD)
   - Use timing checkboxes to filter by semester or quarter
   - Toggle "Show Notes" to view course details

4. **Add Custom Courses**: 
   - Enter course name
   - Select category and type (MSc/PhD)
   - Select timing (Semester 1/2 for MSc, Quarter 1-4 for PhD)
   - Add optional notes
   - Click "Add Course"

5. **Delete Repository Courses**:
   - Hover over any course in the sidebar
   - Click the × button to remove it from the list

## Course Categories

- **Base** (Purple): Compulsory foundation courses
  - Examples: Adv. Maths, Adv. Stats, FSS I, FSS II, Econometrics

- **Category A - Core** (Red): Advanced theoretical courses
  - Examples: Adv. Macro, Adv. Micro, Macroeconometrics, Microeconometrics

- **Category B - Field** (Blue): Applied economics courses
  - Examples: Development Economics, Game Theory, Labour Economics, Political Economics, Public Economics

- **Category C - Topics** (Green): Specialized and interdisciplinary courses
  - Examples: Behavioral Economics and Finance, Decision Theory, Econ of Crime, Time Series Analysis

- **Extra** (Orange): Graduate School electives from other MSc programs
  - Examples: Asset Management, Blockchain and Crypto Assets, Private Equity and Venture Capital, Machine Learning for Finance

- **PhD** (Purple): Doctoral-level courses (require application and selection)
  - Examples: Advanced Macro 1-4, Microeconomics 1-4, Structural Econometrics, Political Economics Advanced

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Uses localStorage for data persistence
- Responsive design with CSS Grid and Flexbox

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari

## Installation

No installation required! Just download and open `index.html` in your browser.

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - Application logic and course data

## License

See LICENSE file for details.
