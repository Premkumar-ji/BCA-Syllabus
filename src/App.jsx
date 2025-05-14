// import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
// import "../public/Style.css";
// import "../public/fdf87a89-4c67-4dfc-ae99-3a75d0b7c71e.png";
// import Semester1 from "./components/SemesterFolder/Semester1";
// import Semester2 from "./components/SemesterFolder/Semester2";
// import Semester3 from "./components/SemesterFolder/Semester3";
// import Semester4 from "./components/SemesterFolder/Semester4";
// import Semester5 from "./components/SemesterFolder/Semester5";
// import Semester6 from "./components/SemesterFolder/Semester6";
// import BackToTop from "./components/backtotop";

import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "../public/Style.css";
import "../public/fdf87a89-4c67-4dfc-ae99-3a75d0b7c71e.png";
import Semester1 from "./components/SemesterFolder/Semester1";
import Semester2 from "./components/SemesterFolder/Semester2";
import Semester3 from "./components/SemesterFolder/Semester3";
import Semester4 from "./components/SemesterFolder/Semester4";
import Semester5 from "./components/SemesterFolder/Semester5";
import Semester6 from "./components/SemesterFolder/Semester6";
import BackToTop from "./components/backtotop";

const App = () => {
  const [activeSemester, setActiveSemester] = useState(() => {
    return localStorage.getItem("activeSemester") || "semester1";
  });
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleSemesterSwitch = (semester) => {
    setActiveSemester(semester);
    setMenu(false); // Hide the menu after selecting a semester
  };

  useEffect(() => {
    localStorage.setItem("activeSemester", activeSemester);
  }, [activeSemester]);

  const semesterComponents = {
    semester1: <Semester1 />,
    semester2: <Semester2 />,
    semester3: <Semester3 />,
    semester4: <Semester4 />,
    semester5: <Semester5 />,
    semester6: <Semester6 />,
  };

  return (
    <BrowserRouter> {/* Wrap your entire App with BrowserRouter */}
      <div className="App">
        {/* Hamburger Button */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>

        {/* Semester Buttons */}
        <span className={`semester-buttons ${menu ? "open" : ""}`}>
          {Object.keys(semesterComponents).map((semester, index) => (
            <button
              key={index}
              onClick={() => handleSemesterSwitch(semester)}
              className={activeSemester === semester ? "active" : ""}
            >
              Semester {index + 1}
            </button>
          ))}
        </span>
        <br />
        <br />
        <br />
        {/* Display Active Semester */}
        <div>{semesterComponents[activeSemester]}</div>
        <img src="image-logo.png" alt="" className="logo" />
      
      <BackToTop />
      </div>
    </BrowserRouter> 
  );
};

export default App;
