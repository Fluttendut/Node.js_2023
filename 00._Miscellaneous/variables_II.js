"use strict";
//Where you don't have a defining variable type then it is a global variable
//Don't use var in node.js

//totalGlobalVariable = "Never do this!!";
//var globalVariable = "Also NEVER do this!!";

//const isThisConstant = 123;
//isThisConstant = 456;

var test;
var test;


const isThisConstant = [];
isThisConstant.push(1,2,3);
console.log(isThisConstant);

const anotherConstant = {};
anotherConstant.valueChange=true;



//Global scope 

function anotherScope(){
    //function scope
}

{
    //block scope
}
{
    console.log("hello I am a block scope")
}

//If I use var, the someVariable would be false

{
 let someVariable = true 
    {
        let someVarable = false;
    }
    console.log(someVariable);
}

//
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
