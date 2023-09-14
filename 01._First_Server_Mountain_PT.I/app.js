const app = require("express")();

const mountains = [ 
    { id: 1, name: "Mount Doom-poodle"},
    { id: 2, name: "Mount Thingymajigity"},
    { id: 3, name: "Mount Fluffy"}];


app.get("/", (req, res) => {
    res.send({data: "Write /mountains or /mountains/ followed by an ID number between 1-3"});
});

app.get("/mountains", (req, res) => {
    res.send({data: mountains});
});

app.get("/mountains/:id", (req, res) => {
    res.send({data: mountains.find(mountain => mountain.id === parseInt(req.params.id))});
});




app.listen(8080);