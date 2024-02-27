// this is your main.js script

let firstName = "Peter";
let lastName = "Møller-Rasmussen";
let country = "DK";
let city = "Frederiksberg";
let isMarried = false;
let year = 2024;

console.log(typeof firstName, typeof isMarried, typeof year);

console.log(typeof "10" === 10);
console.log(parseInt("9.8") === 10);

console.log(4 > 3);
console.log("Abe" === "Abe");
console.log(typeof -3 === "number");

console.log(4 > 5);

let nothing = "";
console.log(nothing);

console.log(0);

console.log("Her kommer en masse booleans:");

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false;

let python = "Python";
let jargon = "Jargon";

console.log(python.length);
console.log(jargon.length);
console.log(python.length > jargon.length);

console.log("Her kommer flere booleans:");
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log("Python".includes("on"), "Jargon".includes("on"));

const whichYear = new Date();

console.log(whichYear.getFullYear());
console.log(whichYear.getMonth());
console.log(whichYear.getDate());
console.log(whichYear.getDay());
console.log(whichYear.getHours());
console.log(whichYear.getMinutes());
console.log(whichYear.getTime());

/*
let base = parseFloat(prompt("Enter the base of the triangle", "Enter the base here"));
let height = parseFloat(prompt("Enter the height of the triangle", "Enter the height here"));
let area = 0.5 * base * height;

console.log("The area of the triangle with base " + base + " and height " + height + " is: " + area);

let sideA = parseFloat(prompt("Enter side A here"));
let sideB = parseFloat(prompt("Enter side B here"));
let sideC = parseFloat(prompt("Enter side C here"));
let perimeter = sideA + sideB + sideC;

console.log("The perimeter of the triangle with side A " + sideA + " and side B " + sideB + " and side C " + sideC + " is: " + perimeter);
*/

/*
let length = parseFloat(prompt("Enter the length"));
let width = parseFloat(prompt("Enter the width"));
let rectangleArea = length * width;

console.log("The area of the rectangle is " + rectangleArea);
*/

/*

let radius = parseFloat(prompt("Enter the radius"));
let circleArea = Math.PI * radius * radius;

console.log("The area of the circle is " + circleArea);

*/

/*

let hours = parseFloat(prompt("Enter hours:"));
let rate = parseFloat(prompt("Enter hourly rate:"));

let salary = hours * rate;

console.log("Your salary for this month is: " + salary);

*/

/*

let myName = "Peter";
7 >= myName.length + 1 ? console.log("You have a short name") : console.log("You have a long name");

firstName.length < lastName.length ? console.log(`Your first name ${firstName} is shorter than your last name ${lastName}`) : console.log(`Your first name ${firstName} is longer than your last name ${lastName}`);

*/

/*

let myAge = 28;
let yourAge = 100;

console.log(`You are ${yourAge - myAge} years older than me`);

*/

/*

let birthYear = parseFloat(prompt("Enter birth year:"));
let now = new Date();

birthYear < now.getFullYear() - 18 ? console.log(`You are ${now.getFullYear() - birthYear}. You are old enough to drive`) : console.log(`You are ${now.getFullYear() - birthYear}. You will be allowed to drive after ${18 - (now.getFullYear() - birthYear)} years.`);
*/

/*

let years = parseFloat(prompt("Enter number of years:"));

console.log(`You lived ${years * 31536000} seconds.`);

*/

/*

let now = new Date();

console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`);

*/
