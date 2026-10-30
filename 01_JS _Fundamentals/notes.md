# JavaScript Beginner Notes

## 1. Python vs JavaScript

| Concept | Python | JavaScript |
|---|---|---|
| Print output | `print("Hello")` | `console.log("Hello")` |
| User input | `input("Name: ")` | `prompt("Name: ")` |
| True | `True` | `true` |
| False | `False` | `false` |
| Else if | `elif` | `else if` |
| AND | `and` | `&&` |
| OR | `or` | `||` |
| NOT | `not` | `!` |

## 2. Variables

### Python

```python
name = "Ahmed"
age = 20
```

### JavaScript

```javascript
let name = "Ahmed";
let age = 20;

const country = "Egypt";

console.log(name);
console.log(age);
console.log(country);
```

- `let`: Use when a variable may be reassigned.
- `const`: Use when a variable should not be reassigned.
- `var`: An older way to declare variables; prefer `let` and `const` in modern JavaScript.
- Semicolons (`;`) are commonly used at the end of JavaScript statements.

## 3. Data Types

### String: Text

```javascript
let studentName = "Maged";
```

### Number: Integers and Decimals

```javascript
let age = 21;
let price = 99.5;
```

JavaScript uses the `number` type for both integers and ordinary decimal numbers.

### Boolean: True or False

```javascript
let isStudent = true;
let isGraduated = false;
```

### Check a Data Type

```javascript
console.log(typeof studentName); // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
```

## 4. User Input

### Python

```python
name = input("Enter your name: ")
print("Welcome, " + name)
```

### JavaScript

```javascript
let userName = prompt("Enter your name:");

console.log("Welcome, " + userName);
```

**Important:** `prompt()` returns a string (or `null` if cancelled). Convert numeric input using `Number()`.

```javascript
let age = Number(prompt("Enter your age:"));

console.log(age + 1);
```

## 5. Arithmetic Operators

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `5 + 3` → `8` |
| `-` | Subtraction | `5 - 3` → `2` |
| `*` | Multiplication | `5 * 3` → `15` |
| `/` | Division | `6 / 3` → `2` |
| `%` | Remainder (modulo) | `5 % 2` → `1` |
| `**` | Exponentiation | `2 ** 3` → `8` |

## 6. Comparison Operators

| Operator | Meaning | Example |
|---|---|---|
| `>` | Greater than | `5 > 3` → `true` |
| `<` | Less than | `5 < 3` → `false` |
| `>=` | Greater than or equal to | `5 >= 5` → `true` |
| `<=` | Less than or equal to | `3 <= 5` → `true` |
| `===` | Strict equality | `5 === "5"` → `false` |
| `!==` | Strict inequality | `5 !== "5"` → `true` |
| `==` | Loose equality | `5 == "5"` → `true` |
| `!=` | Loose inequality | `5 != "5"` → `false` |

**Tip:** Prefer `===` and `!==` because they compare values without automatically converting between different types.

## 7. Logical Operators

| Operator | Meaning | Example |
|---|---|---|
| `&&` | AND: both conditions must be true | `age >= 18 && hasID` |
| `\|\|` | OR: at least one condition must be true | `age >= 18 \|\| hasPermission` |
| `!` | NOT: reverses a Boolean value | `!true` → `false` |

## 8. Conditions

### Python

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

### JavaScript

```javascript
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Multiple Conditions

```javascript
let grade = Number(prompt("Enter your grade:"));

if (grade < 0 || grade > 100) {
    console.log("Invalid grade");
} else if (grade >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}
```

## 9. Login Project

```javascript
const correctUsername = "admin";
const correctPassword = "1234";

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (
    username === correctUsername &&
    password === correctPassword
) {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}
```

### Test Cases

| Username | Password | Expected Result |
|---|---|---|
| `admin` | `1234` | Login successful |
| `admin` | `0000` | Invalid credentials |
| `user` | `1234` | Invalid credentials |
| `admin` | `1234` | Login successful |

