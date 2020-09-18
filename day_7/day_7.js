// Day 7
// SCOPING
// let name = 'Olamilekan'; // Global Variable
// let org = 'TIIDELab'; // Global Variable

// function sayHello() {
//   alert(`Hello Mr. ${name}, welcome to ${org}`);
// }

// sayHello();

// RECURSION
// function greet() {
//   let myName = prompt('Enter your full name');
//   if (!myName) {
//     greet();
//   } else {
//     alert(`Good day ${myName}`);
//   }
// }

// greet();

// RETURN VALUE
// function myCal(val1, val2) {
//   return val1 + val2;
// }

// let result = myCal(5, 8);
// alert(result);
let val1 = parseInt(prompt('Enter the first value'));
let val2 = parseInt(prompt('Enter the second value'));

const myCal = (a, b) => {
  if (val1 === val2) {
    return val1 + val2;
  } else if (!val1 && !val2) {
    myCal();
  }
}

alert(myCal(`${val1}, ${val2}`));