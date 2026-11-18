# **Session 4: Student System: Arrays & Objects**

## **1. Learning Objectives**

By the end of this session, students will be able to:

- Understand the difference between an Array, an Object, and an Array of Objects.
- Store student information using named properties.
- Access and update object properties using dot notation.
- Add new students using `push()`.
- Loop through an array of student objects.
- Search for a student using an `id`.
- Create functions to manage student data.
- Build a simple School Student System using JavaScript.

## **2. Introduction: Why Do We Need Objects?**

> If we store a student's name, age, and grade in an array, how do we know what each value represents?

### **Example 1: Store Student Data Using an Array**

```
// Example 1: Store Student Data Using an Array

let student = ["Ahmed", 18, 85];

console.log(student[0]); // Ahmed
console.log(student[1]); // 18
console.log(student[2]); // 85
```

Explain:

- `student[0]` represents the name.
- `student[1]` represents the age.
- `student[2]` represents the grade.

But the problem is that we need to remember what each index means.

What if we have many students and more information? The code becomes difficult to understand.

## **3. Arrays vs Objects vs Array of Objects**

**Array: a list of values**

```
let names = ["Ahmed", "Mona", "Ali"];
```

Use an array when you want to store a list of values.

**Object: one record with named properties**

```
let student = {
    name: "Ahmed",
    age: 18,
    grade: 85
};
```

Use an object when you want to store related information about one entity.

**Array of Objects: multiple records**

```
let students = [
    { name: "Ahmed", age: 18, grade: 85 },
    { name: "Mona", age: 19, grade: 92 }
];
```

Use an array of objects to store multiple records, such as students.

### **Comparison**

| Array              | Object                  | Array of Objects                                    |
| ------------------ | ----------------------- | --------------------------------------------------- |
| Stores a list      | Stores named properties | Stores multiple records                             |
| Access using index | Access using property   | Index to access record, property to access its data |
| `names[0]`         | `student.name`          | `students[0].name`                                  |

## **4. Object Basics**

### **Example 2: Create an Object with Named Properties**

```
// Example 2: Create a Student Object

let student = {
    id: 101,
    name: "Ahmed",
    age: 18,
    grade: 85
};

console.log(student);
```

Explain each part:

- `id` → student ID
- `name` → student name
- `age` → student age
- `grade` → student grade

Unlike an array, we don't need to remember the position of each value.

### **Example 3: Access Object Properties Using Dot Notation**

```
// Example 3: Access Object Properties

let student = {
    id: 101,
    name: "Ahmed",
    age: 18,
    grade: 85
};

console.log(student.name);
console.log(student.age);
console.log(student.grade);
```

Expected output:

```
Ahmed
18
85
```

### **Task 1: Create a Employee Object**

Create an object called `employee` containing:

- `id`
- `name`
- `age`
- `salary`

Print each property separately.

## **5. Updating Object Properties**

### **Example 4: Update Student Information**

```
// Example 4: Update Student Properties

let student = {
    id: 101,
    name: "Ahmed",
    age: 18,
    grade: 85
};

student.age = 19;
student.grade = 90;

console.log(student);
```

Explain that objects can be updated after creation.

### **Task 2: Update Employee Data**

Create a employee object and:

- Change the employee's age.
- Change the employee's salary.
- Print the updated information.

## **6. Array of Objects**

Now we want to store more than one student.

Instead of creating a separate variable for every student, we create an array that contains student objects.

### **Example 5: Create an Array of Student Objects**

```
// Example 5: Create an Array of Student Objects

let students = [
    {
        id: 101,
        name: "Ahmed",
        age: 18,
        grade: 85
    },
    {
        id: 102,
        name: "Mona",
        age: 19,
        grade: 92
    },
    {
        id: 103,
        name: "Ali",
        age: 18,
        grade: 45
    }
];

console.log(students);
```

### **How to access the data?**

```
// Example 6: Access Students Using Index and Properties

console.log(students[0].name);
console.log(students[1].grade);
console.log(students[2].age);
```

Expected output:

```
Ahmed
92
18
```

### **Important: Index vs ID**

| Index                     | ID                          |
| ------------------------- | --------------------------- |
| Array position            | Student's unique identifier |
| Starts from `0`           | Can start from any number   |
| `students[0]`             | `students[0].id`            |
| Used to access a position | Used to identify a student  |

**Remember**

`students[0]` means the first student in the array.

`students[0].id` means the ID of the first student.

`students[0].name` means the name of the first student.

### **Task 3: Create an Array of Objects**

Create an array containing 4 employees. Each employee should have:

