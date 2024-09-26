import React from 'react';
import Unit from './Unit';
import '../../public/Style.css'

const Course = ({ course }) => {
  return (
    <div className="course">
      <div className="course-header">
        <h2>{course.title}</h2>
        <p>Time: {course.time}</p>
        <p>Marks: {course.marks}</p>
        <p>Credit: {course.credit}</p>
      </div>
      {course.units.map((unit, unitIndex) => (
        <Unit key={unitIndex} unit={unit} />
      ))}
    </div>
  );
};

export default Course;
