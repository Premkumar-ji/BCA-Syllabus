import React, { useState } from 'react';
import Checkbox from './Checkbox';

const Unit = ({ unit, onCheckedChange, completed }) => {
  const [checkedStates, setCheckedStates] = useState(
    unit.topics.map((_, index) => {
      const saved = localStorage.getItem(`checkboxState_${unit.title}_${index}`);
      return saved === 'true';
    })
  );

  const handleCheckboxChange = (index, isChecked) => {
    const updatedStates = [...checkedStates];
    updatedStates[index] = isChecked;
    setCheckedStates(updatedStates);

    onCheckedChange(isChecked, unit.title, index);
  };

  return (
    <div className="unit">
      <h3>
        {unit.title} {completed && <span className="token-badge">✔️ Completed</span>}
      </h3>

      <ul>
        {unit.topics.map((topic, index) => (
          <li key={index}>
            <Checkbox
              id={`${unit.title}_${index}`}
              checked={checkedStates[index]}
              onChange={(isChecked) => handleCheckboxChange(index, isChecked)}
            />
            <span className="checkbox-label">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Unit;
