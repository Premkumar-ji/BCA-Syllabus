import React, { useState, useEffect } from 'react';

const Checkbox = ({ id }) => {
  // Initialize state from localStorage or default to false
  const [isChecked, setIsChecked] = useState(() => {
    const saved = localStorage.getItem(`checkboxState_${id}`);
    return saved === 'true'; // Convert string back to boolean
  });

  // Save the state to localStorage when isChecked changes
  useEffect(() => {
    localStorage.setItem(`checkboxState_${id}`, isChecked.toString());
  }, [isChecked, id]);

  // Handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={`cbx_${id}`}
        style={{ display: 'none' }}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={`cbx_${id}`} className="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
