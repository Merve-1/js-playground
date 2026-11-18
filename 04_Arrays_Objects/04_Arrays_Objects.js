// ============================================================
// EXAMPLE 1: STORE STUDENT DATA USING AN ARRAY
// ============================================================

let studentExample1 = ["Ahmed", 18, 85];

console.log(studentExample1[0]); // Ahmed
console.log(studentExample1[1]); // 18
console.log(studentExample1[2]); // 85


// ============================================================
// EXAMPLE 2: CREATE A STUDENT OBJECT
// ============================================================

let studentExample2 = {
    id: 101,
    name: "Ahmed",
    age: 18,
    grade: 85
};

console.log(studentExample2);


// ============================================================
// EXAMPLE 3: ACCESS OBJECT PROPERTIES
// ============================================================

let studentExample3 = {
    id: 101,
    name: "Ahmed",
    age: 18,
    grade: 85
};

console.log(studentExample3.name);
console.log(studentExample3.age);
console.log(studentExample3.grade);


// ============================================================
// TASK 1: CREATE AN EMPLOYEE OBJECT
// ============================================================

let employeeTask1 = {
    id: 201,
    name: "Ahmed",
    age: 25,
    salary: 8500
};

console.log(employeeTask1.id);
console.log(employeeTask1.name);
console.log(employeeTask1.age);
console.log(employeeTask1.salary);


// ============================================================
// EXAMPLE 4: UPDATE STUDENT PROPERTIES
// ============================================================

let studentExample4 = {
    id: 101,
    name: "Ahmed",
    age: 18,
    grade: 85
};

studentExample4.age = 19;
studentExample4.grade = 90;

console.log(studentExample4);


// ============================================================
// TASK 2: UPDATE EMPLOYEE DATA
// ============================================================

let employeeTask2 = {
    id: 202,
    name: "Mona",
    age: 28,
    salary: 9000
};

employeeTask2.age = 29;
employeeTask2.salary = 10000;

console.log(employeeTask2);


// ============================================================
// EXAMPLE 5: CREATE AN ARRAY OF STUDENT OBJECTS
// ============================================================

let studentsExample5 = [
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

console.log(studentsExample5);


// ============================================================
// EXAMPLE 6: ACCESS STUDENTS USING INDEX AND PROPERTIES
// ============================================================

console.log(studentsExample5[0].name);
console.log(studentsExample5[1].grade);
console.log(studentsExample5[2].age);


// ============================================================
// TASK 3: CREATE AN ARRAY OF EMPLOYEES
// ============================================================

let employeesTask3 = [
    { id: 201, name: "Ahmed", age: 25, salary: 8500 },
    { id: 202, name: "Mona", age: 28, salary: 9200 },
    { id: 203, name: "Ali", age: 30, salary: 4500 },
    { id: 204, name: "Sara", age: 26, salary: 7000 }
];

console.log(employeesTask3[0].name);
console.log(employeesTask3[1].salary);
console.log(employeesTask3[3].id);


// ============================================================
// EXAMPLE 7: DISPLAY ALL STUDENTS USING A LOOP
// ============================================================

let studentsExample7 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

for (let i = 0; i < studentsExample7.length; i++) {
    console.log(studentsExample7[i].name);
}


// ============================================================
// EXAMPLE 8: DISPLAY FULL STUDENT INFORMATION
// ============================================================

let studentsExample8 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

for (let i = 0; i < studentsExample8.length; i++) {
    console.log("ID:", studentsExample8[i].id);
    console.log("Name:", studentsExample8[i].name);
    console.log("Age:", studentsExample8[i].age);
    console.log("Grade:", studentsExample8[i].grade);
    console.log("----------------");
}


// ============================================================
// TASK 4: DISPLAY EMPLOYEES WITH THEIR SALARIES
// ============================================================

let employeesTask4 = [
    { id: 201, name: "Ahmed", age: 25, salary: 8500 },
    { id: 202, name: "Mona", age: 28, salary: 9200 },
    { id: 203, name: "Ali", age: 30, salary: 4500 }
];

for (let i = 0; i < employeesTask4.length; i++) {
    console.log(
        employeesTask4[i].name + " - " +
        employeesTask4[i].salary
    );
}


// ============================================================
// EXAMPLE 9: ADD A STUDENT USING push()
// ============================================================

let studentsExample9 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 }
];

