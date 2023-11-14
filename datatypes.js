// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object
// A BigInt can not have decimals.
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number
// The Number() method can be used to convert JavaScript variables to numbers:
// use the Array.forEach() function:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }
//new element can be added using the push and length property 
//adding elements with high indexes can create undefined holes (empty spaces in array)
// associative arrays are not involved where the names are used as index
//
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points1 = new Array(40); 
//isArray()
//Shifting is equivalent to popping, but working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
//the unshift() method adds new element to an array
//concat() is used to merge two arrays
// Flattening an array is the process of reducing the dimensionality of an array.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added
// Math.max.apply , Math.min.apply to find the max and min values
// 
// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.
// The filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//reduce() function
//Fisher -yates method is used to shuffel the array
//every() function ensures thar all the elements pass the function test
const numbers1 = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//Some()function  checks if some array values pass a test.
const numbers3 = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.
// defer – means that the script should be executed after the whole page is loaded;
// async – means that the script will be executed immediately, but in parallel to parsing the rest of the page.
"use strict";
   
height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);
// Variable shadowing
//  It means that we can declare a global variable and a local variable of the same name.
let height =12
{
    let height =13
    console.log(height)
}
console.log(height)
//typeof() is an operator
// BigInt literals are numbers with the ...n suffix.
// You cannot use other types in arithmetic operations on BigInts, that is, you cannot add a BigInt and a Number to each other (this will generate an error).
let message1 = 'The vessel \'Mars\' called at the port.';
let message2 = "Cyclone \"Cilida\" to pass close to Mauritius.";
   
console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.
   
let path = "C:\\Windows";
console.log(path); // -> C:\Windows
// A very convenient mechanism that was introduced to JavaScript in 2015 is string interpolation.
//  It allows you to treat a character string as a template, in which you can place values in selected places, such as those taken from variables. 
// Such a literal is created using backticks (or grave accents) instead of quotation marks. The places where values are inserted are marked with curly brackets preceded by a $ sign.


let country = "Malawi";
let continent = "Africa";
   
let sentence = ` ${country} is located in ${continent}.`;
console.log(sentence); // -> Malawi is located in Africa.
// autoboxing. If a dot appears after a literal representing a primitive type, or after a variable containing this type of data, the JavaScript interpreter tries to treat this value as an object and not a primitive.
const str = String();
const num = Number();
const bool = Boolean();
   
console.log(str); // ->
console.log(num); // -> 0
console.log(bool); // -> false
   
const big1 = BigInt(42);
console.log(big1); // -> 42n
   
const big2 = BigInt(); // -> Uncaught TypeError: Cannot convert undefined to a BigInt
console.log(Boolean(true)); // -> true
   
console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false
   
console.log(Boolean("text")); // -> true
console.log(Boolean("")); // -> false
   
console.log(Boolean(undefined)); // -> false
   
console.log(Boolean(null)); // -> false
//declearing an empty array
let emptyArray = [];
console.log(emptyArray[0]); // -> undefined
//
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James
   
let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

/// array in Js is always an object
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";
   
console.log(typeof days); // -> object
console.log(typeof day); // -> string
   
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false

// Unshift
// The unshift method works similarly to push, the difference being that a new element is added to the beginning of the array. 
// The array length is increased by 1
 
//  shift
// The shift method works similarly to pop, only this time we remove the element from the beginning of the array (with the index 0).
//  The removed element is returned by the method,
Reverse
// The reverse method reverses the order of elements in the array. As a result of its calling, 
// the first element of the original array will become the last, the second last but one, and so on.

let names1 = ["Olivia", "Emma", "Mateo", "Samuel"];
   
names.reverse();
let names2 = ["Olivia", "Emma", "Mateo", "Samuel"];
   
let n1 = names.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]
   
let n2 = names.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]
   
let n3 = names.slice(0, -1);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]
   
let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]

//unary operators usage
let str1 = "123";
let n11 = +str;
let n21 = -str;
let n31 = -n2;
let n41 = +"abcd";
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number
// Just like arithmetic operators, binary logical operators can be used in combination with the assignment operator, 
// creating a logical AND assignment &&= and a logical OR assignment ||=.
console.log(NaN == NaN); // -> false

////////////////////////////////
// Other type of Operators
// instanceof
// The instanceof operator appeared while discussing arrays. It is a binary operator that 
// checks whether an object (left operand) is of some type (right operand).
// Delete operato
let user = {
  name: "Alice",
  age: 38
};
console.log(user.age); // -> 38
delete user.age;
// alert usage
alert("Hello, World!")
window.alert("Hello, World! for the second time");//alert is the method of the window function
 
alert(4 * 7);
alert(true);
 
alert("text 1", "text 2"); // only "text 1" will be displayed


// In JavaScript, functions are first-class members. This term means that functions can be treated as any data, which can be stored in variables or passed as arguments to other functions. For example,
//  we can declare the showMessage function and then store it in the variable sm.


function showMessage(message) {
     console.log(`Message: ${message}`);
}
let sm = showMessage;

// We can store any function that is accessible in this scope in a variable and use a function call operator () to execute it. We can check that the sm variable is now a function by using the typeof operator.


sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function


function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function operation(func, first, second) {
  return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200