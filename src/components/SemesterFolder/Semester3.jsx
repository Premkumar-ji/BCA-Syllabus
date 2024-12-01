import React from 'react';
import Header from '../Header.jsx';
import Course from '../Course.jsx';
import CourseTable from '../CourseTable.jsx';
 const courses = [
    
        {
          "title": "DATA STRUCTURE USING C (BCA C3001)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "5",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION TO DATA STRUCTURE",
              "topics": [
                "Representation of single and multidimensional arrays",
                "Sparse arrays"
              ]
            },
            {
              "title": "UNIT 2: LISTS",
              "topics": [
                "Introduction to linked lists",
                "Linked list types",
                "Operations on linked list"
              ]
            },
            {
              "title": "UNIT 3: STACKS AND QUEUES",
              "topics": [
                "Introduction and primitive operations on stack",
                "Stack application",
                "Infix, postfix, prefix expressions",
                "Evaluation of postfix expression",
                "Conversion between prefix, infix and postfix",
                "Introduction and primitive operations on queues"
              ]
            },
            {
              "title": "UNIT 4: TREES",
              "topics": [
                "Introduction, Tree terminology",
                "Traversal of binary trees",
                "Recursive algorithms for tree operations such as traversal, insertion, deletion",
                "Binary Search Tree"
              ]
            },
            {
              "title": "UNIT 5: m-WAY TREES",
              "topics": [
                "Introduction",
                "The invention of B-Tree",
                "Statement of the problem",
                "Indexing with binary search trees",
                "A better approach to tree indexes",
                "B-Trees",
                "Working up from the bottom",
                "Example for creating a B-Tree",
                "AVL tree"
              ]
            },
            {
              "title": "UNIT 6: SORTING & SEARCHING TECHNIQUES",
              "topics": [
                "Sorting: Insertion sort, Selection sort, Merge sort, Bubble sort, Heap Sort",
                "Searching Techniques: Linear search & Binary search"
              ]
            }
          ]
        },
        {
          "title": "JAVA PROGRAMMING (BCA C3002)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "4",
          "units": [
            {
              "title": "UNIT 1: JAVA EVOLUTION AND OVERVIEW OF JAVA LANGUAGE",
              "topics": [
                "How Java differs from C and C++",
                "Java Tokens",
                "Java Statements",
                "Implementing a Java Program",
                "Java Virtual Machine",
                "Command Line Arguments",
                "Constants, Variables, Data Types",
                "Scope of Variables",
                "Symbolic Constants",
                "Type Casting"
              ]
            },
            {
              "title": "UNIT 2: OPERATORS AND CONTROL STATEMENTS",
              "topics": [
                "Operators",
                "Mathematical Functions",
                "Decision Making",
                "The switch Statement",
                "The ?: Operator",
                "Looping Statements"
              ]
            },
            {
              "title": "UNIT 3: CLASSES & OBJECTS",
              "topics": [
                "Defining a Class",
                "Adding Variables",
                "Adding Methods",
                "Creating Objects",
                "Accessing Class Members",
                "Constructors",
                "Methods Overloading",
                "Static Members",
                "Nesting of Methods",
                "Inheritance: Extending a Class",
                "Overriding Methods",
                "final Variables and Methods",
                "Final Classes",
                "Finalizer Methods",
                "Abstract Methods and Classes",
                "Visibility Control"
              ]
            },
            {
              "title": "UNIT 4: ARRAYS, STRING AND VECTORS & INTERFACES",
              "topics": [
                "Arrays",
                "Strings",
                "Vectors",
                "Wrapper Classes",
                "Multiple Inheritances: Defining Interfaces",
                "Extending Interfaces",
                "Implementing Interfaces",
                "Accessing Interface Variables"
              ]
            },
            {
              "title": "UNIT 5: PACKAGES & MULTITHREADED PROGRAMMING",
              "topics": [
                "Java API Packages",
                "Using system Packages",
                "Naming Conventions",
                "Creating Packages",
                "Accessing a Package",
                "Using a Package",
                "Adding a Class to a Package",
                "Hiding Classes",
                "Threads",
                "Extending the Thread Class",
                "Stopping and Blocking a Thread",
                "Life Cycle of a Thread",
                "Using Thread Methods",
                "Thread Exceptions",
                "Thread Priority"
              ]
            },
            {
              "title": "UNIT 6: EXCEPTION HANDLING",
              "topics": [
                "Types of Errors",
                "Exceptions",
                "Syntax of Exception Handling Code",
                "Multiple Catch Statements",
                "Using finally Statement",
                "Throwing Our Own Exceptions",
                "Using Exceptions"
              ]
            }
          ]
        },
        {
          "title": "COMPUTER ARCHITECTURE (BCA C3003)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "5",
          "units": [
            {
              "title": "UNIT 1: BASIC COMPUTER ORGANIZATION AND DESIGN",
              "topics": [
                "Instructions and instruction codes",
                "Instruction cycle",
                "Register/ Types of register/ general purpose & special purpose registers/ index registers",
                "Register transfer and micro-operations",
                "Register transfer instructions",
                "Bus/ Data transfer instructions",
                "Arithmetic logic micro-operations/ shift micro-operations",
                "Input/ Output and interrupts"
              ]
            },
            {
              "title": "UNIT 2: CENTRAL PROCESSING UNIT",
              "topics": [
                "Stacks organizations",
                "Instruction formats",
                "Addressing modes",
                "Data transfer and manipulation",
                "Program control reduced computer",
                "Pipeline/ RISC/ CISC pipeline",
                "Vector processing/ array processing"
              ]
            },
            {
              "title": "UNIT 3: COMPUTER ARITHMETIC",
              "topics": [
                "Addition, subtraction",
                "Floating point representation",
                "Arithmetic operations",
                "Decimal arithmetic operations"
              ]
            },
            {
              "title": "UNIT 4: INPUT – OUTPUT ORGANIZATION",
              "topics": [
                "Peripheral devices",
                "Input/output interface",
                "ALU Asynchronous Data transfer",
                "Mode of transfer",
                "Priority interrupts",
                "Direct memory Address (DMA)",
                "Input/ Output processor (IOP)",
                "Serial communication"
              ]
            },
            {
              "title": "UNIT 5: EVALUATION OF MICROPROCESSOR",
              "topics": [
                "Overview of Intel 8085 microprocessors",
                "Architecture and Interface",
                "Internal architecture",
                "External architecture",
                "Memory and input/ output interface"
              ]
            },
            {
              "title": "UNIT 6: ASSEMBLY LANGUAGE",
              "topics": [
                "Introduction to Assembly language",
                "Assembler",
                "Assembly level instructions",
                "Macro",
                "Use of macros in I/C instructions",
                "Program loops",
                "Programming arithmetic and logic subroutines",
                "Input-Output programming"
              ]
            }
          ]
        },
        {
          "title": "SYSTEM ANALYSIS AND DESIGN (BCA C3004)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "4",
          "units": [
            {
              "title": "UNIT 1: SYSTEM CONCEPTS",
              "topics": [
                "Definition",
                "Characteristics",
                "Elements of system",
                "Physical and abstract system",
                "Open and closed system",
                "System development Life Cycle",
                "Various phases of system development",
                "Considerations for system planning and control for system success",
                "SDLC Models"
              ]
            },
            {
              "title": "UNIT 2: INITIAL INVESTIGATION & FEASIBILITY STUDY",
              "topics": [
                "Determining user’s requirements and analysis",
                "Fact finding process and technique",
                "Determination of Feasibility Study",
                "Technical, Operational & Economic Feasibilities",
                "Data Analysis",
                "Cost and Benefit Analysis"
              ]
            },
            {
              "title": "UNIT 3: TOOLS OF STRUCTURED ANALYSIS",
              "topics": [
                "Data Flow Diagrams",
                "Data Dictionary",
                "Decision Trees",
                "Decision Tables",
                "Gantt charts",
                "Structured English (Structured Query)",
                "Pseudo code"
              ]
            },
            {
              "title": "UNIT 4: USER MANUAL, PROGRAMMING MANUAL, OPERATOR MANUAL",
              "topics": [
                "Software testing",
                "Quality Assurance and Quality Control",
                "Software maintenance",
                "Software risk management",
                "Threat and Risk Analysis"
              ]
            }
          ]
        },
        {
          "title": "PROBABILITY AND STATISTICS (BCA C3005)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "4",
          "units": [
            {
              "title": "UNIT 1: PROBABILITY",
              "topics": [
                "Introduction",
                "Events & Different Types of Events",
                "Addition & Multiplication Law",
                "Conditional Probability",
                "Bay's Theorem"
              ]
            },
            {
              "title": "UNIT 2: PROBABILITY DISTRIBUTION",
              "topics": [
                "Random Variables",
                "Probability Function",
                "Binomial, Poisson & Normal Distribution"
              ]
            },
            {
              "title": "UNIT 3: SAMPLING THEORY AND ESTIMATION",
              "topics": [
                "Sampling Distribution",
                "Estimation Theory",
                "Interval Estimation",
                "Point Estimation"
              ]
            },
            {
              "title": "UNIT 4: TESTING OF HYPOTHESIS",
              "topics": [
                "Types of Errors",
                "Z-Test",
                "T-Test",
                "F-Test",
                "Chi-Square Test"
              ]
            },
            {
              "title": "UNIT 5: CORRELATION AND REGRESSION ANALYSIS",
              "topics": [
                "Correlation",
                "Regression Coefficients",
                "Linear Regression"
              ]
            },
            {
              "title": "UNIT 6: TIME SERIES AND INDEX NUMBERS",
              "topics": [
                "Time Series Analysis",
                "Index Numbers"
              ]
            }
          ]
        }
      
      
    // Add more courses here...
  ];

  
function Semester3(){

    return (
        <div className="App">
      <Header />
      <div className="semester-name">
        <img src="https://fontmeme.com/permalink/240925/76247a096a636766bf876b285c63d322.png" alt="futuristic-fonts" />
        &nbsp; &nbsp;
        <img src="https://fontmeme.com/permalink/241130/920c8cc9ac7fd8ea314261a607f6c334.png" alt="futuristic-fonts" />
      </div>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
      <CourseTable courses={courses} />  {/* Add CourseTable */}
 
    </div>
  );
}
  
  export default Semester3;