const express = require("express");
const app = express();

let array = ["Pepe", "Manuel", "Diana", "Juan", "Ana"];

app.get("/personas", function (req, res) {
  let mensaje = "";
  for (let i = 0; i < array.length; i++) {
    mensaje += `<p>${array[i]}</p>`;
  }
  res.send(mensaje);
});
app.get("/personas/:nombre", function (req, res) {
  let nombre = req.params.nombre;
  for (let i = 0; i < array.length; i++) {
    if (nombre === array[i]) {
      res.send(nombre);
    }
  }
  res.send("error");
});

app.listen(3000);
