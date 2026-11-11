// ============================================================
// Session 3: Arrays & Functions — Complete Code Pack
// ============================================================

// PART 1: INTRODUCTION TO ARRAYS

{
    // Example 1: Create and Display an Array
    let names = ["Ali", "Sara", "Omar"];
    console.log(names);
}

{
    // Task 1: Create an Array of Student Names
    let students = ["Ahmed", "Mona", "Ali", "Sara", "Youssef"];
    console.log(students);
}

// ============================================================
// PART 2: ACCESSING AND UPDATING ARRAY ELEMENTS
// ============================================================

{
    // Example 2: Access Array Elements Using Index
    let names = ["Ali", "Sara", "Omar"];

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
}

{
    // Task 2: Display the First and Last Names
    let students = ["Ahmed", "Mona", "Ali", "Sara", "Youssef"];

    console.log("First student:", students[0]);
    console.log("Last student:", students[4]);
}

{
    // Example 3: Update an Array Element
    let names = ["Ali", "Sara", "Omar"];

    names[1] = "Mona";

    console.log(names);
}

{
    // Task 3: Update a Student's Name
    let students = ["Ahmed", "Mona", "Ali", "Sara", "Youssef"];

    students[2] = "Mahmoud";

    console.log(students);
}

{
    // Example 4: Get the Array Length
    let names = ["Ali", "Sara", "Omar"];

    console.log(names.length);
}

{
    // Task 4: Count the Number of Students
    let students = ["Ahmed", "Mona", "Ali", "Sara", "Youssef"];

    console.log("Number of students:", students.length);
}

// ============================================================
// PART 3: LOOPING THROUGH ARRAYS
// ============================================================

{
    // Example 5: Display All Array Elements
    let names = ["Ali", "Sara", "Omar"];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

{
    // Task 5: Display All Student Names
    let students = ["Ahmed", "Mona", "Ali", "Sara", "Youssef"];

    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}

{
    // Example 6: Print Even Numbers from an Array
    let numbers = [1, 4, 7, 8, 10, 13, 16];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}

{
    // Task 6: Print Odd Numbers from an Array
    let numbers = [2, 5, 8, 11, 14, 17, 20, 23];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}

{
    // Example 7: Print Numbers Greater Than 10
    let numbers = [5, 12, 8, 20, 3, 15];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i]);
        }
    }
}

{
    // Task 7: Print Numbers Less Than 50
    let numbers = [10, 75, 30, 90, 45, 15, 60];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 50) {
            console.log(numbers[i]);
        }
    }
}

{
    // Example 8: Calculate the Sum of Array Elements
    let numbers = [10, 20, 30, 40];

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Total:", sum);
}

{
    // Task 8: Calculate the Sum of Even Numbers
    let numbers = [2, 5, 8, 11, 14, 17, 20];

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    console.log("Sum of even numbers:", sum);
}

// ============================================================
// PART 4: INTRODUCTION TO FUNCTIONS
// ============================================================

{
    // Example 9: Create and Call a Function
    function welcome() {
        console.log("Welcome to JavaScript!");
    }

    welcome();
}

{
    // Task 9: Create a Greeting Function
    function sayHello() {
        console.log("Hello, Welcome!");
    }

    sayHello();
    sayHello();
    sayHello();
}

{
    // Example 10: Function with a Parameter
    function welcome(name) {
        console.log("Welcome " + name);
    }

    welcome("Ahmed");
    welcome("Sara");
}

{
    // Task 10: Personalized Greeting
    function greetUser(name) {
        console.log("Hello " + name + "! Welcome to our website.");
    }

    greetUser("Mona");
    greetUser("Ali");
    greetUser("Omar");
}

{
    // Example 11: Function with Two Parameters
    function add(a, b) {
        console.log(a + b);
    }

    add(5, 3);
    add(10, 20);
}

{
    // Task 11: Multiply Two Numbers
    function multiply(a, b) {
        console.log("Result:", a * b);
    }

    multiply(5, 4);
    multiply(10, 3);
}

{
    // Example 12: Function with a Condition
    function checkAge(age) {
        if (age >= 18) {
            console.log("Adult");
        } else {
            console.log("Minor");
        }
    }

    checkAge(20);
    checkAge(15);
}

{
    // Task 12: Check Whether a Number Is Even or Odd
    function checkNumber(number) {
        if (number % 2 === 0) {
            console.log(number + " is Even");
        } else {
            console.log(number + " is Odd");
        }
    }

    checkNumber(8);
    checkNumber(13);
    checkNumber(20);
}

// ============================================================
// PART 5: RETURN VS. console.log()
// ============================================================

{
    // Example 13: Display a Result Using console.log()
    function add(a, b) {
        console.log(a + b);
    }

    add(5, 3);
}

{
    // Example 14: Return a Result from a Function
    function add(a, b) {
        return a + b;
    }

    let result = add(5, 3);

    console.log("Result:", result);
}

{
    // Example 15: Reuse a Returned Value
    function add(a, b) {
        return a + b;
    }

    let result1 = add(10, 5);
    let result2 = add(20, 10);

    let total = result1 + result2;

    console.log("First result:", result1);
    console.log("Second result:", result2);
    console.log("Total:", total);
}

{
    // Task 13: Calculate the Square of a Number
    function square(number) {
        return number * number;
    }

    let result = square(5);

    console.log("Square:", result);
}

{
    // Task 14: Calculate the Average of Three Numbers
    function calculateAverage(a, b, c) {
        return (a + b + c) / 3;
    }

    let result = calculateAverage(80, 90, 70);

    console.log("Average:", result);
}

// ============================================================
// PART 6: STUDENT GRADES ANALYZER
// ============================================================

{
    // Project 1: Count Passed Students
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
}

{
    // Project 2: Calculate the Average Grade
    let grades = [90, 80, 70, 60, 100];

    function calculateAverage(grades) {
        let sum = 0;

        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }

        return sum / grades.length;
    }

    let average = calculateAverage(grades);

    console.log("Average Grade:", average);
}

{
    // Project 3: Find the Highest Grade
    let grades = [75, 90, 65, 100, 85];

    function findHighest(grades) {
        let highest = grades[0];

        for (let i = 1; i < grades.length; i++) {
            if (grades[i] > highest) {
                highest = grades[i];
            }
        }

        return highest;
    }

    let result = findHighest(grades);

    console.log("Highest Grade:", result);
}


// ============================================================
// PART 8: QUICK PRACTICE — PREDICT THE OUTPUT
// ============================================================

{
    // Practice 1: Predict the Array Index Output
    let colors = ["Red", "Blue", "Green", "Yellow"];

    console.log(colors[1]);
    console.log(colors[3]);
    console.log(colors.length);
}

{
    // Practice 2: Predict the Updated Array
    let numbers = [10, 20, 30, 40];

    numbers[0] = 100;
    numbers[2] = 300;

    console.log(numbers);
}

{
    // Practice 3: Predict the Loop Output
    let numbers = [2, 5, 8, 11, 14];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 5) {
            console.log(numbers[i]);
        }
    }
}

{
    // Practice 4: Predict the Function Output
    function multiply(a, b) {
        console.log(a * b);
    }

    multiply(4, 5);
    multiply(3, 6);
}

{
    // Practice 5: Predict the Returned Value
    function calculate(a, b) {
        return a + b * 2;
    }

    let result = calculate(5, 3);

    console.log(result);
}

{
    // Practice 6: Predict the Final Result
    let numbers = [2, 4, 6];

    function calculateSum(numbers) {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        return sum;
    }

    console.log(calculateSum(numbers));
}

