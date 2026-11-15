console.log("Hello, World!");
console.log("This is my first JavaScript assignment.");

//A. Part 1: Coding Questions 


// 1-  Convert the string "123" to a number and add 7.
const strNum = "123";
const convertNumber = Number(strNum);
const result = convertNumber + 7;
console.log(result);

// 2. Check if the given variable is falsy and return "Invalid" if it is.
const variable = 0;
if(!variable) {
    console.log("Invalid");
} else {
    console.log("Valid");
}

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for(let i = 1;i<=10;i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

// 4. Create an array of numbers and return only the even numbers using filter method.
const arr = [1, 2, 3, 4, 5];
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
const arr1 =  [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
const dayNumber = 2;
switch(dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day number");
}

// 7. Create an array of strings and return their lengths using map method.
const stringArray = ["a", "ab", "abc"];
const lengthsArray = stringArray.map(str => str.length);
console.log(lengthsArray);

// 8. Write a function that checks if a number is divisible by 3 and 5.
function isDivisibleBy3And5(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log("Divisible by both");
    } else {
        console.log("Not divisible by both");
    }
}
isDivisibleBy3And5(15);

//9. Write a function using arrow syntax to return the square of a number.
const square = (num) => num * num;
console.log(square(5));

// 10.Write a function that destructures an object to extract values and returns a formatted string.
const person = {name: 'John', age: 25}
const formatPerson = ({name, age}) => `${name} is ${age} years old`;
console.log(formatPerson(person));

// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function delayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success');
        }, 3000);
    });
}

delayedPromise().then(message => console.log(message));


// 13. Write a function to find the largest number in an array.
function findLargestNumber(arr) {
    return Math.max(...arr);
}
console.log(findLargestNumber([1, 2, 3, 4, 5]));

// 14. Write a function that takes an object and returns an array containing only its keys.
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({name: "John", age: 30}));

// 15. Write a function that splits a string into an array of words based on spaces.
function splitStringIntoWords(str) {
    return str.split(' ');
}
console.log(splitStringIntoWords("The quick brown fox"));




// B. Part 2: Essay Questions:
// 1. What is the difference between forEach and for...of? When would you use each?

/*

forEach: An array method that runs a function for each element. You cannot use break or continue.
for...of: A loop that iterates over iterable values. You can use break and continue.
When to use: Use forEach for simple array operations and for...of when we need more control.

*/
    
// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

/*
Hoisting: JavaScript processes declarations before executing the code.

TDZ: The period when a let or const variable cannot be accessed before its declaration.

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;
*/

// 3. What are the main differences between == and === ?

/*
==: Compares values after type coercion (loose equality).
===: Compares both value and type (strict equality).

*/

// 4. Explain how try-catch works and why it is important in async operations.

/*
try-catch is used to handle exceptions. The code in the try block is executed, and if an error occurs,
 control is transferred to the catch block.
  This is important in async operations to prevent unhandled promise rejections and to provide a way to handle errors.
*/


// 5. What’s the difference between type conversion and coercion? Provide examples of each.

/*
Type conversion: Manually changing a value from one type to another.

Type coercion: JavaScript automatically changes a value's type.

// Explicit conversion
Number("10"); // 10

// Implicit coercion
"10" + 5; // "105"

*/




