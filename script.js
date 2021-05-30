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

// 6. == vs ===
// == converts the operand to the same type and then compares them

// === depicts strict equality check. It checks for same type and same content

function equalityStrict() {
  let a = null;
  let b;
  const c = undefined;
  var d = NaN;
  const e = '';
  console.log(a == b); //true;
  console.log(a === b); //false;
  console.log(typeof a); //object
  console.log(typeof b); //undefined;
  console.log(c == d); //false;
  console.log(c === d); //false;
  console.log(typeof c); //undefined
  console.log(typeof d); // number;
  console.log(typeof e); // string;
  console.log(a == c); // true;
  console.log(a === c); // false;
  console.log(a == d); //false;
  console.log(a === d); //false;
}

// equalityStrict();
// Expectedconsole.log(a == b);
// true;
// false;
// object
// undefined;
// false;
// false;
// undefined
// number;
// string;
// true;
// false;
// false;
// false;

// 7. ✔️ this
// this refers to the object that the function belongs to, in simpler terms, points to the owner of the function call (left of the dot)

// Its value depends on how it is invoked.

// ❓ Implicit vs Explicit Binding
// Implicit binding is when you invoke a function in an object using dot notation.

const myObj = {
  name: 'Evan',
  course: 'JavaScript',
  displayStatus: function() {
    console.log(`${this.name} is learning ${this.course}.`);
  }
};

const yourObj = {
  name: 'Benzima',
  course: 'Python'
};

// myObj.displayStatus();
// Expected: Evan is learning JavaScript.

// myObj.displayStatus.call(yourObj);
// Expected: Benzima is learning Python.
// Consider displayStatus() and displayStatus

// 8. Local and session storage
// localStorage: Data persists even after closing your session

// sessionStorage: Data is lost when your session is over, ie, on closing the browser on the tab

//To save data in local storage;
function saveLocally(key, value) {
  localStorage.setItem(key, value);
}

//to retrieve saved data;
function getStorageItem(key) {
  let item = localStorage.getItem(key);
  return item;
}

//to remove data from storage;
function removeStoredItem(key) {
  localStorage.removeItem(key);
}

// saveLocally("name", "Jonathan"); // Expected to be saved on local storage : key: "name", value = "Jonathan";
// console.log(getStorageItem("name")); //Expected: Jonathan;

// removeStoredItem("name"); // Expected to be removed on local storage : key: "name", value = "Jonathan";

// console.log(getStorageItem("name")); //Expected: null;


// 9. ⏱️ Timers - setTimeout, setInterval, clearInterval

// setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

// setInterval() does the same for specified intervals.

// Finally, clearInterval() is used to stop the timer.

function timers() {
  console.log("Hello");
  setTimeout(()=>{
    console.log("reader");
  }, 1000)
  console.log("lovely");
}

timers();
// Expected: 
// Hello
// lovely
// reader

// 10. Tickier timeout

// when setTimeout comes again into the picture, the entire loop has run and value of i has become 6

// var is globally scoped but let is locally scoped so for let a new i is created for every iteration.

function tickierTimer() {
  for(var i=0; i<=5; i++){
  setTimeout(function(){
    console.log(i);
  }, i*1000)
}
}

tickierTimer();
// Expected: 
// 6
// 6
// 6
// 6
// 6

// but if you use let instead of var, expected:
// 0
// 1
// 2
// 3
// 4
// 5
