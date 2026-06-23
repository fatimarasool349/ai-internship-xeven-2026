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

##  Overall Learning So Far

- Python basics
- Variables and data types
- Input/output handling
- Type conversion
- Arithmetic operations
- Conditional statements
- Problem solving basics

---
##  Author

**Fatima Rasool**  
Aspiring AI Engineer 🚀
