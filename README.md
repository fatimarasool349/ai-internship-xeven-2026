# Python Learning Journey 

This repository contains my daily Python learning progress as I start my journey toward becoming an AI Engineer.

---

##  Day 1: Introduction to Python

###  Topics Covered
- Python setup and environment
- `print()` function
- Running first Python program

###  Code
```python
print("Hi, this is Fatima Rasool, future AI Engineer!")
```

###  Learning Outcome
- Learned how to write and run a Python program
- Understood basic syntax of Python

---

## Day 2: Data Types, Input/Output & Type Conversion

### Topics Covered
- Data Types: int, float, string, complex
- `type()` function
- User input using `input()`
- Type conversion: int(), float(), str()
- PEP 8 naming conventions

###  Code Highlights

```python
integer_value = 8
float_value = 8.98
string_value = "python"
complex_value = 3 + 4j

print(type(integer_value))
print(type(float_value))
print(type(string_value))
print(type(complex_value))
```

###  Task 1: User Input Example
```python
user_age_input = int(input("Enter your age: "))
print(f"Your age is: {user_age_input}")
```

###  Task 2: Simple Calculator
```python
first_number = int(input("Enter first no: "))
second_number = int(input("Enter second no: "))

sum = first_number + second_number
difference = first_number - second_number
product = first_number * second_number
quotient = first_number / second_number

print(sum, difference, product, quotient)
```

###  Learning Outcome
- Understood Python data types
- Learned how to take user input
- Practiced type conversion and arithmetic operations

---

##  Day 3: Conditional Statements & Logic

###  Topics Covered
- if, elif, else statements
- Comparison operators
- Logical flow control
- Input validation

---

###  Task 1: Age Verification System
```python
name = input("enter your name:")
age = int(input("enter your age:"))

if age <= 0:
    print("Please enter correct age")
elif age < 13:
    print("Child stage")
elif age <= 17:
    print("Teenager stage")
elif age <= 64:
    print("Adult stage")
else:
    print("Senior citizen")
```

---

###  Task 2: Grade Calculator
```python
grade = int(input("Enter your grade (0-100): "))

if grade < 0 or grade > 100:
    print("Invalid grade")
elif grade >= 90:
    print("A Grade - Excellent")
elif grade >= 80:
    print("B Grade - Good")
elif grade >= 70:
    print("C Grade - Average")
elif grade >= 60:
    print("D Grade - Needs Improvement")
else:
    print("F Grade - Fail")
```

---

## Day 4: Operators & Type Conversion 
 Overview
Today, I completed two Python tasks to strengthen my understanding of arithmetic operators, logical operators, comparison operators, conditional statements, functions, and exception handling.
##  Objective
Develop a user validation program that checks whether the entered name, password, and age meet the required conditions before granting access.

##  Features
- Takes user input for name, password, and age.
- Validates that:
  - Name contains at least **5 characters**.
  - Password contains at least **8 characters**.
  - Age is **18 years or older**.
- Displays appropriate error messages for invalid inputs.
- Grants access only if all conditions are satisfied.

##  Concepts Used
- Variables
- User Input (`input()`)
- Type Casting (`int()`)
- Boolean Variables
- `len()` Function
- Comparison Operators (`>=`)
- Logical Operators (`and`, `not`)
- Conditional Statements (`if`, `else`)

#  Task 2: Calculator Using Functions

##  Objective
Build a calculator that performs multiple arithmetic operations using separate Python functions.

##  Operations Performed
- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulus (`%`)
- Exponentiation (`**`)
  # Day 5 – Introduction to Machine Learning & Decision Trees

## 📌 Overview
On Day 5, I learned the fundamentals of Machine Learning, its main types, and the concept of Decision Trees. I also implemented a Python program that simulates a loan approval system using decision tree logic with conditional statements.

---

## 🎯 Objectives
- Understand the basics of Machine Learning.
- Learn the three types of Machine Learning.
- Understand the structure and working of Decision Trees.
- Implement a simple Decision Tree in Python for loan approval.

---

## 📚 Topics Covered

### 1. Machine Learning
Machine Learning (ML) is a branch of Artificial Intelligence (AI) that enables computers to learn from data and make predictions or decisions without being explicitly programmed.

### 2. Types of Machine Learning
- **Supervised Learning**
  - Learns from labeled data.
  - Example: Email spam detection, loan approval.

- **Unsupervised Learning**
  - Learns from unlabeled data.
  - Example: Customer segmentation.

- **Reinforcement Learning**
  - Learns through rewards and penalties.
  - Example: Self-driving cars, game-playing AI.

### 3. Decision Tree
A Decision Tree is a supervised machine learning algorithm that makes decisions by evaluating conditions step by step until a final prediction is reached.

---

## 💻 Practical Task

### Loan Approval Decision Tree

### Objective
Develop a Python program that simulates a loan approval process using decision tree logic.

### Input
- Age
- Salary
- Credit Score

### Decision Rules
- If age < 18 → Reject Loan
- Else if salary < 30000 → Reject Loan
- Else if credit score < 600 → Reject Loan
- Else → Approve Loan

