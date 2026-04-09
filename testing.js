// const result = require("./Javascript/common_module.cjs");
// result.sum(2,2);

// const {sum} = require("./Javascript/common_module.cjs");
// const {sum : rubel} = require("./Javascript/common_module.cjs");
// sum(5,5);
// rubel(10,10);

// const math = require("./Javascript/common_module.cjs");
// math.som(4,6)

// const result = require("./Javascript/common_module.cjs");
// console.log(result.person);
// result.add(2,3);


const {first : kumar,second,third} = require("./Javascript/common_module.cjs");
// console.log(result.second);
// result.first(1,1);
// result.third(2,2);

kumar(7,7);
console.log(second);
third(3,3);


