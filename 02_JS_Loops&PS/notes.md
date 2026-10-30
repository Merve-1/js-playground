# JavaScript Loops

## 1. Basic Output

Use `console.log()` to print values to the console.

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

**Question:** Can we use a loop to print these numbers instead of writing five separate statements?

---

## 2. For Loop

A `for` loop is useful when you know how many times you want to repeat a task.

### Example 1: Print Numbers from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Output:**
```text
1
2
3
4
5
```

### Example 2: Print Numbers from 5 to 1

```javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

**Output:**
```text
5
4
3
2
1
```

### Example 3: Print Numbers Greater Than 5

```javascript
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i);
    }
}
```

**Output:**
```text
6
7
8
9
10
```

### Example 4: Calculate the Sum of Numbers from 1 to 5

```javascript
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 5:", sum);
```

**Output:**
```text
Sum of numbers from 1 to 5: 15
```

**How it works:**
- `sum = 0` initializes the total.
- `sum += i` adds the current number to the total.
- The loop repeats until `i` exceeds `5`.

---

## 3. While Loop

A `while` loop repeats a block of code as long as its condition is `true`.

### Example 1: Print Numbers from 1 to 5

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

**Output:**
```text
1
2
3
4
5
```

### Example 2: Understanding an Infinite Loop

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);

    // Missing count++ causes an infinite loop.
}
```

**Important:** This loop never ends because `count` remains `1`, so the condition `count <= 5` is always `true`.

To prevent an infinite loop, make sure the condition eventually becomes `false`.

---

## 4. Do-While Loop

A `do-while` loop executes its code block at least once before checking the condition.

### Example: Print Numbers from 1 to 5

```javascript
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);
```

**Output:**
```text
1
2
3
4
5
```

**Key Difference:**
- `while`: Checks the condition before executing the code.
- `do-while`: Executes the code first, then checks the condition.

---

## 5. Nested Loops

A nested loop is a loop inside another loop.

### Example: Print All Combinations of Two Counters

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

**Output:**
```text
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1
i: 2, j: 2
i: 2, j: 3
i: 3, j: 1
i: 3, j: 2
i: 3, j: 3
```

**How it works:**
- The outer loop controls `i`.
- For every iteration of the outer loop, the inner loop runs three times.
- The inner loop completes all its iterations before the outer loop moves to the next value.

---

## 6. Loop Control Statements

JavaScript provides two important statements for controlling loops: `break` and `continue`.

### Example: Using `continue` and `break`

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the current iteration.
    }

    if (i === 8) {
        break; // Stop the loop completely.
    }

    console.log(i);
}
```

**Output:**
```text
1
2
3
4
6
7
```

**How it works:**
- `continue` skips the rest of the current iteration when `i` equals `5`.
- `break` terminates the loop when `i` equals `8`.
- Therefore, neither `5` nor `8` is printed.

---

## 7. Mini-Project: Number Guessing Game

Create a simple game that asks the user to guess a secret number between 1 and 10.

The game continues until the user guesses correctly.

```javascript
const secretNumber = 7;
let guess;

while (guess !== secretNumber) {
    guess = Number(prompt("Guess the secret number (between 1 and 10):"));

    if (guess === secretNumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log("Incorrect guess. Try again!");
    }
}
```

### How It Works

1. Store the secret number in `secretNumber`.
2. Declare the `guess` variable.
3. Use a `while` loop to repeat the guessing process.
4. Use `prompt()` to ask the user for a number.
5. Convert the input to a number using `Number()`.
6. Use an `if-else` statement to check the guess.
7. Stop the loop when the user guesses correctly.

**Example interaction:**

```text
Guess the secret number (between 1 and 10): 3
Incorrect guess. Try again!

Guess the secret number (between 1 and 10): 5
Incorrect guess. Try again!

Guess the secret number (between 1 and 10): 7
Congratulations! You guessed the correct number.
```

**Note:** This example uses `prompt()`, which is available in browsers. Run it in a browser environment to interact with the game.

---

## Summary

| Loop or Statement | Purpose |
|---|---|
| `for` | Repeats code with initialization, a condition, and an update expression. |
| `while` | Repeats code while a condition is true. |
| `do-while` | Executes code at least once, then checks the condition. |
| Nested loops | Run one loop inside another loop. |
| `break` | Terminates the current loop. |
| `continue` | Skips the current iteration and proceeds to the next one. |

