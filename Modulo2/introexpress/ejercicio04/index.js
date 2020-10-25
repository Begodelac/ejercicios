const saludarEnExpress = require("./saludarEnExpress")
const express = require("express");
const app = express();

app.get("/", function(req, res){
    let saludar = saludarEnExpress();
    res.send(saludar);
});

app.listen(3000);