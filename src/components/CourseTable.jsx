import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const CourseTable = ({ courses }) => {
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    // Calculate completion data for each course
    const courseCompletionData = courses.map((course) => {
      const totalUnits = course.units.length;

      // Count units where all topics are marked completed in localStorage
      const completedUnits = course.units.filter((unit) => {
        return unit.topics.every((_, index) => {
          // Explicitly check if localStorage key is string 'true'
          const key = `checkboxState_${unit.title}_${index}`;
          const value = localStorage.getItem(key);
          return value === 'true';
        });
      }).length;

      return {
        title: course.title,
        completedUnits,
        totalUnits,
        percentage: totalUnits > 0 ? (completedUnits / totalUnits) * 100 : 0,
        status: completedUnits === totalUnits && totalUnits > 0 ? 'Completed' : 'In Progress',
      };
    });

    setCompletedCourses(courseCompletionData);
  }, [courses]);

  // Function to export the table data as an Excel file
  const exportToExcel = () => {
    const worksheetData = completedCourses.map((course) => ({
      "Course Title": course.title,
      "Total Units": course.totalUnits,
      "Completed Units": course.completedUnits,
      "Completion Percentage (%)": course.percentage.toFixed(2),
      Status: course.status,
    }));

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Course Progress');

    // Export the Excel file
    XLSX.writeFile(workbook, 'Course_Progress.xlsx');
  };

  return (
    <div className="course-table">
      <h2>You can install the Course data status</h2>
      <table border="1" cellPadding="10" id='course-table'>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Total Units</th>
            <th>Completed Units</th>
            <th>Completion Percentage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {completedCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.totalUnits}</td>
              <td>{course.completedUnits}</td>
              <td>{course.percentage.toFixed(0)}%</td>
              <td>{course.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
<button onClick={exportToExcel} id='downloadExcel'>Download for Excel</button> {/* Export Button */}
    </div>
  );
};

export default CourseTable;
