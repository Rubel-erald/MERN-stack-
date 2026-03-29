// scopes in javascript
// scopes decides "who can see the variable"

// 3 types in js
// global scope
// function scope
// block scope

// global scope
// let city = "coimbatore"

// function showcity(){
//     console.log(city);
// }
// showcity();

// function scope
// function showcity (){
//     let city = "coimbatore"
//     console.log(city);
// }
// showcity(); WORKS 
// console.log(city); ERROR

// block scope
// variable inside {} ,if,while,for 
// if(true){
//     let age = 23;
//     console.log(age);WORKS
// }
// console.log(age); ERROR

// var is not a block scope its a function scope 

// if(true){
//     var age = 23;
//     console.log(age);
// }
// console.log(age); WORKS PERFECTLY 

// function showage (){
//     var city = "coimbatore";
//     console.log(city); WORKS
// }
// showage()
// console.log(city); ERROR
