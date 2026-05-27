function sum(n) {
    if (typeof n !== 'number'|| n % 1 !== 0) {
        return "The value passed is not a number ";
    }
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}       

// Test
console.log(sum(5));        // 0+1+2+3+4+5 = 15
console.log(sum(3.5));      // "The value passed is not a number"
console.log(sum("hello"));  // "The value passed is not a number"


function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test
console.log(factorial(5));  // 1*2*3*4*5 = 120
console.log(factorial(3));  // 1*2*3 = 6
console.log(factorial(0));  // 1


function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return a - b;
    } else if (arguments.length === 3) {
    return a + b + c;
  } else if (arguments.length === 4) {
    return (a + b) / (c + d);
  }
}

// Test
console.log(funkyMath(3, 10));        // 10 - 3 = 7
console.log(funkyMath(1, 2, 3));      // 1 + 2 + 3 = 6
console.log(funkyMath(8, 2, 3, 5));   // (8+2) / (3+5) = 1.25


let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
    numbers.splice(i, 1);
    i--; 
  }
}

// Bonus: sort odd numbers smallest to biggest
oddNumbers.sort(function(a, b) { return a - b; });

console.log("Remaining array:", numbers);    // [2, 6, 44]
console.log("Odd numbers:", oddNumbers);     // [1, 33, 45]


let me = {
  firstName: "Saabir",
  lastName: "Moefar",
  age: 19,
  favouriteColour: "navy blue",
  dreamCar: "PORSCHE 911 GT3 RS",
};

const addFavouriteFood = "BRISKET RIB BURGER";

delete me.age;

console.log(me);
