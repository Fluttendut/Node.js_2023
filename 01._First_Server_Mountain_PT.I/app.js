const app = require("express")();

const mountains = [];
mountains.push({id: 1, name: "Mount Doom-poodle"});
mountains.push({id: 2, name: "Mount Thingymajigity "});
mountains.push({id: 3, name: "Mount Fluffy"});
mountains.push({id: 4, name: "Mount not-a-mountain"});


app.get("/", (req, res) => {
    res.send({data: "Write /mountains or /mountains/ followed by an ID number between 1-5"});
});

app.get("/mountains", (req, res) => {
    res.send({Mountains: mountains});
});

app.get("/mountains/:id", (req,res) => {
    res.send({Mountains: mountains.find(mountain => mountain.id === parseInt(req.params.id))});
});


app.listen(8080);