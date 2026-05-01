// Type inference
// let score; //not holding any datatype
// score = "five" //string will be allocated
// score = 5 //not works
// console.log(score) //five

// Datatypes include in typescript
// 1.number type of array
// let a:number[] = [1,2,3,4,5];

// 2.string type of array
// let b:string[] = ["rubel","erald"];

// 3.boolen type of array
// let a :boolean[] = [true,false];

// 4.muliple type of array
// let details :any[] = ["rubel",23,"coimbatore"];
// it should be avoided / its not recommend

// 5.tuple method
// let details :[string,number,string] = ["rubel",23,"coimbatore"]

// 6.union operation
// let details :(string|number|boolean)[] = ["rubel","erald",23,true];

// 7.enumeration "enum"

// enum days {
//     sunday,
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday
// }
// let result:days = days.monday;
// console.log(result); 1

// 8.object
// let user : {
//     name : string,
//     age : number,
//     place : string,
//     status : boolean
// } = {
//     name : "rubel",
//     age : 23,
//     place : "coimbatore",
//     status : true
// }

// 9.class
// class classname {
//   name: string;
//   age: boolean;
//   constructor(a: string, b: boolean) {
//     this.name = a;
//     this.age = b;
//   }
// }
// const p1: classname = new classname("rubel", false);
// console.log(p1);

// 10.function
// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(2,2)); //4

// function without return
// function greet(name: string): void {
//   console.log("Hello " + name);
// }
// void = no return

// arrow function
// const greet = (a: number, b: number): number => a + b;
// console.log(greet(3,3));

// function prototyping
// function Person(this: any, a: string, b: number) {
//   this.fullname = a;
//   this.dob = b;
// }

// // prototype method
// (Person as any).prototype.calcage = function (): number {
//   return this.dob * 10;
// };

// const person2 = new (Person as any)("rubel", 23);

// console.log(person2);
// console.log(person2.calcage());

// function Person(this: any, a: string, b: number, c: string) {
//   this.fullname = a;
//   this.age = b;
//   this.place = c;
// }
// const details = new (Person as any)("rubel", 23, "cbe");
// console.log(details);
