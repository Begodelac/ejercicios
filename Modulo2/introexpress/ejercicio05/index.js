const express = require("express");
const app = express();

let persona = {
    nombre: "Bego",
    apellidos: "de la Cruz",
    edad: 41
}
app.get("/nombre/:parametro", function(req, res){
    persona.nombre = req.params.parametro;
    res.send(persona);
    });
app.get("/apellidos/:parametro", function(req, res){
    persona.apellidos = req.params.parametro;
    res.send(persona);
    });
app.get("/edad/:parametro", function(req, res){
    persona.edad = parseInt(req.params.parametro);
    res.send(persona);
    });


app.listen(3000);