studentsExample9.push({
    id: 103,
    name: "Ali",
    age: 18,
    grade: 75
});

console.log(studentsExample9);


// ============================================================
// EXAMPLE 10: ADD MORE THAN ONE STUDENT
// ============================================================

let studentsExample10 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 }
];

studentsExample10.push(
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 75 }
);

console.log(studentsExample10);
console.log("Number of students:", studentsExample10.length);


// ============================================================
// TASK 5: ADD A NEW EMPLOYEE USING push()
// ============================================================

let employeesTask5 = [
    { id: 201, name: "Ahmed", age: 25, salary: 8500 },
    { id: 202, name: "Mona", age: 28, salary: 9200 }
];

employeesTask5.push({
    id: 203,
    name: "Ali",
    age: 30,
    salary: 4500
});

for (let i = 0; i < employeesTask5.length; i++) {
    console.log(employeesTask5[i]);
}


// ============================================================
// EXAMPLE 11: SEARCH FOR A STUDENT BY ID
// ============================================================

let studentsExample11 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

let searchIdExample11 = 102;
let foundStudentExample11 = null;

for (let i = 0; i < studentsExample11.length; i++) {
    if (studentsExample11[i].id === searchIdExample11) {
        foundStudentExample11 = studentsExample11[i];
        break;
    }
}

if (foundStudentExample11 !== null) {
    console.log("Student Found!");
    console.log(foundStudentExample11);
} else {
    console.log("Student Not Found!");
}


// ============================================================
// TASK 6: SEARCH FOR AN EMPLOYEE BY ID
// ============================================================

let employeesTask6 = [
    { id: 101, name: "Ahmed", age: 25, salary: 8500 },
    { id: 102, name: "Mona", age: 28, salary: 9200 },
    { id: 103, name: "Ali", age: 30, salary: 4500 }
];

let searchIdTask6 = 103;
let foundEmployeeTask6 = null;

for (let i = 0; i < employeesTask6.length; i++) {
    if (employeesTask6[i].id === searchIdTask6) {
        foundEmployeeTask6 = employeesTask6[i];
        break;
    }
}

if (foundEmployeeTask6 !== null) {
    console.log("Employee Name:", foundEmployeeTask6.name);
    console.log("Employee Salary:", foundEmployeeTask6.salary);
} else {
    console.log("Employee Not Found");
}


// ============================================================
// EXAMPLE 12: UPDATE STUDENT GRADE BY ID
// ============================================================

let studentsExample12 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

let searchIdExample12 = 103;
let newGradeExample12 = 70;
let foundExample12 = false;

for (let i = 0; i < studentsExample12.length; i++) {
    if (studentsExample12[i].id === searchIdExample12) {
        studentsExample12[i].grade = newGradeExample12;
        foundExample12 = true;
        break;
    }
}

if (foundExample12) {
    console.log("Grade Updated Successfully");
} else {
    console.log("Student Not Found");
}

console.log(studentsExample12);


// ============================================================
// TASK 7: UPDATE AN EMPLOYEE'S SALARY BY ID
// ============================================================

let employeesTask7 = [
    { id: 101, name: "Ahmed", age: 25, salary: 8500 },
    { id: 102, name: "Mona", age: 28, salary: 9200 },
    { id: 103, name: "Ali", age: 30, salary: 4500 }
];

let searchIdTask7 = 102;

for (let i = 0; i < employeesTask7.length; i++) {
    if (employeesTask7[i].id === searchIdTask7) {
        employeesTask7[i].salary = 10000;
        console.log("Updated Employee:", employeesTask7[i]);
        break;
    }
}


// ============================================================
// EXAMPLE 13: DISPLAY PASSED STUDENTS
// ============================================================

let studentsExample13 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 },
    { id: 104, name: "Sara", age: 17, grade: 35 }
];

for (let i = 0; i < studentsExample13.length; i++) {
    if (studentsExample13[i].grade >= 50) {
        console.log(studentsExample13[i].name, "Passed");
    }
}


