# MSc Economics Study Plan Builder

A web-based application for planning your MSc in Economics course schedule with drag-and-drop functionality.

## Features

- **Drag and Drop Interface**: Easily drag courses from the list and drop them into your study plan
- **2-Year Calendar**: Plan your courses across 2 years with 4 quarters each (8 quarters total)
- **Two Course Types**:
  - **MSc Courses**: Last for 2 consecutive quarters
  - **PhD Courses**: Last for 1 quarter
- **Five Course Categories**: A, B, C, Extra, and PhD
- **Add Custom Courses**: Create your own courses on the fly
- **Filter Courses**: Filter the course list by category
- **Automatic Validation**: Prevents overlapping courses and validates placement
- **Local Storage**: Your study plan is automatically saved in your browser

## How to Use

1. **Open the Application**: Simply open `index.html` in your web browser

2. **View Available Courses**: The left sidebar shows all available courses with their categories and durations

3. **Add Custom Courses**: 
   - Enter a course name
   - Select a category (A, B, C, Extra, or PhD)
   - Select a type (MSc for 2 quarters or PhD for 1 quarter)
   - Click "Add Course"

4. **Plan Your Schedule**:
   - Drag a course from the list on the left
   - Drop it into a quarter slot in the calendar
   - MSc courses will automatically occupy 2 consecutive quarters
   - PhD courses occupy only 1 quarter

5. **Manage Your Plan**:
   - Click the × button on any placed course to remove it
   - Click "Clear Plan" to start over
   - Click "Save Plan" to save your progress (auto-saves on changes)

6. **Filter Courses**: Use the checkboxes in the sidebar to filter courses by category

## Course Categories

- **Category A**: Core theoretical courses (e.g., Microeconomic Theory, Macroeconomic Theory)
- **Category B**: Applied economics courses (e.g., Development Economics, Public Economics)
- **Category C**: Specialized courses (e.g., Financial Economics, Behavioral Economics)
- **Extra**: Additional courses (e.g., Research Methods, Economic History)
- **PhD**: Doctoral-level courses (e.g., Advanced Microeconomics)

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Uses localStorage for data persistence
- Responsive design for different screen sizes
- Color-coded courses by category

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari

## Installation

No installation required! Just open `index.html` in your browser.

## License

See LICENSE file for details.