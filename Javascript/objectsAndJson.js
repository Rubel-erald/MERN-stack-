// Object
// An object in js is a collection of key-value pairs

// let student = {
//     name : "rubel",
//     age : 23,
//     grade : "A"
// }

// here ;
// name => key , "rubel" => value

// what is JSON ? 
// JSON stands for javascript object notation 

// {
//     "name" : "rubel",
//     "age" : 23,
//     "place" : "coimbatore"
// }

// key are always in double quotes
// no function allowd


// different ways to create js object
// 1.object literal

// const person = {
//     name : "rubel",
//     age : 23,
//     place : "coimbatore"
// }

// 2.using new object() constructor 
// create an empty object first,  then adds properties 

// const person = new Object();
// person.name = "rubel";
// person.age = 23;
// console.log(person);

// 3.constructor function (older way of reusable object creation)
// function acts like a "template" for creating multiple object 

// function person (a,b){
//     this.name = a;
//     this.age = b;
// }

// let person1 = new person ("rubel" , 23);
// console.log(person1)

// (adding function without prototype)
// function person (a,b){
//     this.fullname = a;
//     this.dob = b;
//     this.calcage = function() {  //adding function 
//         return this.dob * 10;
//     }
// }
// const person2 = new person("rubel" , 23);
// console.log(person2);
// console.log(person2.calcage());


// (adding function with prototype)
// function person (a,b){
//     this.fullname = a;
//     this.dob = b;
//     person.prototype.calcage = function() {  //adding function 
//         return this.dob * 10;
//     }
// }
// const person2 = new person("rubel" , 23);
// console.log(person2);
// console.log(person2.calcage());

// ES6 (MODERN & RECOMMENDED)
// class details {
//     constructor(a,b){
//         this.fullname = a;
//         this.age = b;
//     }
//     cal(){
//         return this.age * 2;
//     }
// }
// const details1 = new details("rubel",20);
// console.log(details1);
// console.log(details1.cal());

// object.create()(for prototype-based object creation)

// const person = {
 
// }
// const person1 = Object.create(person);
// person1.name = "rubel"
// console.log(person1);

//adding function
// const details = {
//  cal(){
// return 5 * 5;
// }
// }
// const person2 = Object.create(details);
// person2.name = "rubel"
// console.log(person1);
// console.log(details.cal());