// ============================================================
// TASK 8: DISPLAY EMPLOYEES WITH SALARIES LESS THAN 5000
// ============================================================

let employeesTask8 = [
    { id: 101, name: "Ahmed", age: 25, salary: 8500 },
    { id: 102, name: "Mona", age: 28, salary: 9200 },
    { id: 103, name: "Ali", age: 30, salary: 4500 },
    { id: 104, name: "Sara", age: 26, salary: 4000 }
];

for (let i = 0; i < employeesTask8.length; i++) {
    if (employeesTask8[i].salary < 5000) {
        console.log(
            employeesTask8[i].name,
            employeesTask8[i].salary
        );
    }
}


// ============================================================
// EXAMPLE 14: FUNCTION TO DISPLAY ALL STUDENTS
// ============================================================

let studentsExample14 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

function displayStudentsExample14(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(
            students[i].id,
            students[i].name,
            students[i].age,
            students[i].grade
        );
    }
}

displayStudentsExample14(studentsExample14);


// ============================================================
// TASK 9: CREATE A FUNCTION TO DISPLAY EMPLOYEES
// ============================================================

let employeesTask9 = [
    { id: 201, name: "Ahmed", age: 25, salary: 8500 },
    { id: 202, name: "Mona", age: 28, salary: 9200 },
    { id: 203, name: "Ali", age: 30, salary: 4500 }
];

function displayEmployeesTask9(employees) {
    for (let i = 0; i < employees.length; i++) {
        console.log(
            employees[i].id,
            employees[i].name,
            employees[i].age,
            employees[i].salary
        );
    }
}

displayEmployeesTask9(employeesTask9);


// ============================================================
// EXAMPLE 15: FUNCTION TO ADD A STUDENT
// ============================================================

let studentsExample15 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 }
];

function addStudentExample15(students, id, name, age, grade) {
    let newStudent = {
        id: id,
        name: name,
        age: age,
        grade: grade
    };

    students.push(newStudent);
}

addStudentExample15(studentsExample15, 103, "Ali", 18, 75);

console.log(studentsExample15);


// ============================================================
// TASK 10: CREATE AN ADD STUDENT FUNCTION
// ============================================================

let employeesTask10 = [
    { id: 201, name: "Ahmed", age: 25, salary: 8500 }
];

function addEmployeeTask10(employees, id, name, age, salary) {
    let newEmployee = {
        id: id,
        name: name,
        age: age,
        salary: salary
    };

    employees.push(newEmployee);
}

addEmployeeTask10(employeesTask10, 202, "Mona", 28, 9200);

console.log(employeesTask10);


// ============================================================
// EXAMPLE 16: FUNCTION TO SEARCH FOR A STUDENT BY ID
// ============================================================

let studentsExample16 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

function findStudentByIdExample16(students, id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }

    return null;
}

let resultExample16 = findStudentByIdExample16(studentsExample16, 102);

if (resultExample16 !== null) {
    console.log("Student Found:", resultExample16.name);
} else {
    console.log("Student Not Found");
}


// ============================================================
// TASK 11: CREATE A FUNCTION TO SEARCH FOR AN EMPLOYEE
// ============================================================

let employeesTask11 = [
    { id: 101, name: "Ahmed", age: 25, salary: 8500 },
    { id: 102, name: "Mona", age: 28, salary: 9200 },
    { id: 103, name: "Ali", age: 30, salary: 4500 }
];

function findEmployeeByIdTask11(employees, id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            return employees[i];
        }
    }

    return null;
}

console.log(findEmployeeByIdTask11(employeesTask11, 101));
console.log(findEmployeeByIdTask11(employeesTask11, 103));
console.log(findEmployeeByIdTask11(employeesTask11, 999));


// ============================================================
// EXAMPLE 17: FUNCTION TO UPDATE STUDENT GRADE
// ============================================================

let studentsExample17 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 }
];

function updateStudentGradeExample17(students, id, newGrade) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].grade = newGrade;
            return true;
        }
    }

    return false;
}

let updatedExample17 = updateStudentGradeExample17(
    studentsExample17,
    103,
    80
);

if (updatedExample17) {
    console.log("Grade Updated!");
} else {
    console.log("Student Not Found!");
}

