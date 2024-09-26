import React from 'react';
import Checkbox from './Checkbox';
import '../../public/Style.css'
const Unit = ({ unit }) => {
  return (<>

  
    <br></br>
    <br></br>
    <div className="unit">
      <h3>{unit.title}</h3>
      <ul>
        {unit.topics.map((topic, index) => (
          <li key={index}>
            <Checkbox id={`${unit.title}_${index}`} />
            <span className="checkbox-label">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
 </> );
};

export default Unit;
