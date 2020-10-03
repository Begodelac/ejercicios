let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número")); 


let suma = num1+num2;
let resta = num1-num2;
let multiplicar = num1*num2;
let dividir = num1/num2;
let resto = num1%num2;


document.getElementById("div1").innerHTML = `
<p id ="sumando">${suma}</p>
<p id ="restando">${resta}</p>
<p id ="multiplicando">${multiplicar}</p>
<p id ="dividiendo">${dividir}</p>
<p id ="calcularResto">${resto}</p>`
;

let sumando = document.getElementById("sumando");
sumando.style.color = "red";
sumando.style.backgroundColor = "blue";

let restando = document.getElementById("restando");
restando.style.color = "blue";
restando.style.backgroundColor = "red";

let multiplicando = document.getElementById("multiplicando");
multiplicando.style.color = "black";
multiplicando.style.backgroundColor = "yellow";

let dividiendo = document.getElementById("dividiendo");
dividiendo.style.color = "yellow";
dividiendo.style.backgroundColor = "pink";

let calcularResto = document.getElementById("calcularResto");
calcularResto.style.color = "pink";
calcularResto.style.backgroundColor = "green";