import React from 'react';
import Header from './components/Header.jsx';
import Course from './components/Course.jsx';
import CourseTable from './components/CourseTable.jsx';
import '../public/Style.css';

function App() {
  const courses = [
    {
      title: "INTERNET CONCEPTS AND WEB DESIGN (BCA C5001)",
      time: "3 hrs",
      marks: "70",
      credit: "4",
      units: [
        {
          title: "UNIT 1: INTERNET BASICS",
          topics: [
            "Basic concepts",
            "Communication on the Internet",
            "Internet Domains",
            "Internet Server Identities",
            "Establishing Connectivity on the Internet",
            "Client IP Address",
            "A Brief Overview of TCP/IP and its Services",
            "Transmission Control Protocol",
            "Web Server",
            "Web Client",
            "Domain Registration",
          ],
        },
        {
          title: "UNIT 2: JAVA SCRIPT",
          topics: [
            "Java Script in Web Pages",
            "Advantages of Java Script",
            "Data Types and Literals",
            "Type Casting",
            "Java Script Array",
            "Operators and Expression",
            "Conditional Checking",
            "Function",
            "User Defined Function",
          ],
        },
        {
          title: "UNIT 3: UNDERSTANDING XML",
          topics: [
            "SGML",
            "XML",
            "XML and HTML",
            "Modeling XML Data",
            "DTD",
            "Styling XML with XSL",
            "XHTML",
          ],
        },
        {
          title: "UNIT 4: PHP",
          topics: [
            "PHP installation and Introduction",
            "Loops",
            "String Functions in PHP",
            "PHP Email Function",
            "PHP Basics",
            "Variables",
            "Arrays in PHP with Attributes",
            "Date & Time",
            "Image Uploading",
            "Session management",
            "Database Handling",
          ],
        }
        
        // Add more units here...
      ],
    },
    {
      title: "DESIGN AND ANALYSIS OF ALGORITHM (BCA C5002)",
      time: "3 hrs",
      marks: "70",
      credit: "5",
      units: [
        {
          title: "UNIT 1: INTRODUCTION & DESIGN OF EFFICIENT ALGORITHM",
          topics: [
            "Algorithm",
            "Complexity",
            "Asymptotic Notations",
            "Solving recurrences",
          ],
        },
        {
          title: "UNIT 2: DIVIDE AND CONQUER",
          topics: [
            "Binary Search",
            "Finding Maximum and Minimum",
            "Merge Sort",
            "Quick Sort",
          ],
        },
        {
          title: "UNIT 3: THE GREEDY METHOD",
          topics: [
            "The General Method",
            "Minimum Cost Spanning Trees: Kruskal & Prim’s Algorithm",
          ],
        },
        {
          title: "UNIT 4: DATA STRUCTURE FOR SET MANIPULATION PROBLEMS",
          topics: [
            "Fundamental Operations on Set",
            "Hashing Technique",
            "Binary Search Trees",
          ],
        },
        {
          title: "UNIT 5: ALGORITHM ON GRAPHS",
          topics: [
            "Depth First Search",
            "BFS",
            "Depth First Search of a Directed Graph",
          ],
        },
      ],
    },
    {
      title: "PYTHON PROGRAMMING (BCA C5003)",
      time: "3 hrs",
      marks: "70",
      credit: "5",
      units: [
        {
          title: "UNIT I: INTRODUCTION",
          topics: [
            "Identifiers",
            "Keywords",
            "Statements and Expressions",
            "Variables",
            "Operators",
            "Arithmetic operators",
            "Assignment operators",
            "Comparison operators",
            "Logical operators",
            "Bitwise operators",
            "Precedence and Associativity",
            "Data types",
            "Indentation",
            "Comments",
            "Reading Input",
            "Print Output",
          ],
        },
        {
          title: "UNIT II: CONTROL FLOW STATEMENTS",
          topics: [
            "Control Flow Statements",
            "If statement",
            "If else statement",
            "If elif else statement",
            "Nested if statement",
            "While loop",
            "For loop",
            "Continue and break statements",
            "Catching exceptions using try and except statement",
            "Basic string operations",
            "String comparison",
            "Built in functions using strings",
            "Accessing characters in string",
            "String slicing",
            "String joining",
            "split() method",
            "String traversing",
          ],
        },
        {
          title: "UNIT III: FUNCTIONS",
          topics: [
            "Functions",
            "Built in functions",
            "Function definition and calling",
            "Return statement",
            "Scope and lifetime of variables",
            "Command line arguments",
            "Tuples",
            "Indexing",
            "Slicing",
            "Built-in functions used on tuples",
            "Traversing of tuples",
          ],
        },
        {
          title: "UNIT IV: LIST",
          topics: [
            "Lists: Using List",
            "List Assignment and Equivalence",
            "List Bounds",
            "Slicing",
            "Lists and Functions",
            "List Processing",
            "Sorting",
            "Flexible Sorting",
            "Search",
            "List Permutations",
            "Randomly Permuting a List",
            "Reversing a List",
          ],
        },
        {
          title: "UNIT V: OOPS",
          topics: [
            "Objects: Using Objects - String Objects - List Objects",
            "Custom Types: Geometric Points",
            "Methods - Custom Type Examples",
            "Class Inheritance",
            "Handling Exceptions: Motivation",
            "Exception Examples",
            "Using Exceptions - Custom Exceptions",
          ],
        },
        {
          title: "UNIT VI: PACKAGES",
          topics: [
            "Introduction to NUMPY",
            "PANDA",
            "MATPLOTLIB",
            "SEABORN",
          ],
        },
      ],
    },
    {
      title: "COMPUTER ORIENTED NUMERICAL METHODS (BCA C5004)",
      time: "3 hrs",
      marks: "70",
      credit: "4",
      examFormat: {
        sections: [
          {
            section: "A",
            questions: "8",
            answerRequired: "4",
            marksPerQuestion: "10",
          },
          {
            section: "B",
            shortAnswerQuestions: "10",
            totalMarks: "30",
            marksPerShortAnswer: "3",
          },
        ],
      },
      units: [
        {
          title: "UNIT 1: ERRORS IN NUMERICAL CALCULATIONS",
          topics: [
            "Numbers and their accuracy",
            "Errors and their Computations - Absolute, Relative and Percentage",
            "General Error Formula",
          ],
        },
        {
          title: "UNIT 2: SOLUTION OF ALGEBRAIC AND TRANSCENDENTAL EQUATIONS",
          topics: [
            "Introduction",
            "Bisection method",
            "Iteration method",
            "Method of False Position",
            "Newton-Raphson method",
          ],
        },
        {
          title: "UNIT 3: INTERPOLATION",
          topics: [
            "Introduction",
            "Errors in Polynomial Interpolation",
            "Finite Differences - Forward, Backward and Central",
            "Detection of errors using Difference tables",
            "Differences of a Polynomial",
            "Newton’s formulae for Interpolation",
            "Central Difference Interpolation Formulae - Gauss’s Central Difference Formula",
            "Interpolation with unevenly spaced points",
            "Lagrange’s Interpolation Formula",
            "Divided Differences and their properties - Newton’s General Interpolation Formula",
          ],
        },
        {
          title: "UNIT 4: NUMERICAL DIFFERENTIATION AND INTEGRATION",
          topics: [
            "Introduction",
            "Numerical Differentiation and Errors",
            "Numerical Integration – Trapezoidal Rule",
            "Simpson’s 1/3 Rule",
            "Simpson’s 3/8 Rule",
          ],
        },
        {
          title: "UNIT 5: NUMERICAL SOLUTION OF LINEAR SYSTEM OF EQUATIONS",
          topics: [
            "Direct Methods - Matrix Inversion Method",
            "Gauss-Jordan Method",
            "Gauss Elimination Method",
            "Iterative Method - Gauss-Jacobi Method",
            "Gauss-Seidel Method",
            "Taylor’s Series",
            "Euler’s method",
            "Modified Euler’s method",
            "Runge-Kutta method of 2nd and 4th order",
          ],
        },
      ],
    },
    {
      title: "E-COMMERCE (BCA E5008)",
      time: "3 hrs",
      marks: "70",
      credit: "4",
      units: [
        {
          title: "UNIT 1: INTRODUCTION TO E-COMMERCE",
          topics: [
            "E-commerce",
            "E-commerce business models",
            "Major business-to-consumer (B2C) business models",
            "Major business-to-business (B2B) business models",
            "Business models in emerging E-commerce areas",
            "How the internet and the Web change business",
          ],
        },
        {
          title: "UNIT 2: E-COMMERCE INFRASTRUCTURE",
          topics: [
            "The Internet",
            "Technology background",
            "The World Wide Web",
            "A systematic approach",
            "Choosing server software",
            "Choosing the hardware for an E-commerce site",
            "Other E-commerce site tools",
          ],
        },
        {
          title: "UNIT 3: SECURITY AND ENCRYPTION",
          topics: [
            "The E-commerce security environment",
            "Security threats in the E-commerce environment",
            "Technology solutions",
            "Policies, Procedures and Laws",
          ],
        },
        {
          title: "UNIT 4: E-COMMERCE PAYMENT SYSTEMS",
          topics: [
            "Payment systems",
            "Credit card E-commerce transactions",
            "E-commerce digital payment systems in the B2C arena",
            "B2B payment systems",
          ],
        },
        {
          title: "UNIT 5: ETHICAL, SOCIAL, AND POLITICAL ISSUES IN E-COMMERCE",
          topics: [
            "Understanding ethical, social, and political issues in E-commerce",
            "Privacy and information rights",
            "Intellectual property rights",
            "Governance",
            "Public safety and welfare",
          ],
        },
      ],
    },
    {
      title: "SOFTWARE TESTING (BCA E5009)",
      time: "3 hrs",
      marks: "70",
      credit: "4",
      units: [
        {
          title: "Unit 1: INTRODUCTION",
          topics: [
            "Purpose – productivity and quality in software",
            "Testing vs debugging",
            "Model for testing",
            "Bugs",
            "Types of bugs",
            "Testing and design style",
          ],
        },
        {
          title: "Unit 2: FLOW/GRAPHS AND PATH TESTING",
          topics: [
            "Achievable paths",
            "Path instrumentation",
            "Application",
            "Transaction flow testing techniques",
            "Data flow testing strategies",
          ],
        },
        {
          title: "Unit 3: DOMAIN TESTING",
          topics: [
            "Domains and paths",
            "Domain and interface testing",
            "Linguistic",
            "Metrics",
            "Structural metrics",
            "Path products and path expressions",
          ],
        },
        {
          title: "Unit 4: SYNTAX TESTING",
          topics: [
            "Formats",
            "Test cases",
            "Logic based testing",
            "Decision tables",
            "Transition testing",
            "States, state graph, state testing",
          ],
        },
        {
          title: "Unit 5: VERIFICATION AND VALIDATION",
          topics: [
            "Fundamental tools",
            "Levels of testing",
            "Testing approaches",
            "Types of testing",
            "Test plan",
            "Software testing tools: WinRunner, Silk test",
          ],
        },
      ],
    }
    
        
    
    
    // Add more courses here...
  ];

  return (
    <div className="App">
      <Header />
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
      <CourseTable courses={courses} />  {/* Add CourseTable */}
 
    </div>
  );
}

export default App;
