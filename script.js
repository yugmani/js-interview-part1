//1. Return the words with more than 6 letters
const words = ['react', 'script', 'interview', 'style', 'javascript'];

// using higher order function
const ans = words.filter(word => word.length > 6);

// console.log(ans); //Expected ['interview', 'javascript']

//using for.. loop
const newArray = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArray.push(words[i]);
  }
}

// console.log(newArray);

// 2. Difference between map and forEach

// map returns a new Array, forEach doesn't
// method chaining can be done in map but not forEach
// map and forEach don't mutate the original array

// // Return a new array where even numbers are multiplied by 2
let array1 = [1, 2, 3, 4, 5, 6, 7];

// using map function
function returnEven(arr) {
  let data = arr.map(num => (num % 2 === 0 ? num * 2 : num * 1));
  return data;
}

// console.log(returnEven(array1)); // Expected [1,  4, 3, 8, 5, 12, 7]

//using forEach
function consoleEven(arr) {
  let data = arr.forEach(num => (num % 2 === 0 ? num * 2 : num * 1));
  return data;
}

// console.log(consoleEven(array1)); // undefined;

// 3. we are converting the new array back to original
function returnOriginal(arr) {
  let data = arr
    .map(num => (num % 2 === 0 ? num * 2 : num * 1))
    .map(item => (item % 2 === 0 ? item / 2 : item));
  return data;
}

// console.log(returnOriginal(array1)); // Expected [1, 2, 3, 4, 5, 6, 7];

// 4. ✔️ var, let and const: ❓ Difference between, scope

function varLetConst() {
  var a = 3;
  var a = 4;
  let b = 3;
  // let b = 4;
  const c = 5;
  // const c = 6;
  // console.log(a); // 4
  // console.log(b); // TypeError: Cannot read property
  // console.log(c); // TypeError: Cannot read property
}

// varLetConst();
// Expected
// 4
// Syntax TypeError
// Syntax TypeError

// 5. Hoisting
// JavaScript's default behavior of moving declarations to the top.

// function and var declarations are hoisted

// Note: var declaration is hoisted - not the value
function hoistingVar() {
  console.log(pen); //Expected undefined;
  var pen = 10;
}

// hoistingVar(); //Expected undefined;

// here is how runtime sees this:
function sameHoistingVar() {
  var hen;
  console.log(hen); //Expected undefined;
  hen = 9;
  console.log(hen); //Expected 9;
}

// sameHoistingVar();
// Expected
// undefined
// 9
