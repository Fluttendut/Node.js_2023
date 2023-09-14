//hoisting
//You can call the console before the function 

console.log(getRandomInt());

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//From function and after it is called a anonymous function because it would not have a name
const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//Arrow function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//Arrow function without return
const getRandomArrowFunctionWithoutReturn = (min, max) => {
    Math.floor(Math.random() * (max + 1 - min) + min);
}

//generiAction will be my callback function, while name will be a variable
function genericActionperformer(genericACtion, name) {
    //do things...
    return genericACtion(name);
}

const jump = (name) => `${name} is jumping`;
// Desired result: Lasse is jumping
console.log(genericActionperformer(jump,"Lasse"));


//Desired result "Jonathan is running"
//this i a functions declaration
function run(name) {
    return `${name} is running`;
  }
//Inside () the run is sa callback declaration
console.log(genericActionperformer(run,"Jonathan"));

//my way
((name, genericACtion) => setTimeout(() => genericACtion(`${name} is sleeping`), 2000))("Daniel", console.log);

//Anders way
console.log(genericActionperformer((name) => `${name} is sleeping`, "Daniel"));
