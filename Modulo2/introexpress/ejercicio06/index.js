let array = [
  "Roberto",
  "Ainara",
  "Rafa",
  "Anastasia",
  "Mailaen",
  "Elena",
  "Manu",
  "Luis",
  "Diego",
  "Leticia",
  "Daniel",
];

const express = require("express");
const app = express();


app.get("/:parametro", function(req, res){
  array.push(req.params.parametro);
  res.send("Se ha añadido");
});
app.get("/", function(req, res){
  res.send(array);
});

app.listen(3000);