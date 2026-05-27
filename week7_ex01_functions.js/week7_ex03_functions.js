
let globalCount = 0;
console.log("globalCount:", globalCount);



function demonstrateLocalScope() {
  let localCount = 100;
  console.log("Inside function - localCount:", localCount);
  console.log("Inside function - globalCount:", globalCount);
}

demonstrateLocalScope();



function modifyVariables() {
  globalCount = globalCount + 1;
  let localCount = 50;
  localCount = localCount + 1;
  console.log("globalCount inside function:", globalCount);
  console.log("localCount inside function:", localCount);
}

modifyVariables();
console.log("globalCount outside function:", globalCount);



function Student(firstName, lastName, age, grade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = grade;
  this.greet = function() {
    console.log("Hi, I am " + this.firstName + " and I am in grade " + this.grade);
  };
}



let student1 = new Student("Saabir", "Moefar", 19, "A");
let student2 = new Student("Malcom", "X", 22, "B");
let student3 = new Student("Patrice", "lamuba", 20, "A+");

console.log(student1);
console.log(student2.firstName);
student3.greet();



let school = {
  name: "Life Choices Academy",
  location: {
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa"
  },
  course: {
    title: "Frontend Web Development",
    duration: "6 months",
    currentWeek: 7
  },
  isOnline: false
};

console.log(school.name);
console.log(school.location.city);
console.log(school.course.title);