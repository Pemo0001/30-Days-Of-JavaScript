// this is your main.js script

let challenge = "30 Days of Javascript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt("15"));
console.log(challenge.charCodeAt("15"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Javascript"));
console.log(challenge.concat(". Awesome!"));
console.log(challenge.repeat("2"));
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log(typeof "10" === 10);
console.log(typeof "10" === "string");
let number = "10";
let numberInteger = Number(number);
console.log(numberInteger);
console.log(typeof numberInteger === "number");
console.log(parseInt(Math.ceil(9.8)));
let newNumber = parseInt(Math.ceil(9.8));
console.log(newNumber === 10);
let makeItAnArray = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(makeItAnArray.split(", "));

let findWord = "You cannot end a sentence with because because because is a conjunction";

console.log(findWord.indexOf("because"));

console.log(findWord.lastIndexOf("because"));
console.log(findWord.search("because"));

let removeTrail = " 30 Days Of JavaScript ";
console.log(removeTrail.trim(" "));

console.log("Python".includes("on"), "Jargon".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));

console.log(Math.floor(Math.random() * 101));
console.log(Math.min(50 + Math.floor(Math.random() * 51), 100));
console.log(Math.floor(Math.random() * 256));

const str = "JavaScript";
// Generate a random index between 0 and the length of the string minus 1
const randomIndex = Math.floor(Math.random() * str.length);
// Access the character at the random index
const randomCharacter = str[randomIndex];
console.log("Random character:", randomCharacter);

console.log("Hello\nWorld");
console.log('This is a "quote"');
console.log("This is a 'quote'");
console.log("This is a \\ backslash");

console.log(findWord.substr(31, 23));

console.log("Love is the best thing in this world. Some found their love and some are still looking for their love.".match(/love/gi));

console.log("You cannot end a sentence with because because because is a conjunction".match(/because/gi));