### Output
The program displays whether the user is eligible for a loan and explains the decision.

---

## ✨ Features
- Takes user input.
- Uses conditional statements (`if`, `elif`, `else`).
- Simulates decision tree logic.
- Displays the decision path.
- Demonstrates the concept of supervised learning.

---

## 🛠 Concepts Used
- Machine Learning Basics
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Decision Tree
- User Input
- Type Casting
- Comparison Operators
- Conditional Statements

---
##  Date
**29 June 2026**

# Day 6 – Python Data Structures: Lists

## Overview

This project contains practice programs demonstrating Python list operations and their practical applications. The exercises focus on understanding how lists work, how to manipulate list data, and how lists can be used to solve simple real-world problems.

---

## Topics Covered

- Creating lists
- List indexing
- Negative indexing
- List slicing
- Step slicing
- Adding items using `append()`
- Inserting items using `insert()`
- Extending lists using `extend()`
- Removing items using `remove()`
- Removing items using `pop()`
- Clearing a list using `clear()`
- Sorting lists using `sort()`
- Reversing lists using `reverse()`
- Counting occurrences using `count()`
- Finding element positions using `index()`
- Using loops with lists
- Creating dictionaries from lists using `zip()`

---

# Task 1: Student List Management System

## Description

This program demonstrates the fundamental operations that can be performed on Python lists.

### Features

- Create a list of student names.
- Display the complete list.
- Access elements using positive indexing.
- Access elements using negative indexing.
- Retrieve elements using slicing.
- Retrieve every second element using step slicing.
- Add a new student using `append()`.
- Insert a student at a specific position using `insert()`.
- Add multiple students using `extend()`.
- Remove a student using `remove()`.
- Remove the last element using `pop()`.
- Remove an element from a specific index using `pop(index)`.
- Sort the list alphabetically.
- Reverse the list.
- Count the occurrences of a student's name.
- Find the index of a student.
- Clear the entire list.

---

# Task 2: Grade Tracker with Lists

## Description

This program manages student names and grades using two separate lists and performs basic grade analysis.

### Features

- Store student names and grades.
- Combine both lists into a dictionary using `zip()`.
- Calculate the highest grade.
- Calculate the lowest grade.
- Calculate the average grade.
- Display students who passed (grade greater than 50).
- Traverse lists using a loop.
- Store passing students in a new list.

---

# Task 3: List Slicing Practice

## Description

This program demonstrates different list slicing techniques using a list of numbers from 1 to 20.

### Features

- Display the first five elements.
- Display the last five elements.
- Display every third element.
- Reverse the list using slicing.
- Display the middle ten elements.

---

## Concepts Practiced

- Python Lists
- Indexing
- Negative Indexing
- List Slicing
- Step Slicing
- List Methods
- Loops
- Conditional Statements
- Dictionary Creation using `zip()`

---
# Day 8 - Python Lists & List Operations
---

## 📖 Description
This project contains my Day 8 tasks for the AI Engineer Internship. The focus was on learning Python lists, list operations, and implementing real-world applications using lists.

---

##  Learning Objectives
- Understand Python lists and their properties.
- Learn and practice list methods.
- Perform list slicing and negative indexing.
- Use list comprehensions.
- Apply lists in practical programming tasks.

---

##  Topics Covered
- Python Lists
- List Methods
  - `append()`
  - `insert()`
  - `remove()`
  - `pop()`
  - `sort()`
  - `reverse()`
  - `clear()`
- List Slicing
- Negative Indexing
- List Comprehensions
- When to Use Lists

---

##  Practical Tasks

###  Task 1: Student Grade Manager
**Description**
A Python application to manage student names and grades.

**Features**
- Add new students
- Update grades
- Calculate average grade
- Display all students

**Concepts Used**
- Lists
- Functions
- Loops
- Conditionals

---

###  Task 2: Shopping Cart System
**Description**
A shopping cart application built using Python lists.

**Features**
- Add products
- Remove products
- Calculate total bill
- Display cart items

**Concepts Used**
- Lists
- List methods
- Functions

---

###  Task 3: Data Cleaning Pipeline
**Description**
A program that cleans raw list data before processing.

**Features**
- Remove duplicate values
- Remove extra whitespace
- Normalize text case
- Generate cleaned data

**Concepts Used**
- Lists
- String methods
- Loops

---




##  Outcome
Successfully completed all theoretical concepts and implemented three Python projects demonstrating practical use of lists and list operations.

---
##  Date
**30 June 2026**

# Day 9 - Python Tuples & Sets

## Overview

Today focused on learning Python tuples, implementing real-world tuple-based programs, and building a Decision Tree classification model using Scikit-learn. I also practiced data preprocessing, model training, evaluation, and visualization.

---

## Tasks Completed

### Task 1: Geographic Coordinates System

Implemented a geographic coordinate system using tuples.

#### Features
- Stored city locations as tuples.
- Represented each city using:
  - City Name
  - Longitude
  - Latitude
- Created tuples for:
  - Lahore
  - Karachi
  - Arifwala

#### Concepts Learned
- Tuples
- Immutable data structures
- Geographic coordinate representation

