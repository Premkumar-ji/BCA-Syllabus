import React, { useState, useEffect } from 'react';
import Unit from './Unit';

const Course = ({ course }) => {
  const [checkedTopics, setCheckedTopics] = useState(new Set());
  const [tokens, setTokens] = useState(new Set());

  useEffect(() => {
    const checkedFromStorage = new Set();
    const tokenFromStorage = new Set();

    course.units.forEach((unit) => {
      unit.topics.forEach((_, index) => {
        const saved = localStorage.getItem(`checkboxState_${unit.title}_${index}`);
        if (saved === 'true') {
          checkedFromStorage.add(`${unit.title}_${index}`);
        }
      });

      if (unit.topics.every((_, index) => checkedFromStorage.has(`${unit.title}_${index}`))) {
        tokenFromStorage.add(unit.title);
      }
    });

    setCheckedTopics(checkedFromStorage);
    setTokens(tokenFromStorage);
  }, [course]);

  const handleCheckedChange = (isChecked, unitTitle, topicIndex) => {
    setCheckedTopics((prevChecked) => {
      const updatedChecked = new Set(prevChecked);

      if (isChecked) {
        updatedChecked.add(`${unitTitle}_${topicIndex}`);
      } else {
        updatedChecked.delete(`${unitTitle}_${topicIndex}`);
      }

      const currentUnit = course.units.find((unit) => unit.title === unitTitle);
      const unitIsCompleted = currentUnit.topics.every((_, index) =>
        updatedChecked.has(`${unitTitle}_${index}`)
      );

      setTokens((prevTokens) => {
        const updatedTokens = new Set(prevTokens);
        if (unitIsCompleted) {
          updatedTokens.add(unitTitle);
        } else {
          updatedTokens.delete(unitTitle);
        }
        return updatedTokens;
      });

      return updatedChecked;
    });

    localStorage.setItem(`checkboxState_${unitTitle}_${topicIndex}`, isChecked.toString());
  };

  return (
    <div className="course">
      <div className="course-header">
        <h2>{course.title}</h2>
        <p>Time: {course.time}</p>
        <p>Marks: {course.marks}</p>
        <p>Credit: {course.credit}</p>
      </div>

      <p>Total Units: {course.units.length}</p>
      <p>Total Completed: {Math.floor((checkedTopics.size / course.units.flatMap((unit) => unit.topics).length) * 100)}%</p>
      {/* <p>Tokens (Completed Units): {tokens.size}</p> */}

      {course.units.map((unit, unitIndex) => (
        <Unit
          key={unitIndex}
          unit={unit}
          onCheckedChange={handleCheckedChange}
          completed={tokens.has(unit.title)}
        />
      ))}
    </div>
  );
};

export default Course;
