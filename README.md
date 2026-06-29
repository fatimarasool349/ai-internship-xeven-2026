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
**30 June 2026**

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

---
##  Author

**Fatima Rasool**  
Aspiring AI Engineer 
