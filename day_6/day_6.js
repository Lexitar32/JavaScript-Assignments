// Day 6 Exercise
// DO-WHILE
// let name = prompt('Enter your name');

// do {
//   name = prompt('Name is required! \n Enter your name');
// } while (name.length <= 1) {
//   alert(name);
// }

// FUNCTIONS
// function sayHello(name, title) {
//   alert(`Hello! Good morning ${name}, ${title}`);
// }

// myName = prompt('Enter your name');
// myTitle = prompt('Enter your title');

// sayHello(myTitle, myName);

// Build a calculator
// Declare both inputs
let value1 = parseInt(prompt('Enter the first value'));
let value2 = parseInt(prompt('Enter the second value'));

let myOperations = parseInt(prompt(`Select the operation \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division`));

const operation = function (a, b) {
  if (myOperations === 1) {
    alert(`${value1} + ${value2} is ${value1 + value2}`);
  } else if (myOperations === 2) {
    alert(`${value1} - ${value2} is ${value1 - value2}`);
  } else if (myOperations === 3) {
    alert(`${value1} * ${value2} is ${value1 * value2}`);
  } else if (myOperations === 4) {
    alert(`${value1} / ${value2} is ${value1 / value2}`);
  }

  alert("Thanks for using Olamilekan's calculator");
}

operation(`${value1 , value2}`);