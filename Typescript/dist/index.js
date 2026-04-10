"use strict";
// Type inference
// let score; //not holding any datatype
// score = "five" //string will be allocated
// score = 5 //not works
// console.log(score) //five
Object.defineProperty(exports, "__esModule", { value: true });
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
class classname {
    name;
    age;
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
}
const p1 = new classname("rubel", true);
console.log(p1);
//# sourceMappingURL=index.js.map