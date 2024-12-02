import React, { useState } from "react";
import "../public/Style.css";
import Semester1 from "./components/SemesterFolder/Semester1";
import Semester2 from "./components/SemesterFolder/Semester2";
import Semester3 from "./components/SemesterFolder/Semester3";
import Semester4 from "./components/SemesterFolder/Semester4";
import Semester5 from "./components/SemesterFolder/Semester5";
import Semester6 from "./components/SemesterFolder/Semester6";

const App = () => {
  const [activeSemester, setActiveSemester] = useState("semester1");
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleSemesterSwitch = (semester) => {
    setActiveSemester(semester);
    setMenu(false); // Hide the menu after selecting a semester
  };

  const semesterComponents = {
    semester1: <Semester1 />,
    semester2: <Semester2 />,
    semester3: <Semester3 />,
    semester4: <Semester4 />,
    semester5: <Semester5 />,
    semester6: <Semester6 />,
  };

  return (
    <div className="App">
      {/* Hamburger Button */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>

      {/* Semester Buttons */}
      <div className={`semester-buttons ${menu ? "open" : ""}`}>
        {Object.keys(semesterComponents).map((semester, index) => (
          <button
            key={index}
            onClick={() => handleSemesterSwitch(semester)}
            className={activeSemester === semester ? "active" : ""}
          >
            Semester {index + 1}
          </button>
        ))}
      </div>

      {/* Display Active Semester */}
      <div>{semesterComponents[activeSemester]}</div>
    </div>
  );
};

export default App;
