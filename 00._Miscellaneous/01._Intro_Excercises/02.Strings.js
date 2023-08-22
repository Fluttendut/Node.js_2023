// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";


// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const numberThree = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(numberThree);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";


const anotherNumberThree = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(anotherNumberThree.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const averageResult = (one + two + three) / 3;

console.log(averageResult.toFixed(5));
// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"

const result3 = letters.charAt(2);
const result4 = letters[2];

console.log(result3);
console.log(result4);

//const obj = {
//    "hello": 343
//};

//use . notation instead of []
//obj.hello
//obj[hello]

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capitalizedFact = fact.replace('j', 'J');

console.log(capitalizedFact);

// --------------------------------------


