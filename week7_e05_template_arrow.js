
let multiline = `Dear Saabir,

Welcome to Week 7 of your JavaScript journey.
You are learning template literals today.
Keep going - you are doing great!

Kind regards,
LCA`;

console.log(multiline);



function generateStudentCard(name, course, grade) {
  return `
    <div class="student-card">
      <h2>Student: ${name}</h2>
      <p>Course: ${course}</p>
      <p>Grade: ${grade}</p>
      <p>Status: ${grade >= 50 ? "Passed" : "Failed"}</p>
    </div>
  `;
}

console.log(generateStudentCard("Saabir", "Frontend Web Development", 85));
console.log(generateStudentCard("Amaarah", "Frontend Web Development", 40));




// Add two numbers
const add = (a, b) => a + b;

// Square a number
const square = (n) => n * n;

// Check if adult
const isAdult = (age) => age >= 18;

console.log(add(3, 4));       // 7
console.log(square(5));       // 25
console.log(isAdult(25));     // true
console.log(isAdult(15));     // false




let numbers = [1, 2, 3, 4, 5];
let scores = [45, 78, 33, 90, 55, 20];
let students = ["Sabah", "Aisha", "Omar"];

// map - double every number
let doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// filter - only passing scores
let passed = scores.filter((score) => score >= 50);
console.log("Passed scores:", passed);

// forEach - greet each student
students.forEach((student) => console.log(`Welcome, ${student}!`));
