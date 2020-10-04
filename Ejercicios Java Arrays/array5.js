let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let parrafos;

let respuesta = parseInt(window.prompt("Escribe un número del 1 al 12"));

if (respuesta >= 1 && respuesta <= 12){
    parrafos = `<p>${array[respuesta - 1]}</p>`
}else{
    parrafos = `<p>Ese valor no lo hemos pedido</p>`
}

document.getElementById("div1").innerHTML = parrafos;