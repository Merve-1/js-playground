// ==========================================
// 1. Basic Output
// ==========================================

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


// ==========================================
// 2. For Loop
// ==========================================

// Example 1: Print numbers from 1 to 5
//for(init; condition; increment/decrement)
for (let i = 1; i <= 5; i++) { //i = i + 1
    console.log(i);  
}

// Example 2: Print numbers from 5 to 1
for (let i = 5; i >= 1; i--) { //i = i - 1
    console.log(i);
}

// Example 3: Print numbers greater than 5
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i);
    }
}

// Example 4: Calculate the sum of numbers from 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 5:", sum);


// ==========================================
// 3. While Loop
// ==========================================

// Example 1: Print numbers from 1 to 5
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// Example 2: Infinite Loop (Do Not Run)
/*
let counter = 1;

while (counter <= 5) {
    console.log(counter);

    // Missing counter++ causes an infinite loop.
}
*/


// ==========================================
// 4. Do-While Loop
// ==========================================

// Print numbers from 1 to 5
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);


// ==========================================
// 5. Nested Loops
// ==========================================

// Print combinations of two counters
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// ==========================================
// 6. Loop Control Statements
// ==========================================

// Example: Using continue and break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the current iteration.
    }

    if (i === 8) {
        break; // Stop the loop completely.
    }

    console.log(i);
}


// ==========================================
// 7. Mini-Project: Number Guessing Game
// ==========================================

// The user must guess the secret number.
const secretNumber = 7;
let guess;

while (guess !== secretNumber) {
    guess = Number(
        prompt("Guess the secret number (between 1 and 10):")
    );

    if (guess === secretNumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log("Incorrect guess. Try again!");
    }
}


// ==========================================
// 8. Practice Challenges
// ==========================================

// Challenge 1: Print even numbers from 2 to 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Challenge 2: Print numbers from 10 down to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Challenge 3: Ask the user for a number and print its
// multiplication table from 1 to 10.
let userNumber = Number(prompt("Enter a number for its multiplication table:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${userNumber} x ${i} = ${userNumber * i}`);
}
// Challenge 4: Calculate the factorial of a positive integer.
let n = Number(prompt("Enter a positive integer:"));
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`The factorial of ${n} is ${factorial}`);

// Challenge 5: Calculate the sum of even numbers from 1 to 100.
let sum2 = 0;
for (let i = 2; i <= 100; i += 2) {
    sum2 += i;
}
console.log(`The sum of even numbers from 1 to 100 is ${sum2}`);

// Challenge 6: Reverse a number
let number2 = 12345;
let reversed = 0;

while (number2 > 0) {
    const digit = number2 % 10;
    reversed = reversed * 10 + digit;
    number2 = Math.floor(number2 / 10);
}

console.log("Reversed number:", reversed); // 54321

// Challenge 7: Print a pattern
```
*
**
***
****
*****
```
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

// ==========================================
// 9. Summary
// ==========================================

// for loop      -> Repeats code using initialization, condition, and update.
// while loop    -> Repeats code while a condition is true.
// do-while loop -> Executes code at least once before checking the condition.
// nested loops  -> Places one loop inside another loop.
// break         -> Terminates the loop.
// continue      -> Skips the current iteration and continues to the next.