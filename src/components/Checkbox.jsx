import React from 'react';

const Checkbox = ({ id, checked, onChange }) => {
  // Controlled component: state is managed by the parent
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={`cbx_${id}`}
        style={{ display: 'none' }}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} // Notify parent of changes
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
