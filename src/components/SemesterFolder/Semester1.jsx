import React from 'react';
import Header from '../Header.jsx';
import Course from '../Course.jsx';
import CourseTable from '../CourseTable.jsx';
 const courses = [
    {
        "title": "BUSINESS COMMUNICATION (ENG F1001)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "4",
        "units": [
          {
            "title": "UNIT 1: COMMUNICATION OVERVIEW",
            "topics": [
              "Introduction to Communication",
              "Development of Communication",
              "Principles of Communication",
              "Process of Communication",
              "Barriers to Communication",
              "The Ten Commandments",
              "The Listening Process",
              "Difference between Listening and Hearing",
              "Types of Listening",
              "Deterrents to the Listening Process",
              "Factors that help in Listening"
            ]
          },
          {
            "title": "UNIT 2: GRAMMAR AND COMPREHENSION",
            "topics": [
              "Syntax-Use of Articles in Science",
              "The Verbs",
              "The Prepositions",
              "Tense",
              "Active and Passive Construction",
              "Common Errors",
              "Double blanks in Sentences",
              "Sentence Rearrangement",
              "Closure Test",
              "Antonyms and Synonyms",
              "Comprehensions"
            ]
          },
          {
            "title": "UNIT 3: BUSINESS CORRESPONDENCE",
            "topics": [
              "Drafting official and business letters",
              "Circulars and official order instructions",
              "Drafting minutes and agenda of the meeting",
              "Formal report",
              "Paragraph Writing",
              "Use of Charts, Graphs and Tables"
            ]
          },
          {
            "title": "UNIT 4: EMPLOYMENT COMMUNICATION",
            "topics": [
              "Resumes and Cover Letters: Introduction",
              "Writing a Resume",
              "Writing Job Application Letters",
              "Other Letters about Employment",
              "Effective Presentations",
              "Steps to a Successful Presentation"
            ]
          },
          {
            "title": "UNIT 5: GROUP DISCUSSION AND INTERVIEWS",
            "topics": [
              "Introduction to Group Discussion",
              "Qualities looked for in GD",
              "Strategies for GD",
              "Use of persuasive strategies including some rhetorical devices (for emphasizing, being polite and firm, handling questions, and taking criticism)",
              "Effective interview",
              "Enrichment of English Vocabulary-Borrowing",
              "Words formation and its methods"
            ]
          }
        ]
    },
    {
        "title": "BASIC MATHEMATICS-I (BCA F1002)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "5",
        "units": [
          {
            "title": "UNIT 1: DIFFERENTIAL CALCULUS",
            "topics": [
              "Successive differentiation",
              "Leibnitz Theorem",
              "Taylor’s theorem with Lagrange’s forms of remainders",
              "Expansion of a function of one variable in Taylor's and Maclaurin's infinite series",
              "Maxima and Minima of one variable",
              "Partial Derivatives",
              "Euler's theorem",
              "Change of variables",
              "Total differentiation",
              "Errors and approximation",
              "Taylor’s series in two variables",
              "Maxima and Minima of two or more variables"
            ]
          },
          {
            "title": "UNIT 2: INTEGRAL CALCULUS",
            "topics": [
              "Definite integral and its application for area, length, and volume",
              "Multiple integrals",
              "Change of order of integration",
              "Transformation of integral from Cartesian to polar",
              "Applications in areas, volume, and surfaces"
            ]
          },
          {
            "title": "UNIT 3: DIFFERENTIAL EQUATION",
            "topics": [
              "First degree and first order Differential equation",
              "Higher order differential equation with constant coefficients",
              "Linear partial differential equation of first order",
              "P.D.E. of higher order with constant coefficients"
            ]
          }
        ]
    },
    {
        "title": "BUSINESS PRACTICES AND MANAGEMENT (BCA F1003)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "4",
        "units": [
          {
            "title": "UNIT 1: CONCEPTS OF BUSINESS",
            "topics": [
              "Business Environment- Macro and Micro Environment",
              "Business System",
              "Forms of Business Organization - Sole trader, Partnership, Companies, HUF and Co-operative organization"
            ]
          },
          {
            "title": "UNIT 2: ORGANIZATION STRUCTURE",
            "topics": [
              "Meaning and importance",
              "Nature and Types of Organization",
              "Forms of Organization",
              "Formal and Informal Organization",
              "Line and staff Agency",
              "Theories of Organization - Human Relations theory, Bureaucratic theory"
            ]
          },
          {
            "title": "UNIT 3: MANAGEMENT",
            "topics": [
              "Meaning, definition and importance",
              "Management concept, functions, Principles of management and Management Process",
              "Planning- concepts and its types",
              "Decision making concept",
              "Management by objectives (M.B.O.)",
              "Motivation-Concepts and theories",
              "Leadership- Concepts and styles"
            ]
          },
          {
            "title": "UNIT 4: ORGANIZING",
            "topics": [
              "Concepts, Nature and Significance",
              "Authority and responsibility",
              "Centralization and Decentralization",
              "Communication- Nature, Process and types of communication networks",
              "Managerial control - concepts and Process",
              "Techniques of control"
            ]
          }
        ]
    },
    {
        "title": "INTRODUCTION TO COMPUTER SCIENCE (BCA C1004)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "4",
        "units": [
          {
            "title": "UNIT 1: INTRODUCTION TO COMPUTERS & NUMBER SYSTEMS AND LOGIC GATES",
            "topics": [
              "Introduction",
              "Characteristics of Computers",
              "Evolution of computers",
              "Generation of Computers",
              "Classification of Computers",
              "The Computer System",
              "Applications of Computers",
              "Introduction to Number Systems",
              "Conversion between Number Bases",
              "Arithmetic System",
              "Signed and Unsigned Numbers",
              "Concept of Overflow",
              "Binary Coding",
              "Logic Gates",
              "Boolean algebra"
            ]
          },
          {
            "title": "UNIT 2: COMPUTER ARCHITECTURE & PRIMARY MEMORY",
            "topics": [
              "Introduction to Central Processing Unit (CPU)",
              "Memory",
              "Communication between Various Units of a Computer System",
              "Introduction to Memory Hierarchy",
              "Random Access Memory (RAM)",
              "Types of RAM",
              "Read Only Memory (ROM)",
              "Types of ROM"
            ]
          },
          {
            "title": "UNIT 3: SECONDARY STORAGE, INPUT & OUTPUT DEVICES",
            "topics": [
              "Introduction to Secondary Storage Devices",
              "Classification of Secondary Storage Devices",
              "Magnetic Tape",
              "Magnetic Disk",
              "Optical Disk",
              "Magneto Optical Disk",
              "Introduction to Input Devices",
              "Keyboard",
              "Pointing Devices",
              "Speech Recognition",
              "Digital Camera",
              "Scanners",
              "Optical Scanners",
              "Introduction to Output Devices",
              "Classification of Output Devices",
              "Hard Copy Output Devices",
              "Printers",
              "Plotters",
              "Computer Output Microfilm (COM)",
              "Soft Copy Output Devices",
              "Monitors",
              "Audio Output",
              "Projectors",
              "Terminals"
            ]
          },
          {
            "title": "UNIT 4: COMPUTER SOFTWARE & OPERATING SYSTEM",
            "topics": [
              "Introduction to Software: Definition",
              "Relationship between Software and Hardware",
              "Software Categories",
              "System Software",
              "Application Software",
              "Software Terminology",
              "Algorithm",
              "Flowchart",
              "Pseudocode (P-Code)",
              "Evolution of Programming Languages",
              "Classification of Programming Languages",
              "Generations of Programming Languages",
              "Introduction to Operating System",
              "Evolution of Operating System",
              "Types of Operating System",
              "Functions of an Operating System",
              "Modern Operating Systems"
            ]
          },
          {
            "title": "UNIT 5: DATA COMMUNICATION, COMPUTER NETWORK & INTERNET BASICS",
            "topics": [
              "Introduction to Data Communication",
              "Transmission Media",
              "Computer Network",
              "Network Topologies",
              "Communication Protocols",
              "Network devices",
              "Evolution of Internet",
              "Basic Internet Terms",
              "Getting Connected to Internet",
              "Internet Applications",
              "Electronic Mail: An Introduction to How E-Mail Works",
              "Searching the Web (Search Engines)",
              "Languages of Internet",
              "Internet and Viruses"
            ]
          }
        ]
    },
      {
        "title": "PROBLEM SOLVING AND PROGRAMMING IN C (BCA C1005)",
        "time": "3 hrs",
        "marks": "70",
        "credit": "5",
        "units": [
          {
            "title": "UNIT 1: INTRODUCTION",
            "topics": [
              "History and Importance of C",
              "Sample programming",
              "Basic Structure and execution of C programs",
              "Constants, Variables, and Data Types and various type of declarations",
              "Different type operators and Expressions",
              "Evaluation of Expressions",
              "Operator Precedence and Associability",
              "Mathematical Functions"
            ]
          },
          {
            "title": "UNIT 2: OPERATORS, DECISION MAKING & BRANCHING, ARRAY AND STRING",
            "topics": [
              "Managing Input and Output operations",
              "Decision Making and Branching",
              "Decision Making and Looping",
              "One-dimensional Arrays and their declaration and Initializations",
              "Two-dimensional Arrays and their initializations",
              "Multidimensional Arrays",
              "Dynamic Arrays",
              "String Variables",
              "Reading and Writing Strings",
              "Arithmetic Operations on characters",
              "Putting Strings together",
              "Comparison of Two Strings",
              "String-handling functions",
              "Table and other features of Strings"
            ]
          },
          {
            "title": "UNIT 3: FUNCTION",
            "topics": [
              "Need and Elements for user-defined Functions",
              "Definition of Functions",
              "Return values and their types",
              "Function calls and Declaration",
              "Arguments and corresponding return values",
              "Functions that return multiple values",
              "Nesting of functions",
              "Recursion",
              "Passing arrays and strings to functions",
              "The Scope, Visibility, and Life time of variables"
            ]
          },
          {
            "title": "UNIT 4: STRUCTURE & UNION",
            "topics": [
              "Defining Structure",
              "Declaring Structure Variable and Accessing Structure Members",
              "Initialization of Structure",
              "Comparing Structure Variables",
              "Operation on Individual Members",
              "Arrays of Structures, and Structures within structures",
              "Structures and Functions",
              "Unions",
              "Size of Structures",
              "Bit Fields"
            ]
          },
          {
            "title": "UNIT 5: POINTER",
            "topics": [
              "Understanding Pointers",
              "Accessing the Address of a Variable",
              "Declaration and Initialization of Pointer Variables",
              "Accessing a Variable through its Pointer",
              "Chain of Pointers",
              "Pointer Expressions",
              "Pointer Increments and Scale Factor",
              "Pointers and Arrays",
              "Pointers and Character Strings",
              "Arrays of Pointers",
              "Pointers and Function Arguments",
              "Functions Returning Pointers",
              "Pointers to Functions",
              "Pointers and Structures",
              "File Management in C"
            ]
          }
        ]
      },
      
      
    ]

    
function Semester1(){

    return (
        <div className="App">
      <Header />
      <div className="semester-name">
      <img src="https://fontmeme.com/permalink/240925/76247a096a636766bf876b285c63d322.png" alt="futuristic-fonts" />
        &nbsp; &nbsp;
        <img src="https://fontmeme.com/permalink/241130/537b749c1540dcc198361d07eba7f705.png" alt="futuristic-fonts" />
        </div>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
      <CourseTable courses={courses} />  {/* Add CourseTable */}
 
    </div>
  );
}
  
  export default Semester1;