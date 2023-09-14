//Use const whenever possible
const scheduledBreakTime = "09:27";
let consoleLogCounter = 0;

//Use comman in console log
console.log("Let's take a break at:", scheduledBreakTime);
//Making a consoleLogCounter
consoleLogCounter++;

//String, Number, Boolean, BigInt, Undefined, Null,Object, Symbol
//Object: Object, Array, Date
// Function is a dataconstruct

//type coercion
//The 3 ways to make strings

//In the first way I can use '' within the ""
console.log("This is the first way");
//In the second way I can use "" within the ''
console.log('This is the second way');
//This one can string interpolate. 
//In this I can use '' and "" within `` and a js expression ${}
console.log(`This is the third way '' """ ${scheduledBreakTime}`);
//
consoleLogCounter +- 3;

console.log(consoleLogCounter);