- `id`
- `name`
- `age`
- `salary`

Then:

1. Print the first employee's name.
2. Print the second employee's salary.
3. Print the fourth employee's ID.


## **7. Loop Through an Array of Objects**

We already learned how to loop through arrays in Session 3.

Today, we use loops to display data from objects.

### **Example 7: Display All Students**

```
// Example 7: Display All Students Using a Loop

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
```

Expected output:

```
Ahmed
Mona
Ali
```

### **Example 8: Display Full Student Information**

```
// Example 8: Display Student Details

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

for (let i = 0; i < students.length; i++) {
    console.log("ID:", students[i].id);
    console.log("Name:", students[i].name);
    console.log("Age:", students[i].age);
    console.log("Grade:", students[i].grade);
    console.log("----------------");
}
```

### **Task 4: Display Employee with Their Salaries**

Loop through the employees and print:

```
Ahmed - 8500
Mona - 9200
Ali - 4500
```


## **8. Adding Students Using&#x20;**`push()`

We can add a new object to an array using `push()`.

### **Example 9: Add a New Student**

```
// Example 9: Add a Student Using push()

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 }
];

students.push({
    id: 103,
    name: "Ali",
    age: 18,
    grade: 75
});

console.log(students);
```

### **Example 10: Add Multiple Students**

```
// Example 10: Add More Than One Student

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 }
];

students.push(
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 75 }
);

console.log(students);
console.log("Number of students:", students.length);
```

### **Task 5: Add a New Smployee**

Start with 2 employees.

Add a third employee using `push()` and display all employees using a loop.



## **9. Search for a Student Using ID**

This is an important concept: we don't search using the student's array index. We search using their ID.

### **Example 11: Search for a Student**

```
// Example 11: Search for a Student by ID

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

let searchId = 102;
let foundStudent = null;

for (let i = 0; i < students.length; i++) {
    if (students[i].id === searchId) {
        foundStudent = students[i];
        break;
    }
}

if (foundStudent !== null) {
    console.log("Student Found!");
    console.log(foundStudent);
} else {
    console.log("Student Not Found!");
}
```

### **Explain the logic**

1. We have an ID that we want to find.
2. We loop through all students.
3. We check whether each student's `id` matches the search ID.
4. If we find the student, we save the object in `foundStudent`.
5. `break` stops the loop once the student is found.
6. If no student is found, the value remains `null`.

### **Task 6: Search for an Employee**

Search for employee ID `103`.

If the employee exists, print their name and salary. Otherwise, print `"Employee Not Found"`.


## **10. Update Student Grade by ID**

### **Example 12: Find and Update a Student's Grade**

```
// Example 12: Update Student Grade by ID

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

let searchId = 103;
let newGrade = 70;
let found = false;

for (let i = 0; i < students.length; i++) {
    if (students[i].id === searchId) {
        students[i].grade = newGrade;
        found = true;
        break;
    }
}

if (found) {
    console.log("Grade Updated Successfully");
} else {
    console.log("Student Not Found");
}

console.log(students);
```

### **Task 7: Update a Employee's Salary**

Find employee ID `102` and change their salary to `10000`.

Print the updated employee.


## **11. Display Passed Students**

A student passes if their grade is greater than or equal to 50.

### **Example 13: Display Passed Students**

```
// Example 13: Display Passed Students

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 },
    { id: 104, name: "Sara", age: 17, grade: 35 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 50) {
        console.log(students[i].name, "Passed");
    }
}
```

Expected output:

```
Ahmed Passed
Mona Passed
```

### **Task 8: Display Employees with salary less than 5000**

Display only employees whose salary are less than 5000.


## **12. Functions for Student Data Management**

Now we combine the concepts from Session 3 (functions) and today's lesson (objects).

Instead of repeating the same code, we create functions that manage the student array.

### **Example 14: Function to Display All Students**

```
// Example 14: Function to Display All Students

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

function displayStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(
            students[i].id,
            students[i].name,
            students[i].age,
            students[i].grade
        );
    }
}

displayStudents(students);
```

### **Task 9: Create a Function to Display Employees**

Create a function called `displayEmployees` that receives the array and displays all employees.

### **Example 15: Function to Add a Student**

```
// Example 15: Function to Add a Student

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 }
];

function addStudent(students, id, name, age, grade) {
    let newStudent = {
        id: id,
        name: name,
        age: age,
        grade: grade
    };

    students.push(newStudent);
}

addStudent(students, 103, "Ali", 18, 75);

console.log(students);
```

### **Task 10: Create an Add employee Function**

