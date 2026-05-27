function validateUserInput(USERNAME, AGE ){
    try {
        if (typeof USERNAME !== 'string' || USERNAME.length === 0 ) {
            throw new Error("username: must be a non-empty string.");
        }
        if (typeof AGE !== 'number' || AGE <  0 || AGE > 120) {
            throw new Error("age must be a number between 0 and 120");
        }
    } catch (error) {
        console.log(" validation failed:", error.message);

    }
}
validateUserInput("Saabir", 25);
validateUserInput("", 25);
validateUserInput("Saabir", -5);
validateUserInput(123, 25);


function demonstrateErrorTypes(value) {
  try {
    if (typeof value !== "number") {
      throw new TypeError("Expected a number but got: " + typeof value);
    }
    if (value < 1 || value > 100) {
      throw new RangeError("Number must be between 1 and 100");
    }
    console.log("Value is fine:", value);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("TYPE ERROR caught:", error.message);
    } else if (error instanceof RangeError) {
      console.log("RANGE ERROR caught:", error.message);
    } else {
      console.log("GENERAL ERROR caught:", error.message);
    }
  }
}

demonstrateErrorTypes(50);
demonstrateErrorTypes("not a number");
demonstrateErrorTypes(150);


function capitalise(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "Please provide a valid string";
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function countWords(str) {
  if (typeof str !== "string" || str.trim().length === 0) {
    return 0;
  }
  return str.trim().split(" ").length;
}

function reverseString(str) {
  if (typeof str !== "string") {
    return "Please provide a valid string";
  }
  return str.split("").reverse().join("");
}

console.log(capitalise("Saabir"));
console.log(countWords("coding is good for you "));
console.log(reverseString("hello"));


function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please provide a non-empty array";
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function calculateAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please provide a non-empty array";
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total / arr.length;
}

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide a valid array";
  }
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(findMax([3, 7, 1, 9, 4]));
console.log(calculateAverage([10, 20, 30]));
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));