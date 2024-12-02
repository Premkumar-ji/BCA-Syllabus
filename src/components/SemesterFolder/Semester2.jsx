import React from 'react';
import Header from '../Header.jsx';
import Course from '../Course.jsx';
import CourseTable from '../CourseTable.jsx';
 const courses = [
     {
          "title": "BASIC MATHEMATICS-II (BCA F2001)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "4",
          "units": [
            {
              "title": "UNIT 1: ABSTRACT ALGEBRA",
              "topics": [
                "Group",
                "Subgroups",
                "Ring",
                "Integral Domain",
                "Field",
                "Introduction to Boolean Algebra"
              ]
            },
            {
              "title": "UNIT 2: LINEAR ALGEBRA",
              "topics": [
                "Spaces and Subspaces",
                "Basic and Dimension of Vector Spaces",
                "Linear Transformation",
                "Their Nullity and Rank"
              ]
            },
            {
              "title": "UNIT 3: MATRIX ALGEBRA",
              "topics": [
                "Elementary Transformation",
                "Inverse of a Matrix by Row Operation",
                "Rank",
                "Solution of a System of Linear Simultaneous Equations by Matrix Methods",
                "Eigen Values and Eigen Vectors",
                "Quadratic Forms"
              ]
            },
            {
              "title": "UNIT 4: ANALYTICAL GEOMETRY OF 3-DIMENSIONS",
              "topics": [
                "Rectangular, Spherical, Polar, and Cylindrical Coordinates",
                "Direction Cosines",
                "Planes",
                "Straight Lines",
                "Shortest Distance Between Two Skew Lines",
                "Sphere"
              ]
            }
          ]
        },
        {
          "title": "ENVIRONMENTAL SCIENCE (BCA F2002)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "4",
          "units": [
            {
              "title": "UNIT 1: ENVIRONMENTAL AWARENESS, ECOLOGY AND ENVIRONMENT",
              "topics": [
                "Multidisciplinary nature of environmental science",
                "Definition, scope, importance, and need for public awareness",
                "Concept of an ecosystem",
                "Structure and function of an ecosystem",
                "Producer, consumer, and decomposer",
                "Energy and nutrient flow biogeochemical cycles",
                "Food chain, food web, ecological pyramid"
              ]
            },
            {
              "title": "UNIT 2: ENVIRONMENTAL POLLUTION",
              "topics": [
                "Segments of environment",
                "Sources, pathways, and fate of environmental pollutants",
                "Causes of environmental pollution",
                "Physical, chemical, and biological transformation of pollutants",
                "Population explosion",
                "Human health, human rights, value education, women, and child welfare"
              ]
            },
            {
              "title": "UNIT 3: AIR POLLUTION",
              "topics": [
                "Various segments of the atmosphere and their significance",
                "Classification of air pollutions",
                "Toxic effects",
                "Sampling and analysis",
                "Stationary and mobile emission sources and their control",
                "Photochemical smog, sulphurous smog, greenhouse effect",
                "Global warming, ozone depletion",
                "Air (Prevention and Control of Pollution) Act"
              ]
            },
            {
              "title": "UNIT 4: WATER POLLUTION",
              "topics": [
                "Water resources sources of water pollution",
                "Various pollutants and their toxic effect",
                "Portability of water",
                "Municipal water supply and disinfection",
                "Characteristics of waste water",
                "Primary and secondary waste water treatment",
                "BOD and COD measurement and their significance",
                "Rain water harvesting",
                "Water shed management",
                "Water (pollution and control) Act"
              ]
            }
          ]
        },
        {
          "title": "DATABASE MANAGEMENT SYSTEM (BCA C2003)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "5",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION TO DATABASES",
              "topics": [
                "Database Management System",
                "Need for DBMS - the file-based system",
                "Limitations of file-based system",
                "The Database Approach",
                "The Logical DBMS architecture - three-level architecture of DBMS",
                "The need for three levels architecture",
                "Physical DBMS Architecture"
              ]
            },
            {
              "title": "UNIT 2: DATA MODELS",
              "topics": [
                "Relational, Network, Hierarchical, ER Model",
                "Relational Model - Domain, Attributes, Tuple, and Relation",
                "Keys of the relations - primary key, foreign key, candidate key, alternate key, composite key",
                "Relational Constraints - Domain, Key, and Integrity constraints",
                "Relational algebra basic set operation (UNION, INTERSECTION, SET DIFFERENCE, Cartesian Product)",
                "Relational operations - SELECT, PROJECT, JOIN, DIVISION"
              ]
            },
            {
              "title": "UNIT 3: ER MODEL",
              "topics": [
                "Entities, Attributes and their types",
                "Relationship and Relationship sets",
                "Degree, Cardinality",
                "ER-Diagrams",
                "Enhanced feature of ER Model - Specialization, Generalization and Aggregation",
                "Codd’s rules",
                "Relational Schemas",
                "Functional Dependency",
                "Database Integrity",
                "Normalization (1NF, 2NF, 3NF, BCNF)"
              ]
            },
            {
              "title": "UNIT 4: TRANSACTION CONCEPT",
              "topics": [
                "States of Transaction",
                "ACID properties",
                "Conflict & View serializability",
                "Lock base protocols",
                "Two-phase locking",
                "Deadlock handling, prevention, detection and recovery scheme"
              ]
            },
            {
              "title": "UNIT 5: SQL",
              "topics": [
                "Categories of SQL Commands",
                "Views, constraints, types of constraints",
                "Integrity constraints - Entity Integrity Constraint and Referential Integrity Constraint",
                "SQL: data definition",
                "Aggregate function",
                "Null Values",
                "Nested subqueries",
                "Joined relations"
              ]
            }
          ]
        },
        {
          "title": "OBJECT ORIENTED PROGRAMMING USING C++ (BCA C2004)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "5",
          "units": [
            {
              "title": "UNIT 1: INTRODUCTION, BASIC TERMS AND IDEAS",
              "topics": [
                "Introducing Object-Oriented Approach",
                "Relating to other paradigms (Functional, Data decomposition)",
                "Abstraction, Encapsulation, Inheritance, Polymorphism",
                "Review of C",
                "Difference between C and C++",
                "cin, cout, new, delete, operators"
              ]
            },
            {
              "title": "UNIT 2: CLASSES AND OBJECTS",
              "topics": [
                "Encapsulation, information hiding, abstract data types",
                "Object & classes, attributes, methods",
                "C++ class declaration",
                "Constructors and destructors",
                "Instantiation of objects",
                "C++ garbage collection",
                "Dynamic memory allocation",
                "Abstract classes"
              ]
            },
            {
              "title": "UNIT 3: INHERITANCE AND POLYMORPHISM",
              "topics": [
                "Inheritance, Class hierarchy, derivation – public, private & protected",
                "Polymorphism",
                "Categorization of polymorphism techniques",
                "Method polymorphism, Polymorphism by parameter",
                "Operator overloading"
              ]
            },
            {
              "title": "UNIT 4: GENERIC FUNCTION, FILES AND EXCEPTION HANDLING",
              "topics": [
                "Template function",
                "Function name overloading",
                "Overriding inheritance methods",
                "Run time polymorphism",
                "Multiple Inheritance",
                "Streams and files",
                "Namespaces",
                "Exception handling",
                "Generic Classes"
              ]
            }
          ]
        },
        {
          "title": "LOGIC DESIGN (BCA C2005)",
          "time": "3 hrs",
          "marks": "70",
          "credit": "4",
          "units": [
            {
              "title": "UNIT 1: BOOLEAN ALGEBRA AND LOGIC GATES",
              "topics": [
                "Digital Systems",
                "Signed Binary Numbers",
                "Binary Codes",
                "Binary Storage and Registers",
                "Binary Logic",
                "Basic Definitions",
                "Axiomatic Definition of Boolean Algebra",
                "Basic Theorems and Properties of Boolean Algebra",
                "Boolean Functions",
                "Canonical and Standard Forms",
                "Digital Logic Operations",
                "Digital Logic Gates",
                "Integrated Circuits"
              ]
            },
            {
              "title": "UNIT 2: GATE-LEVEL MINIMIZATION",
              "topics": [
                "The Map Method",
                "Four-Variable Map",
                "Don't-Care Conditions",
                "SOP & POS Simplification",
                "NAND and NOR Implementations",
                "Exclusive-OR Function"
              ]
            },
                     
          ]
        },
         {
                "title": "LOGIC DESIGN (BCA C2005)",
                "time": "3 hrs",
                "marks": "70",
                "credit": "4",
                "units": [
                  {
                    "title": "UNIT 1: BOOLEAN ALGEBRA AND LOGIC GATES",
                    "topics": [
                      "Digital Systems",
                      "Signed Binary Numbers",
                      "Binary Codes",
                      "Binary Storage and Registers",
                      "Binary Logic",
                      "Basic Definitions",
                      "Axiomatic Definition of Boolean Algebra",
                      "Basic Theorems and Properties of Boolean Algebra",
                      "Boolean Functions",
                      "Canonical and Standard Forms",
                      "Digital Logic Operations",
                      "Digital Logic Gates",
                      "Integrated Circuits"
                    ]
                  },
                
                  {
                    "title": "UNIT 2: GATE-LEVEL MINIMIZATION",
                    "topics": [
                      "The Map Method",
                      "Four-Variable Map",
                      "Don't-Care Conditions",
                      "SOP & POS Simplification",
                      "NAND and NOR Implementations",
                      "Exclusive-OR Function"
                    ]
                  },
                  {
                    "title": "UNIT 3: COMBINATIONAL LOGIC",
                    "topics": [
                      "Combinational Circuits",
                      "Design Procedure",
                      "Binary Adder-Subtractor",
                      "Decimal Adder",
                      "Decoders",
                      "Encoders",
                      "Multiplexers",
                      "Demultiplexers"
                    ]
                  },
                  {
                    "title": "UNIT 4: SYNCHRONOUS SEQUENTIAL LOGIC",
                    "topics": [
                      "Sequential Circuits",
                      "Latches",
                      "Flip-Flops",
                      "Analysis of Clocked Sequential Circuits",
                      "State Reduction and Assignment",
                      "Design Procedure"
                    ]
                  },
                  {
                    "title": "UNIT 5: REGISTERS AND CIRCUITS",
                    "topics": [
                      "Registers",
                      "Shift Registers",
                      "Ripple Counters",
                      "Synchronous Counters",
                      "Other Counters"
                    ]
                  }
                ]
              }
      
           
      
    ]

    
function Semester2(){

    return (
        <div className="App">
      <Header />
      <div className="semester-name">
      <img src="https://fontmeme.com/permalink/240925/76247a096a636766bf876b285c63d322.png" alt="futuristic-fonts" />
        &nbsp; &nbsp; 
        <img src="https://fontmeme.com/permalink/241130/3ac2016bead197201f5844439101b8a5.png" alt="futuristic-fonts" />
        </div>  
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
      <CourseTable courses={courses} />  {/* Add CourseTable */}
 
    </div>
  );
}
  
  export default Semester2;