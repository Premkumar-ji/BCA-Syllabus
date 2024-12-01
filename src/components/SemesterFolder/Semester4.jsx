import React from 'react';
import Header from '../Header.jsx';
import Course from '../Course.jsx';
import CourseTable from '../CourseTable.jsx';
 const courses = [
    
        {
          "title": "ANDROID PROGRAMMING (BCA C4001)",
          "time": "3 hrs",
          "credit": "4",
          "marks": "70",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION",
              "topics": [
                "History of Android",
                "Introduction to Android Operating Systems",
                "Android Development Tools",
                "Android Architecture"
              ]
            },
            {
              "title": "UNIT 2: DEVELOPMENT TOOLS",
              "topics": [
                "Installing and using Eclipse with ADT plug-in",
                "Installing Virtual machine for Android sandwich/Jelly bean (Emulator)",
                "Configuring the installed tools",
                "Creating an Android project – Hello World",
                "Running on emulator",
                "Deploying on USB-connected Android device"
              ]
            },
            {
              "title": "UNIT 3: USER INTERFACE ARCHITECTURE",
              "topics": [
                "Application context",
                "Intents",
                "Activity life cycle",
                "Multiple screen sizes"
              ]
            },
            {
              "title": "UNIT 4: USER INTERFACE DESIGN",
              "topics": [
                "Form widgets",
                "Text fields",
                "Layouts",
                "Button control",
                "Toggle buttons",
                "Spinners (Combo boxes)",
                "Images",
                "Menu",
                "Dialog"
              ]
            },
            {
              "title": "UNIT 5: DATABASE",
              "topics": [
                "Understanding SQLite database",
                "Connecting with the database"
              ]
            }
          ],
          "textbooks": [
            "Android Application Development for Java Programmers by James C. Sheusi (Cengage Learning, 2013)",
            "Android Programming with Kotlin for Beginners by John Horton"
          ],
          "reference_books": [
            "Beginning Android 4 Application Development by Wei-Meng Lee (WILEY India Edition WROX Publication)",
            "Professional Android 4 Application Development by Reto Meier (WROX Publication)",
            "The official site for Android developers - https://developer.android.com"
          ]
        },
        {
          "title": "OPERATING SYSTEM (BCA C4002)",
          "time": "3 hrs",
          "credit": "5",
          "marks": "70",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION & COMPUTER-SYSTEM STRUCTURES",
              "topics": [
                "What is an Operating System?",
                "Functions of OS",
                "OS structure",
                "Types of OS",
                "I/O structure",
                "Storage structure",
                "Storage hierarchy",
                "System calls"
              ]
            },
            {
              "title": "UNIT 2: PROCESSES & CPU SCHEDULING",
              "topics": [
                "Process concept",
                "Process scheduling",
                "Operations on processes",
                "Basic concepts",
                "Scheduling criteria",
                "Scheduling algorithms",
                "Deadlock prevention, avoidance, and detection"
              ]
            },
            {
              "title": "UNIT 3: STORAGE MANAGEMENT",
              "topics": [
                "Memory management",
                "Contiguous memory allocation",
                "Paging",
                "Demand paging",
                "Segmentation",
                "Access methods",
                "Directory structure",
                "Protection"
              ]
            },
            {
              "title": "UNIT 4: DISK MANAGEMENT",
              "topics": [
                "Disk structure",
                "Disk scheduling",
                "Disk management",
                "Swap-space management"
              ]
            },
            {
              "title": "UNIT 5: FILE MANAGEMENT",
              "topics": [
                "File-system structure",
                "File-system implementation",
                "Directory implementation",
                "Allocation methods",
                "Free-space management"
              ]
            }
          ],
          "textbooks": [
            "Operating System Concepts by A. Silberschatz et al. (6th Edition, John Wiley Inc., 2003)"
          ],
          "reference_books": [
            "Operating Systems by H.M. Deitel (6th Edition, Pearson Education, 2006)",
            "Operating Systems by D.M. Dhandhare (2nd Edition, Tata McGraw Hill, New Delhi, 2006)"
          ]
        },
        {
          "title": "HTML (BCA C4003)",
          "time": "3 hrs",
          "credit": "4",
          "marks": "70",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION TO HTML & TAGS",
              "topics": [
                "HTML document structure tags",
                "HTML text formatting tags",
                "Inserting special characters",
                "Anchor tag",
                "List tag",
                "Adding images and sound"
              ]
            },
            {
              "title": "UNIT 2: ADVANCED HTML",
              "topics": [
                "Tables",
                "Frames and floating",
                "Developing forms"
              ]
            },
            {
              "title": "UNIT 3: CSS (Cascading Style Sheet)",
              "topics": [
                "Introduction to CSS",
                "Need for design in HTML pages",
                "Tag structure",
                "Selectors (ID, class)",
                "Properties of font and div tag"
              ]
            },
            {
              "title": "UNIT 4: DATA ACCESS & ERROR HANDLING",
              "topics": [
                "Web techniques",
                "HTTP basics",
                "Server information",
                "Processing forms",
                "Setting response headers",
                "Maintaining state",
                "Databases",
                "Using PHP to access a database",
                "Security",
                "Session fixation",
                "File uploads",
                "File access",
                "PHP code handling output",
                "Error handling"
              ]
            },
            {
              "title": "UNIT 5: HTML GRAPHICS AND HTML MEDIA",
              "topics": [
                "HTML forms and elements",
                "HTML input types and attributes",
                "HTML support and semantics",
                "HTML migration and style guide"
              ]
            }
          ],
          "textbooks": [
            "Web Technologies: A Computer Science Perspective by Jackson (Pearson Education, 2007)"
          ],
          "reference_books": [
            "HTML & Web Design by Kriss Jamsa, Konrad King (TMH Publications, 2002)",
            "Servlet Programming by Jason Hunter, William Crawford (O’REILY, 2010)"
          ]
        },
        {
          "title": "VISUAL PROGRAMMING (BCA C4004)",
          "time": "3 hrs",
          "credit": "4",
          "marks": "70",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION TO .NET",
              "topics": [
                ".NET Framework and the Common Language Runtime",
                "Integrated Development Environment"
              ]
            },
            {
              "title": "UNIT 2: PROGRAMMING IN C#",
              "topics": [
                "Data types in C#",
                "Keywords",
                "Operators",
                "Conditionals and loops"
              ]
            },
            {
              "title": "UNIT 3: .NET ASSEMBLIES",
              "topics": [
                ".NET Assemblies",
                "Shared assemblies",
                "Side-by-side execution",
                "Benefits of assemblies over predecessors"
              ]
            },
            {
              "title": "UNIT 4: WINDOWS FORMS",
              "topics": [
                "Working with Windows forms",
                "Windows form controls (Buttons, TextBoxes, Labels, CheckBoxes, etc.)",
                "Dialog controls (Open, Save)",
                "Timers and ProgressBars"
              ]
            },
            {
              "title": "UNIT 5: ADO.NET",
              "topics": [
                "Introduction to ADO.NET",
                "Data providers",
                "Connections and commands",
                "Using DataGridView for database connections"
              ]
            }
          ],
          "textbooks": [
            "Visual Basic.NET Programming Black Book by Steven Holizner (5th Ed., Dreamtech Publication, 2007)"
          ],
          "reference_books": [
            "VB.NET by Dinesh Maidasani (Firewall Media Publication, 2007)"
          ]
        },
        {
          "title": "COMPUTER NETWORKS (BCA C4005)",
          "time": "3 hrs",
          "credit": "5",
          "marks": "70",
          "units": [
            {
              "title": "UNIT 1: BASIC CONCEPTS AND TERMINOLOGY",
              "topics": [
                "Introduction",
                "OSI Model",
                "TCP/IP Model",
                "Services and standards"
              ]
            },
            {
              "title": "UNIT 2: COMPUTER NETWORK",
              "topics": [
                "Network topology",
                "Performance of network",
                "Network classification",
                "Transmission media",
                "Network architecture"
              ]
            },
            {
              "title": "UNIT 3: DATA LINK LAYER",
              "topics": [
                "Flow control mechanism",
                "Error detection and correction techniques"
              ]
            },
            {
              "title": "UNIT 4: NETWORK LAYER",
              "topics": [
                "Routing",
                "Congestion control",
                "Internetworking principles",
                "IPv4 packet format",
                "Hierarchical addressing and subnetting"
              ]
            },
            {
              "title": "UNIT 5: TRANSPORT LAYER",
              "topics": [
                "Process-to-process delivery",
                "TCP and UDP",
                "TCP connection"
              ]
            },
            {
              "title": "UNIT 6: APPLICATION LAYER",
              "topics": [
                "Telnet",
                "FTP",
                "NFS",
                "SMTP",
                "SNMP",
                "HTTP"
              ]
            }
          ]
        }
      
      
      
      
    // Add more courses here...
  ];

  
function Semester4(){

    return (
        <div className="App">
      <Header />
      <div className="semester-name">
        <img src="https://fontmeme.com/permalink/240925/76247a096a636766bf876b285c63d322.png" alt="futuristic-fonts" />
        &nbsp; &nbsp;
        <img src="https://fontmeme.com/permalink/241130/abc34d575e10f9a3f24dded35710ecf4.png" alt="futuristic-fonts" />
      </div>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
      <CourseTable courses={courses} />  {/* Add CourseTable */}
 
    </div>
  );
}
  
  export default Semester4;