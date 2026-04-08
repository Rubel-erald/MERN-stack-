// Common javascript and module javascript

// commom js:
// we use file extention as '.js' or '.cjs' for common js;
// we can use 'require' and 'module.export' in common js.

// module js:
// we use the file extention as '.mjs' for module js;
// we can use 'import' and 'export' in module js.

// examples;
// common js

function add (x,y){
    console.log(`the sum of ${x} and ${y} is ${x+y}`);
}
function sub (x,y){
    console.log(`the differents between ${x} and ${y} is ${x-y}`);
}
module.exports = {
    add,
    sub
}

// another file (testing.js)
// 2 ways to export 

const math = require("./")// file name
// behind the code
math = {
    add,
    sub
}
// calling Object
math.add(2,2)


// another way 
// destructing
const {add,sub} = require("./") //property name and file name
// behind the code
// module.exports = {
//     add,
//     sub
// }
// {
//   add: function,
//   sub: function
// }
// const { add, sub } = obj;
// const add = obj.add;
// const sub = obj.sub;



