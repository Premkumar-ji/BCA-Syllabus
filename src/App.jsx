import React, { useState } from 'react';
import '../public/Style.css';
import Semester1 from './components/SemesterFolder/Semester1';
import Semester2 from './components/SemesterFolder/Semester2';
import Semester3 from './components/SemesterFolder/Semester3';
import Semester4 from './components/SemesterFolder/Semester4';
import Semester5 from './components/SemesterFolder/Semester5';
import Semester6 from './components/SemesterFolder/Semester6';

function App() {
  // State to track the active semester
  const [activeSemester, setActiveSemester] = useState('semester1'); // Default is Semester 5

  // Handle button click to switch active semester
  const handleSemesterSwitch = (semester) => {
    setActiveSemester(semester);
  };

  return (
    <div className="App">
      {/* Buttons to toggle between semesters */}
      <div className="semester-buttons">
        <button
          onClick={() => handleSemesterSwitch('semester1')}
          className={activeSemester === 'semester1' ? 'active' : ''}
        >
          Semester 1
        </button>

        <button
          onClick={() => handleSemesterSwitch('semester2')}
          className={activeSemester === 'semester2' ? 'active' : ''}
        >
          Semester 2
        </button>
        
        <button
          onClick={() => handleSemesterSwitch('semester3')}
          className={activeSemester === 'semester3' ? 'active' : ''}
        >
          Semester 3
        </button>
      
        <button
          onClick={() => handleSemesterSwitch('semester4')}
          className={activeSemester === 'semester4' ? 'active' : ''}
        >
          Semester 4
        </button>

        <button
          onClick={() => handleSemesterSwitch('semester5')}
          className={activeSemester === 'semester5' ? 'active' : ''}
        >
          Semester 5
        </button>

        <button
          onClick={() => handleSemesterSwitch('semester6')}
          className={activeSemester === 'semester6' ? 'active' : ''}
        >
          Semester 6
        </button>
      </div>

      {/* Wrapper for the scrollable content */}
      <div className="custom-scrollbar">
        {/* Show Semester 1 if the token is 'semester1' */}
        {activeSemester === 'semester1' && <Semester1 />}

        {/* Show Semester 2 if the token is 'semester2' */}
        {activeSemester === 'semester2' && <Semester2 />}
        
        {/* Show Semester 3 if the token is 'semester3 */}
        {activeSemester === 'semester3' && <Semester3 />}
        
        {/* Show Semester 4 if the token is 'semester4' */}
        {activeSemester === 'semester4' && <Semester4 />}

        {/* Show Semester 5 if the token is 'semester5' */}
        {activeSemester === 'semester5' && <Semester5 />}

        {/* Show Semester 6 if the token is 'semester6' */}
        {activeSemester === 'semester6' && <Semester6 />}

      </div>
    </div>
  );
}

export default App;