Create a function called `addEmployee` that:

- Receives the employees array.
- Receives employee information.
- Creates a new object.
- Adds the employee to the array using `push()`.

### **Example 16: Function to Search by ID**

```
// Example 16: Function to Search for a Student by ID

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

function findStudentById(students, id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }

    return null;
}

let result = findStudentById(students, 102);

if (result !== null) {
    console.log("Student Found:", result.name);
} else {
    console.log("Student Not Found");
}
```

### **Why do we use&#x20;**`return`**?**

The function returns the entire student object if it finds a match.

If the ID doesn't exist, it returns `null`.

This allows us to reuse the function for different IDs.

### **Task 11: Search Function**

Create `findEmployeeById(employees, id)`.

Test it using:

- ID `101`
- ID `103`
- ID `999`

### **Example 17: Function to Update a Student Grade**

```
// Example 17: Function to Update Student Grade

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

function updateStudentGrade(students, id, newGrade) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].grade = newGrade;
            return true;
        }
    }

    return false;
}

let updated = updateStudentGrade(students, 103, 80);

if (updated) {
    console.log("Grade Updated!");
} else {
    console.log("Student Not Found!");
}

console.log(students);
```

### **Task 12: Update Function**

Create and test a function that updates a employee's salary by ID.

The function should return:

- `true` if the update succeeds.
- `false` if the employee doesn't exist.

### **Example 18: Function to Display Passed Students**

```
// Example 18: Function to Display Passed Students

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 },
    { id: 104, name: "Sara", age: 17, grade: 35 }
];

function displayPassedStudents(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 50) {
            console.log(students[i].name, students[i].grade);
        }
    }
}

displayPassedStudents(students);
```

# **13. Final Mini-Project: School Student System**

## **Project Goal**

Build a School Student System in the Console that allows the user to:

1. Display all students.
2. Add a new student.
3. Search for a student by ID.
4. Update a student's grade.
5. Display all passed students.

### **Project Requirements**

Students must use:

- Array
- Objects
- Array of Objects
- Dot notation
- `push()`
- `for` loop
- `if` conditions
- Functions
- `return`

## **Step 1: Create the Students Data**

```
// Project Step 1: Create the Students Array

let students = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 },
    { id: 104, name: "Sara", age: 17, grade: 70 }
];
```

## **Step 2: Display All Students**

```
// Project Step 2: Display All Students

function displayStudents(students) {
    console.log("===== STUDENTS LIST =====");

    for (let i = 0; i < students.length; i++) {
        console.log(
            "ID:", students[i].id,
            "| Name:", students[i].name,
            "| Age:", students[i].age,
            "| Grade:", students[i].grade
        );
    }
}

displayStudents(students);
```

## **Step 3: Add a Student**

```
// Project Step 3: Add a Student

function addStudent(students, id, name, age, grade) {
    students.push({
        id: id,
        name: name,
        age: age,
        grade: grade
    });

    console.log("Student Added Successfully!");
}

addStudent(students, 105, "Youssef", 18, 88);

displayStudents(students);
```

## **Step 4: Search for a Student by ID**

```
// Project Step 4: Search for a Student by ID

function findStudentById(students, id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }

    return null;
}

let studentResult = findStudentById(students, 102);

if (studentResult !== null) {
    console.log("Student Found:");
    console.log(studentResult);
} else {
    console.log("Student Not Found!");
}
```

## **Step 5: Update a Student's Grade**

```
// Project Step 5: Update Student Grade

function updateStudentGrade(students, id, newGrade) {
    let student = findStudentById(students, id);

    if (student !== null) {
        student.grade = newGrade;
        console.log("Grade Updated Successfully!");
        return true;
    }

    console.log("Student Not Found!");
    return false;
}

updateStudentGrade(students, 103, 75);

displayStudents(students);
```

Notice that we reuse `findStudentById()` instead of writing the search loop again.

## **Step 6: Display Passed Students**

```
// Project Step 6: Display Passed Students

function displayPassedStudents(students) {
    console.log("===== PASSED STUDENTS =====");

    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 50) {
            console.log(
                students[i].name,
                "- Grade:",
                students[i].grade
            );
        }
    }
}

displayPassedStudents(students);
```

## **Step 7: Test the Entire System**

```
// Project Step 7: Test the School Student System

displayStudents(students);

addStudent(students, 106, "Nour", 17, 95);

let result = findStudentById(students, 106);

if (result !== null) {
    console.log("Found:", result.name);
}

updateStudentGrade(students, 103, 80);

displayPassedStudents(students);
```
