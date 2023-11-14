let text = "Apple, Banana, Kiwi";
let part = text.slice(-12,-6);
console.log(part);
console.log(text.length)
//substring() is similar to slice().

// The difference is that start and end values less 
// than 0 are treated as 0 in substring().
part = part.substring(4)
console.log(part)
// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies
//  the length of the extracted part.
part= text.substr(7,6)
console.log(part)
//replace() method The replace() method does not change the string it is called on.

// The replace() method returns a new string.
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
//To replace all matches, use a regular expression with a /g flag (global match):
txt = "vignesh is going home vignesh"
txt1 =txt.replace('vignesh','avi')
console.log(txt1)
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():
// The trim() method removes whitespace from both sides of a string:
//trimStart(), trimEnd() ,padStart(), padEnd()
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// search(),match(),matchAll()
//The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.
//startsWith() returns true if it is prsent and endsWith() method works in same manner

////////////////////////////////
//back tics syntax:
// Template Literals use back-ticks (``) rather than the quotes
let firstName = "John";
let lastName = "Doe";

let text1 = `Welcome ${firstName}, ${lastName}!`;
//this above property of interpolation and variable substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
//toFixed converts the decimal into string and rounds the string to a specifc number of decimals
// js nubers are stored in 64 bit double precision format 
//js is interpretd language
//JS converts the number in a string to integer in all numerical operation expcept addition