console.log(studentsExample17);


// ============================================================
// TASK 12: CREATE A FUNCTION TO UPDATE EMPLOYEE SALARY
// ============================================================

let employeesTask12 = [
    { id: 101, name: "Ahmed", age: 25, salary: 8500 },
    { id: 102, name: "Mona", age: 28, salary: 9200 },
    { id: 103, name: "Ali", age: 30, salary: 4500 }
];

function updateEmployeeSalaryTask12(employees, id, newSalary) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].salary = newSalary;
            return true;
        }
    }

    return false;
}

console.log(
    updateEmployeeSalaryTask12(employeesTask12, 102, 10000)
);

console.log(
    updateEmployeeSalaryTask12(employeesTask12, 999, 7000)
);

console.log(employeesTask12);


// ============================================================
// EXAMPLE 18: FUNCTION TO DISPLAY PASSED STUDENTS
// ============================================================

let studentsExample18 = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 },
    { id: 104, name: "Sara", age: 17, grade: 35 }
];

function displayPassedStudentsExample18(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 50) {
            console.log(
                students[i].name,
                students[i].grade
            );
        }
    }
}

displayPassedStudentsExample18(studentsExample18);


// ============================================================
// FINAL MINI-PROJECT: SCHOOL STUDENT SYSTEM
// STEP 1: CREATE THE STUDENTS ARRAY
// ============================================================

let schoolStudents = [
    { id: 101, name: "Ahmed", age: 18, grade: 85 },
    { id: 102, name: "Mona", age: 19, grade: 92 },
    { id: 103, name: "Ali", age: 18, grade: 45 },
    { id: 104, name: "Sara", age: 17, grade: 70 }
];


// ============================================================
// PROJECT STEP 2: DISPLAY ALL STUDENTS
// ============================================================

function displaySchoolStudents(students) {
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

displaySchoolStudents(schoolStudents);


// ============================================================
// PROJECT STEP 3: ADD A STUDENT
// ============================================================

function addSchoolStudent(students, id, name, age, grade) {
    students.push({
        id: id,
        name: name,
        age: age,
        grade: grade
    });

    console.log("Student Added Successfully!");
}

addSchoolStudent(schoolStudents, 105, "Youssef", 18, 88);

displaySchoolStudents(schoolStudents);


// ============================================================
// PROJECT STEP 4: SEARCH FOR A STUDENT BY ID
// ============================================================

function findSchoolStudentById(students, id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }

    return null;
}

let schoolStudentResult = findSchoolStudentById(schoolStudents, 102);

if (schoolStudentResult !== null) {
    console.log("Student Found:");
    console.log(schoolStudentResult);
} else {
    console.log("Student Not Found!");
}


// ============================================================
// PROJECT STEP 5: UPDATE A STUDENT'S GRADE
// ============================================================

function updateSchoolStudentGrade(students, id, newGrade) {
    let student = findSchoolStudentById(students, id);

    if (student !== null) {
        student.grade = newGrade;

        console.log("Grade Updated Successfully!");

        return true;
    }

    console.log("Student Not Found!");

    return false;
}

updateSchoolStudentGrade(schoolStudents, 103, 75);

displaySchoolStudents(schoolStudents);


// ============================================================
// PROJECT STEP 6: DISPLAY PASSED STUDENTS
// ============================================================

function displaySchoolPassedStudents(students) {
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

displaySchoolPassedStudents(schoolStudents);


// ============================================================
// PROJECT STEP 7: TEST THE COMPLETE SCHOOL STUDENT SYSTEM
// ============================================================

console.log("===== TEST THE COMPLETE SYSTEM =====");

// Display all students
displaySchoolStudents(schoolStudents);

// Add a new student
addSchoolStudent(schoolStudents, 106, "Nour", 17, 95);

// Search for the new student
let schoolTestResult = findSchoolStudentById(schoolStudents, 106);

if (schoolTestResult !== null) {
    console.log("Found:", schoolTestResult.name);
} else {
    console.log("Student Not Found!");
}

updateSchoolStudentGrade(schoolStudents, 103, 80);

displaySchoolPassedStudents(schoolStudents);


