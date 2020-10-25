const express = require("express");
const array = require("./array");
const aleatorio = require("./aleatorio")

const app = express();

app.get("/", function(req,res){
    let numero = aleatorio();
    array[numero]+= 1;
    res.send(array);
});
app.get("/borrar/:numero", function(req,res){
    let numero = parseInt(req.params.numero);
    for (let i=0; i< array.length; i++){
        if (numero === array[i]){
            array[i]=0;
        }
    }
    res.send(array);
})
app.listen(3000);