---

### Task 2: Email Validation System

Built an email validation program using Python sets.

#### Features
- Maintained a set of valid email domains.
- Checked for the presence of the '@' symbol.
- Validated email domains.
- Stored unique email addresses using sets.
- Prevented duplicate registrations.
- Filtered emails belonging to a specific domain.

#### Concepts Learned
- Sets
- Membership operators
- String manipulation
- Duplicate prevention

---

### Task 3: Growth Rate & Retention Rate Calculator

Implemented calculations for business growth and customer retention.

#### Features
- Calculated Growth Rate.
- Calculated Customer Retention Rate.
- Displayed results based on user input.
- Practiced mathematical calculations in Python.

#### Concepts Learned
- Arithmetic operations
- Percentage calculations
- Business metrics

---

### Task 4: Loan Prediction using Decision Tree

Built a machine learning model using Scikit-learn.

#### Features
- Loaded dataset using Pandas.
- Checked dataset information.
- Encoded categorical data using LabelEncoder.
- Split dataset into training and testing sets.
- Trained a Decision Tree Classifier.
- Predicted loan approval status.
- Evaluated model accuracy.
- Visualized the Decision Tree.

#### Libraries Used

- pandas
- matplotlib
- scikit-learn

#### Machine Learning Workflow

1. Load Dataset
2. Data Inspection
3. Data Preprocessing
4. Label Encoding
5. Feature Selection
6. Train-Test Split
7. Model Training
8. Prediction
9. Accuracy Evaluation
10. Decision Tree Visualization

#### Concepts Learned

- Label Encoding
- Supervised Learning
- Classification
- Decision Tree Algorithm
- Train-Test Split
- Model Evaluation
- Accuracy Score
- Decision Tree Visualization

---

## Technologies Used

- Python
- Pandas
- Matplotlib
- Scikit-learn

---

---
**date:july 1 2026**


# Day 10 - Python Dictionaries, JSON & Loops

## 📌 Objective

The objective of today's work was to understand Python dictionaries, JSON file handling, and looping constructs through theoretical study and practical implementation.

---

## 📚 Topics Covered

### Dictionaries

- Key-value pairs
- Fast O(1) lookup
- Mutable dictionaries
- Dictionary methods:
  - `get()`
  - `keys()`
  - `values()`
  - `items()`
  - `update()`
  - `pop()`
- Nested dictionaries
- Dictionary comprehensions

### JSON

- Reading JSON using `json.load()`
- Writing JSON using `json.dump()`

### Loops

#### For Loops

- Iterating over sequences
- `range()` function
- `enumerate()`
- `zip()`

#### While Loops

- Condition-based iteration
- Infinite loops
- Loop termination

#### Loop Control Statements

- `break`
- `continue`
- `else` with loops

#### Nested Loops

- Matrix traversal
- 2D data processing
- Time Complexity: **O(n²)**

---

##  Practical Implementations

Completed the following practice programs:

- Dictionary operations
- Student and phone contact dictionaries
- Restaurant menu using nested dictionaries
- Dictionary comprehensions
- JSON read and write examples
- For loop examples
- While loop examples
- `range()` practice
- `enumerate()` examples
- `zip()` examples
- `break`, `continue`, and `else`
- Nested loop examples
- Matrix traversal
- Shopping cart total calculation

---

##  Debugging Exercise

### Problem

The third product in the shopping cart produced an incorrect total price.

### Root Cause

The multiplication logic was correct, but the stored quantity in the dictionary was incorrect.

### Solution

- Printed each product's price and quantity.
- Verified the dictionary values.
- Identified the incorrect quantity.
- Corrected the input data.
- Confirmed that the total calculation was correct.

---

##  Key Learning Outcomes

- Learned how dictionaries store data using key-value pairs.
- Understood dictionary methods and their practical usage.
- Learned how nested dictionaries organize complex data.
- Practiced reading and writing JSON files.
- Learned dictionary comprehensions.
- Practiced `for` and `while` loops.
- Learned `range()`, `enumerate()`, and `zip()`.
- Understood loop control statements (`break`, `continue`, `else`).
- Learned nested loops and their **O(n²)** time complexity.
- Improved debugging skills by validating input data before modifying program logic.

---

**date:july 2 2026**

##  Overall Learning So Far

- Python basics
- Variables and data types
- Input/output handling
- Type conversion
- Arithmetic operations
- Conditional statements
- Problem solving basics
- comparsion operater
- Logical operator
- Exception Handling
- Learned the fundamentals of Machine Learning.
- Understood the differences between Supervised, Unsupervised, and Reinforcement Learning.
- Learned how Decision Trees make decisions.
- Implemented a real-world decision tree example using Python.
- Improved understanding of conditional statements and decision-making logic.
- - Work with Python lists efficiently.
- Access list elements using different indexing techniques.
- Modify lists by adding and removing elements.
- Sort and reverse list data.
- Analyze numerical data stored in lists.
- Use loops to process list elements.
- Create dictionaries from multiple lists.
- Apply list operations to solve practical programming problems.

---


##  Author

**Fatima Rasool**  
Aspiring AI Engineer 
