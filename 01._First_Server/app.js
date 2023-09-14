const express = require("express");
const app = express();

app.use(express.json());

app.get("/bla", (req, res) => {
    res.send({data: "Hello, Anders says bla bla"});
});



app.get("/bla/:name", (req, res) => {
    console.log(req.query);
    const saysWhat = req.query.saysWhat || "bla";
    res.send({data: `Hello, ${req.params.name} says ${saysWhat}`});
});

app.post("/dogs", (req, res) => {
    console.log(req.body);
    res.send({data: req.body});
});

app.listen(8080);