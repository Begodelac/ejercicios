let numeroString = window.prompt("Escribe un número de tres dígitos");

let num1 = numeroString.substring (0, 1);
let num2 = numeroString.substring (1, 2);
let num3 = numeroString.substring (2, 3);

let suma = (num1 + num2 + num3).toString();
console.log(suma);