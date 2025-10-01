const names = ["Mayank", "John", "Doe"];

// names.push("Jane"); // append to the end

// // const index = names.findIndex(function(item) {
// //     return item === "John";
// // });

// const index = names.findIndex((item) => item === "John");

// console.log(names);
// console.log(index);

// const newNames = names.filter((item) => {
//     return item != "John";
// });

// console.log(newNames);

// const ages = [10, 20, 30, 40];

// const eligble = ages.filter((item) => {
//   return item > 12;
// })

// console.log(eligble);

// // map
// const fullNames = names.map((name, index) => {
//   return (index === 1) ? name + " Wick" : name + " Smith";
// });

// console.log(fullNames);

// =============== LOOPS =================

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names.forEach((item) => {
//   console.log(item);
// });

// ============== Destructuring ===============

const userName = ["Mayank", "Emily"];
const firstName = userName[0];
const lastName = userName[1];

console.log(firstName);
console.log(lastName);

// array destructuring
const [fName, lName] = ["Mayank", "Emily"];

console.log(fName);
console.log(lName);

// object destructuring
const userData =  {
  name: "Mayank",
  age: 21,
};

const userName1 = userData.name, userAge = userData.age;

console.log(userName1);
console.log(userAge);

// can use this 
const {name, age} = userData;

console.log(name);
console.log(age);

// ============== Spread Operator ==================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [arr1, arr2]; // [[1,2,3], [4,5,6]]
console.log(merged);

// to solve above issue we can use spread operator
// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// ========= Set Interval and Timeout ==========

const intervalId = setInterval(() => {
  console.log("Hello from interval");
}, 2000);

clearInterval(intervalId);

const timeoutId = setTimeout(() => {
  console.log("Hello from timeout");
}, 3000);

clearTimeout(timeoutId);

// ============ Asynchronous Programming =============

// Synchronous Code
// console.log("Start");
// console.log("hi");
// console.log("end");

// // Asynchronous Code
// console.log("Start");

// setTimeout(() => {
//   console.log("hi");
// }, 1000);

// console.log("end");

// // Callback

// function greeting(error, name) {
//   if(error) {
//     alert("please provide a name");
//   } else {
//     alert("Hello " + name);
//   }
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name === null, name)
//   // if(name === null) {
//   //   callback(true, null);
//   // } else {
//   //   callback(false, name);
//   // }
// }

// processUserInput(greeting);