const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send(`
    <h1>Hola Mundo</h1>
    <p>desde express</p>`);
});

app.listen(3000);
