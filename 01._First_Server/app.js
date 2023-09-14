//Import Express
//const express = require("express");
//Initiate Express
//const app = express();

const app = require("express")();

//const oterData =123;

//Can be written as {data: "this is the first request handler", otherData: otherData} to use other data
app.get("/", (req, res) => {
    res.send({data: "this is the first request handler"});
});

// Task: create a dog endpoint that returns woof
app.get("/dog", (req, res) => {
    res.send({dog: "Woof", dog2: "Meow"});
});

//You can define the id by /:id when you use express 
app.get("/dog/:firstvalue/:someOtherValue", (req, res) => {
    console.log(req.params);
    console.log(req.params.someOtherValue);
    res.send({dog: "Meow"});

});


//http://localhost:8080/wallet/50
let ballance = 100;
app.get("/wallet/:withdrawalAmount", (req,res) =>{
    const withdrawalAmount = req.params.withdrawalAmount;
    ballance -= withdrawalAmount;

    if (ballance < 0) {
        ballance += withdrawalAmount;
        res.send({message: "You can't withdraw. No more money left."})
    } else {
        res.send({message: `You have withdrawn ${req.params.withdrawalAmount}`});
    }
});

//Tomcat port
//80 http
//443 https
//8080 http developer port
//9090 htto developer port

// app.listen(8080)const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/bla", (req, res) => {
//     res.send({data: "Hello, Anders says bla bla"});
// });



// app.get("/bla/:name", (req, res) => {
//     console.log(req.query);
//     const saysWhat = req.query.saysWhat || "bla";
//     res.send({data: `Hello, ${req.params.name} says ${saysWhat}`});
// });

// app.post("/dogs", (req, res) => {
//     console.log(req.body);
//     res.send({data: req.body});
// });

app.listen(8080);