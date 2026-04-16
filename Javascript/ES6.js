// ES6 features
// => let , const , var
// => arrow function
// => hoisting
// => for..of for..in (object.key(),object.value(),object.entries())
// => spread operator, rest operator
// => template literal
// => default parameters
// => destructuring
// => class syntax
// => import and export
// => promises
// => enhanced object literal

// for..of for..in
// for...of (values)
// Used for arrays / iterable values

// let fruits1 = ["apple","mango","orange"];
// for(let a of fruits1){
//     console.log(a);
// }

//  for...in (keys / index)
// Used for objects / array indexes

// let fruits2 = ["apple","mango","orange"];
// for(let b in fruits2){
//     console.log(b);
// }

// let obj = { name: "rubel", age: 23 };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// In array (of) used to get values of array
// In array (in) used to get indexes of array

// let see in object
// let person1 = {
//     name : "rubel",
//     age : 23,
//     place : "coimbatore"
// }
// for(let x in person1){
//     console.log(x);
// }

// example of (object.key(),object.value(),object.entries())
// let person2 = {
//     name : "rubel",
//     age : 23,
//     place : "coimbatore"
// }
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// console.log(Object.entries(person2));

// for(let a in Object.keys(person2)){
//     console.log(a)
// } //0,1,2

// for(let a of Object.keys(person2)){
//     console.log(a)
// } // value

// 🧠 Easy Memory Trick

// 👉 "of = values"
// 👉 "in = index / keys"

// => spread operator, rest operator
// 1.spread operator used to open / expand values

// example
// let arr1 = [1,2];
// let arr2 = [...arr1,3,4,5];
// console.log(arr2);
// Output:
// [1, 2, 3, 4]

// example Copy Array
// let a = [10,20];
// let b = [...a];
// console.log(b);

// example 0bject
// let obj1 = {
//   name: "rubel",
//   place: "coimbatore",
// };
// let obj2 = {
//   ...obj1,
//   age: 23,
// };
// console.log(obj2);  //{ name: 'rubel', place: 'coimbatore', age: 23 }

// example combine object
// let a = { x: 1 };
// let b = { y: 2 };

// let c = { ...a, ...b };

// 2.Rest operatoe(collect) used to gather multiple values into one

// example function
// function sum (...numbers){
//     console.log(numbers)
// }
// sum(1,2,3,4,5);

// output [ 1, 2, 3, 4, 5 ]

// example real sum
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1,2,3,4,5)); //15


