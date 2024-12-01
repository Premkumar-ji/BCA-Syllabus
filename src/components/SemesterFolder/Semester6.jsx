import React from 'react';
import Header from '../Header.jsx';
import Course from '../Course.jsx';
import CourseTable from '../CourseTable.jsx';
 const courses = [
    {
      "title": "OPTIMIZATION TECHNIQUES (BCA C6001)",
      "time": "3 hrs",
      "marks": "70",
      "credit": "4",
      "units": [
        {
          "title": "UNIT 1: OPERATIONS RESEARCH-AN INTRODUCTION",
          "topics": [
            "Definitions of Operations Research",
            "Characteristics of Operations Research Approach"
          ]
        },
        {
          "title": "UNIT 2: LINEAR PROGRAMMING- APPLICATIONS AND MODEL FORMULATION",
          "topics": [
            "Graphical Solution Methods of LP Problem",
            "Structure of Linear Programming Model",
            "Advantages of Using Linear Programming",
            "Limitations of Linear Programming",
            "Applications Areas of Linear Programming",
            "General Mathematical Model of Linear Programming Model",
            "Guidelines on Linear Programming Model Formulation",
            "Examples of LP Model Formulation"
          ]
        },
        {
          "title": "UNIT 3: LINEAR PROGRAMMING- THE SIMPLEX METHOD",
          "topics": [
            "Introduction",
            "Standard Form of an LP Problem",
            "Simplex Algorithm (Maximization Case)",
            "Simplex Algorithm (Minimization Case)"
          ]
        },
        {
          "title": "UNIT 4: TRANSPORTATION & ASSIGNMENT PROBLEM",
          "topics": [
            "Introduction",
            "Mathematical Model of Transportation Problem",
            "The Transportation Algorithm",
            "Methods for Finding Initial Solution",
            "Mathematical Model of Assignment Problem",
            "Solution Methods of Assignment Problem"
          ]
        },
        {
          "title": "UNIT 5: PROJECT MANAGEMENT-PERT AND CPM",
          "topics": [
            "Introduction",
            "Basic Differences between PERT and CPM",
            "Phases of Project Management",
            "PERT/CPM Network Components and Precedence Relationships",
            "Critical Path Analysis"
          ]
        }
      ]
    },
    {
      "title": "PRINCIPLE OF MANAGEMENT (BCA C6002)",
      "time": "3 hrs",
      "marks": "70",
      "credit": "4",
      "units": [
        {
          "title": "UNIT 1: NATURE OF MANAGEMENT",
          "topics": [
            "Meaning, Definition, Nature, Purpose, Importance & Functions",
            "Management as Art and Science",
            "Concepts of Management, Administration, Organization",
            "Management Skills",
            "Levels of Management"
          ]
        },
        {
          "title": "UNIT 2: EVOLUTION OF MANAGEMENT THOUGHT",
          "topics": [
            "Contribution of F.W. Taylor, Henri Fayol, Elton Mayo, Peter Drucker to Management Thought",
            "Business Ethics & Social Responsibility",
            "Concept, Shift to Ethics, Tools of Ethics"
          ]
        },
        {
          "title": "UNIT 3: FUNCTIONS OF MANAGEMENT: PART-I",
          "topics": [
            "Planning: Meaning, Need & Importance, Types, Process of Planning, Barriers to Effective Planning",
            "Forecasting: Need & Techniques",
            "Organizing: Elements of Organizing & Processes, Types of Organizations, Delegation of Authority",
            "Staffing: Meaning & Importance",
            "Direction: Nature & Principles",
            "Communication: Types & Importance"
          ]
        },
        {
          "title": "UNIT 4: FUNCTIONS OF MANAGEMENT: PART-II",
          "topics": [
            "Motivation: Importance & Theories",
            "Leadership: Meaning, Styles, Qualities & Functions of Leaders",
            "Controlling: Need, Nature, Importance, Process & Techniques",
            "Coordination: Need & Importance"
          ]
        }
      ]
    },
    {
      "title": "LINUX PROGRAMMING (BCA C6003)",
      "time": "3 hrs",
      "marks": "70",
      "credit": "5",
      "units": [
        {
          "title": "UNIT 1: OVERVIEW OF LINUX ARCHITECTURE",
          "topics": [
            "Kernel, Processes, Time Sharing, Shell, Files and Directories",
            "Creation of a File, Inode Numbers and Filenames",
            "File Security, File Systems, Peripheral Devices as Files"
          ]
        },
        {
          "title": "UNIT 2: LINUX EDITOR AND BASIC LINUX COMMANDS",
          "topics": [
            "Ed Editor, Vi Editor",
            "Redirections, Piping, Filters",
            "LINUX Utilities: Grep, Sed, Awk"
          ]
        },
        {
          "title": "UNIT 3: INTRODUCTION TO SHELL SCRIPTS",
          "topics": [
            "Bourne Shell, C Shell",
            "Shell Variables, Scripts, Metacharacters and Environments",
            "If and Case Statements",
            "For, While, and Until Loops"
          ]
        },
        {
          "title": "UNIT 4: INTRODUCTION TO SYSTEM ADMINISTRATION",
          "topics": [
            "File System, System Administrator and its Role",
            "Function of a System Manager, Practical Aspects",
            "System Call and C Function Library: Linux System Call Library Function, Math Library, Standard I/O Package",
            "File Handling, Command Line Parameters"
          ]
        }
      ]
    },
    {
      "title": "NETWORK SECURITY (BCA C6004)",
      "time": "3 hrs",
      "marks": "70",
      "credit": "5",
      "units": [
        {
          "title": "UNIT 1: INTRODUCTION",
          "topics": [
            "Attack, Services and Mechanism",
            "Model for Internetwork Security"
          ]
        },
        {
          "title": "UNIT 2: CRYPTOGRAPHY",
          "topics": [
            "Cryptography: Plain Text, Encryption, Key, Cipher Text, Decryption, Cryptanalysis",
            "Public Key Encryption"
          ]
        },
        {
          "title": "UNIT 3: DIGITAL SIGNATURE AND AUTHENTICATION APPLICATION",
          "topics": [
            "Overview, Digital Signatures and Authentication",
            "Kerberos, X.509, Pretty Good Privacy"
          ]
        },
        {
          "title": "UNIT 4: WEB SECURITY",
          "topics": [
            "Requirement, Secure Socket Layer",
            "Transport Layer Security, Secure Electronic Transactions"
          ]
        },
        {
          "title": "UNIT 5: SYSTEM SECURITY",
          "topics": [
            "Intruders, Viruses and Related Threats",
            "Firewall Design Principles"
          ]
        }
      ]
    },
    {
        "title": "PROJECT (BCA C6005)",
        "time": "3 hrs",
        "marks": "100",
        "credit": "2",
        "units": [
          {
            "title": "UNIT 1: INDUSTRIAL/IN-HOUSE/ORGANIZATIONAL PROJECT",
            "topics": [
              "One month industrial/in-house/organizational project"
            ]
          }
        ]
    },
    {
        "title": "LINUX PROGRAMMING LAB (BCA P6006)",
        "time": "3 hrs",
        "marks": "50",
        "credit": "1",
        "units": [
          {
            "title": "UNIT 1: EXPERIMENTS BASED ON LINUX PROGRAMMING",
            "topics": [
              "Experiment problems of Linux programming lab will be from the theory classes of BCA C6003"
            ]
          }
        ]
    },
    {
        "title": "ELECTIVE - II: MANAGEMENT INFORMATION SYSTEM (BCA E6006)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "4",
        "units": [
        {
            "title": "UNIT 1: INTRODUCTION TO MIS",
            "topics": [
            "The Technical and Business Perspective",
            "Organization Structure",
            "Evaluation of MIS through Information System",
            "MIS Organization within the Company"
            ]
        },
        {
            "title": "UNIT 2: INFORMATION SYSTEMS FOR DECISION MAKING",
            "topics": [
            "Evolution of an Information System",
            "Basic Information Systems",
            "Decision Making and MIS",
            "Decision Assisting Information System",
            "Concepts of Balanced MIS Effectiveness and Efficiency Criteria"
            ]
        },
        {
            "title": "UNIT 3: DEVELOPMENT OF MIS",
            "topics": [
            "Methodology and Tools/Techniques for Systematic Identification, Evaluation and Modification of MIS"
            ]
        },
        {
            "title": "UNIT 4: ADVANCED MIS",
            "topics": [
            "Concepts, Needs and Problems in Achieving Advanced MIS",
            "DSS"
            ]
        },
        {
            "title": "UNIT 5: PITFALLS IN MIS DEVELOPMENT",
            "topics": [
            "Fundamental Weakness",
            "Soft Spots in Planning and Design Problems"
            ]
        }
        ]
    },
    {
        "title": "ELECTIVE - II: ARTIFICIAL INTELLIGENCE (BCA E6007)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "4",
        "units": [
        {
            "title": "Unit 1: Basic Problem Solving Methods",
            "topics": [
            "Production system-state space search",
            "Control strategies",
            "Heuristic search",
            "Forward and backward reasoning",
            "Hill climbing techniques"
            ]
        },
        {
            "title": "Unit 2: Knowledge Representation",
            "topics": [
            "Predicate logic",
            "Resolution",
            "Semantic nets",
            "Conceptual Dependency",
            "Frames and scripts"
            ]
        },
        {
            "title": "Unit 3: Solving Problems By Searching",
            "topics": [
            "Problem Solving Agents",
            "Searching For Solutions",
            "Uniform Search Strategies: Breadth First Search, Depth First Search, Best-First Search, A* Search"
            ]
        },
        {
            "title": "Unit 4: AI Languages",
            "topics": [
            "Important characteristics of AI languages: PROLOG, LISP"
            ]
        },
        {
            "title": "Unit 5: Introduction to Expert Systems",
            "topics": [
            "Structure of an Expert System",
            "Knowledge base",
            "Design of an Expert system"
            ]
        }
        ]
    },
    {
        "title": "ELECTIVE - II: SOFTWARE ENGINEERING (BCA E6008)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "4",
        "units": [
        {
            "title": "Unit 1: INTRODUCTION",
            "topics": [
            "Introduction to Software Engineering",
            "Characteristics",
            "Emergence of Software Engineering",
            "Software Metrics & Models",
            "Process & Product Metrics"
            ]
        },
        {
            "title": "Unit 2: SOFTWARE LIFE CYCLE",
            "topics": [
            "Software Life Cycle Models: Waterfall, Prototype and Spiral Models and their Comparison"
            ]
        },
        {
            "title": "Unit 3: PROJECT MANAGEMENT",
            "topics": [
            "Software Project Management: Size Estimation- LOC and FP Metrics",
            "Cost Estimation- Delphi and Basic COCOMO",
            "Introduction to Halstead’s Software Science",
            "Staffing Level Estimation- Putnam’s Model"
            ]
        },
        {
            "title": "Unit 4: SOFTWARE DESIGN",
            "topics": [
            "Software Requirements Specification: SRS Documents, their Characteristics and Organization",
            "Software Design: Classification, Software Design Approaches",
            "Function Oriented Software Design, Structured Analysis- Data flow Diagrams and Structured Design",
            "Introduction to Object Oriented Design"
            ]
        },
        {
            "title": "Unit 5: SOFTWARE TESTING",
            "topics": [
            "Coding and Testing of Software: Unit Testing, Block Box Testing, White Box Testing, Debugging, Program Analysis Tools",
            "System Testing"
            ]
        },
        {
            "title": "Unit 6: SOFTWARE QUALITY ASSURANCE",
            "topics": [
            "Software Reliability and Quality Assurance: Reliability Metric- Musa’s Basic Model",
            "Software Quality Assurance: ISO 9000 and SEI CMM and their Comparison"
            ]
        }
        ]
    }
       
     
    // Add more courses here...
  ];

  
function Semester6(){

    return (
        <div className="App">
      <Header />
      <div className="semester-name">
        <img src="https://fontmeme.com/permalink/240925/76247a096a636766bf876b285c63d322.png" alt="futuristic-fonts" />
        &nbsp; &nbsp;
        <img src="https://fontmeme.com/permalink/241130/aa79c241714a96c4b167486b6928f614.png" alt="futuristic-fonts" />
      </div>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
      <CourseTable courses={courses} />  {/* Add CourseTable */}
 
    </div>
  );
}
  
  export default Semester6;