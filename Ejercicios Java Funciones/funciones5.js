let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));

let esMayor = compararNumeros(num1,num2);


function compararNumeros(num1,num2){
    if (num1 > num2){
    return true;
    }else{
    return false;
    }
}
esMayor ? console.log("El primer número es mayor que el segundo") : console.log("El segundo número es mayor que el primero");