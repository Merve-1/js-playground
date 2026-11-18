# Session 3: Arrays & Functions

## Session Overview

- Learn how to store and manage multiple values using JavaScript Arrays.
- Understand how to access, update, and loop through array elements.
- Learn how to organize reusable code using Functions.
- Understand parameters, arguments, and return values.
- Apply arrays and functions together to solve practical problems.

## Session Objectives

By the end of this session, you will be able to:

- Create arrays and access their elements using indexes.
- Understand the `.length` property.
- Read and update array elements.
- Loop through arrays using `for` loops.
- Filter array elements using conditions.
- Declare and call functions.
- Pass parameters and arguments to functions.
- Return values from functions using `return`.
- Combine arrays and functions to solve programming problems.

## Session Content

### 1. Introduction to Arrays

Recall Python Lists:

```
names = ["Ali", "Sara", "Omar"]
print(names)
```

JavaScript Arrays:

```
let names = ["Ali", "Sara", "Omar"];

console.log(names);
```

Explain:

- An array stores multiple values in one variable.
- Arrays can contain strings, numbers, and other data types.
- Array indexes start from `0`.

### 2. Accessing Array Elements (Index)

Example:

```
let names = ["Ali", "Sara", "Omar"];

console.log(names[0]); // Ali
console.log(names[1]); // Sara
console.log(names[2]); // Omar
```

Important:

- First index = `0`.
- Last index = `length - 1`.

 Task: Create an array of five student names and print the first and last names.

### 3. Array Length and Updating Elements

In Python:

```
len(names)
```

In JavaScript:

```
let names = ["Ali", "Sara", "Omar"];

console.log(names.length); // 3
```

Updating an element:

```
names[1] = "Mona";

console.log(names);
```

Expected output:

```
["Ali", "Mona", "Omar"]
```

 Tasks:

- Create an array of five numbers.
- Print the number of elements.
- Change the third element.
- Print the updated array.

### 4. Looping Through Arrays

Use a `for` loop to access every element.

Example:

```
let names = ["Ali", "Sara", "Omar"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
```

Example: Print only even numbers from an array

```
let numbers = [1, 4, 7, 8, 10, 13, 16];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
```

Expected output:

```
4
8
10
16
```

 Tasks:

- Display all names in an array.
- Print numbers greater than 10.
- Print only odd numbers.
- Calculate the sum of all numbers in an array.

### 5. Introduction to Functions

Problem: What if we need to write the same code several times?

Instead of repeating code, we can create a function and reuse it whenever needed.

Python:

```
def welcome():    
    print("Welcome to JavaScript!")

welcome()
```

JavaScript:

```
function welcome() {
    console.log("Welcome to JavaScript!");
}

welcome();
```

Explain:

- `function`: declares a function.
- Function name: identifies the function.
- `{}`: contains the function instructions.
- Calling a function: executes its code.

Important: Declaring a function does not execute it. We must call it.

 Task: Create a function called `sayHello()` that displays a welcome message, then call it three times.

### 6. Functions with Parameters and Arguments

Parameters allow functions to receive information.

Example:

```
function welcome(name) {
    console.log("Welcome " + name);
}

welcome("Ahmed");
welcome("Sara");
```

Explain:

- Parameter: the variable inside the function definition (`name`).
- Argument: the actual value passed when calling the function (`"Ahmed"`).

Example: Add two numbers

```
function add(a, b) {
    console.log(a + b);
}

add(5, 3);
add(10, 20);
```

Expected output:

```
8
30
```

 Tasks:

- Create a function that receives a name and displays a personalized greeting.
- Create a function that receives two numbers and displays their multiplication.
- Create a function that receives an age and displays whether the person is an adult.

### 7. Return vs. Console.log

One of the most important differences in functions.

Using console.log():

```
function add(a, b) {
    console.log(a + b);
}

add(5, 3);
```

This displays the result but does not return it for further use.

Using return:

```
function add(a, b) {
    return a + b;
}

let result = add(5, 3);

console.log(result);
```

Explain:

- `console.log()` displays information.
- `return` sends a value back from the function.
- Returned values can be stored, reused, or passed to other functions.

 Task: Create a function that calculates the square of a number and returns the result.

## Activities

1. Creating an array of student names and displaying all names.
2. Printing only even numbers from an array.
3. Updating a student's name using its index.
4. Creating a welcome function that receives a name.
5. Creating a function that receives two numbers and returns their sum.

## Final Mini-Project: Student Grades Analyzer

Practical application

Goal: Create a function that receives an array of student grades and returns the number of students who passed.

Requirements:

- Create an array containing student grades.
- Pass the array to a function.
- Loop through all grades.
- Use a condition to check whether each grade is at least 50.
- Count the successful students.
- Return the final count.
- Display the result outside the function.

```

let grades = [90, 45, 75, 30, 85, 60, 40];

function countPassed(grades) {
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 50) {
            count++;
        }
    }

    return count;
}

let result = countPassed(grades);

console.log("Number of passed students:", result);

```

Expected output:

```
Number of passed students: 4
```

Bonus Challenge:

- Create another function that calculates the average grade.
- Create a function that returns the highest grade.
- Display all results outside the functions.

