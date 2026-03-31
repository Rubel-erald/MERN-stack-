// arrays in javascript
// an array is a special variable that can store multiple values in a single place
// let fruits = ["apple","mango","orange"];

// creating an array 
// let numbers = [1,2,3,4,5];
// let numbers1 = new Array (1,2,3,4,5);

// Array methods 
// 1.push (add value at end)
// let numbers = [1,2,3,4];
// number.push(5);
// console.log(number); [1,2,3,4,5]

// 2.pop(remove value at end);
// let numbers = [1,2,3,4,5];
// numbers.pop();
// console.log(numbers); [1,2,3,4]

// 3.shift(remove first value)
// let numbers = [1,2,3,4,5];
// numbers.shift()
// console.log(numbers);

// 4.unshift(add first value)
// let numbers = [2,3,4,5];
// numbers.unshift(1)
// console.log(numbers);


// 5.length(length of the array)
// let fruits = ["apple","mango","orange","banana"];
// console.log(fruits.length);

// 6.indexOf()(Finds the position of a value)
// let arr = [10, 20, 30, 40];
// console.log(arr.indexOf(30)); // 2
// console.log(arr.indexOf(50)); // -1 (not found)

// 7.slice()(Returns a new array (does NOT change original))
// let arr = [10, 20, 30, 40, 50];
// let result = arr.slice(1, 4);
// console.log(result); // [20, 30, 40]
// console.log(arr);    // original unchanged

// 8.splice() (not "spilce") Adds/removes elements (changes original array)
// let arr = [10, 20, 30, 40];
// // remove 2 elements starting from index 1
// arr.splice(1, 2);
// console.log(arr); // [10, 40]

// Add values:
// let arr = [10, 20, 40];
// arr.splice(2, 0, 30); // insert at index 2
// console.log(arr); // [10, 20, 30, 40]

// 9.join()(Converts array to string) 
// let arr = ["Hello", "World"];
// console.log(arr.join(" ")); // Hello World
// console.log(arr.join("-")); // Hello-World

// 10.map()(Creates new array by transforming values)
// let nums = [1, 2, 3];
// let result = nums.map(n => n * 2);
// console.log(result); // [2, 4, 6]

// 11.filter() (Returns elements that match condition)
// let nums = [10, 20, 30, 40];
// let result = nums.filter(n => n > 20);
// console.log(result); // [30, 40]

// 12.find() (Returns first matching value)
// let nums = [10, 20, 30, 40];
// let result = nums.find(n => n > 20);
// console.log(result); // 30

// 13.reduce() (Reduces array to a single value)
// let nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 10

// 14.some() (Returns true if ANY element matches)
// let nums = [10, 20, 30];
// let result = nums.some(n => n > 25);
// console.log(result); // true

// 15.every() (Returns true if ALL elements match)
// let nums = [10, 20, 30];
// let result = nums.every(n => n > 5);
// console.log(result); // true