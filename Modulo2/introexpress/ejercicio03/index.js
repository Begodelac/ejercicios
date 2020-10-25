const express = require("express");
const app = express();

let persona = [
    nombre= "Pepe",
    nombre ="Manuel", 
    nombre= "Diana",
    nombre= "Juan",
    nombre = "Ana"
];

app.get("/persona", function(req,res){
    res.send(persona);
});
app.get("/persona/:nombre", function(req,res){
    let name = req.params.nombre
    res.send(name);
});
app.listen(3000);
