// ==========================================
// 1. Console Output
// ==========================================

console.log("Hello, JavaScript!");


// ==========================================
// 2. Data Types and typeof
// ==========================================

let studentName = "Sara";
let studentAge = 19;
let isEnrolled = true;

console.log(typeof studentName); // string
console.log(typeof studentAge);  // number
console.log(typeof isEnrolled); // boolean


// ==========================================
// 3. Getting User Input with prompt()
// ==========================================

// Adding two inputs as strings
let firstInput = prompt("Enter first number:");
let secondInput = prompt("Enter second number:");

console.log(firstInput + secondInput);
// Example: "5" + "3" = "53"

// ==========================================
// 4. Type Conversion and Age Calculator
// ==========================================

let userName = prompt("What is your name?");
let birthYear = Number(prompt("What is your birth year?"));

let estimatedAge = new Date().getFullYear() - birthYear;

console.log("Hello " + userName);
console.log("Your estimated age is " + estimatedAge);

// ==========================================
// 5. Basic Arithmetic Operations
// ==========================================

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);

console.log(
    "Division:",
    num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
);

console.log("Remainder:", num1 % num2);


// ==========================================
// 6. Even or Odd
// ==========================================

let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// ==========================================
// 7. Assignment and Comparison Operators
// ==========================================

let comparisonAge = 20;

// Assignment operator: =
console.log(comparisonAge);

// Loose equality: compares after type conversion
console.log(5 == "5");  // true

// Strict equality: compares value and type
console.log(5 === "5"); // false


// ==========================================
// 8. Logical Operators
// ==========================================

let adultAge = 22;
let hasID = true;

console.log(adultAge >= 18 && hasID); // true (AND)
console.log(adultAge < 18 || hasID);  // true (OR)
console.log(!hasID);                  // false (NOT)


// ==========================================
// 9. Conditions: Pass or Fail
// ==========================================

let grade = Number(prompt("Enter your grade:"));

if (grade < 0 || grade > 100) {
    console.log("Invalid grade");
} else if (grade >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}


// ==========================================
// 10. Login Validation
// ==========================================

const correctUsername = "admin";
const correctPassword = "1234";

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (
    username === correctUsername &&
    password === correctPassword
) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}

// ==========================================
// 11. Extra Exercise: Welcome Message
// ==========================================

let welcomeName = prompt("Enter your name:");
let city = prompt("Enter your city:");

console.log(`Welcome ${welcomeName} from ${city}!`);


// ==========================================
// 12. Extra Exercise: Simple Calculator
// ==========================================

let calcNum1 = Number(prompt("Enter first number:"));
let calcNum2 = Number(prompt("Enter second number:"));
let operation = prompt("Choose +, -, *, or /:");

if (operation === "+") {
    console.log(calcNum1 + calcNum2);

} else if (operation === "-") {
    console.log(calcNum1 - calcNum2);

} else if (operation === "*") {
    console.log(calcNum1 * calcNum2);

} else if (operation === "/") {
    if (calcNum2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log(calcNum1 / calcNum2);
    }

} else {
    console.log("Invalid operation");
}