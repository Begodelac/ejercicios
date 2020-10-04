//declaramos un array con diez 1

let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
//declaramos la variable num vacia
let num;

//declaramos la variable mensaje con un string vacio
let mensaje = "";
//en los bucles do while se entra siempre en la primera vuelta y despues se mira la condición para ver si sigue en el bucle
do {
  //igualamos num al número que introduzca el usuario
  num = parseInt(window.prompt("Escribe un número entre 0 y 9"));
  //si num es mayor o igual a 0 Y menor o igual  9
  if (num >= 0 && num <= 9) {
    //sacamos en pantalla el valor actual de ese indice del array
    document.getElementById(
      "div1"
    ).innerHTML = `<p>El valor es: ${array[num]}</p>`;
    //multiplicamos por 2 ese indice del array
    array[num] = array[num] * 2;

    //si no...
  } else {
    //sacamos en pantalla un mensaje diciendo que el numero esta fuera del rango
    document.getElementById(
      "div1"
    ).innerHTML = `<p>El número está fuera del rango</p>`;
  }

  //el bucle for se repetirá mientras num sea mayor Y igual a 0 o menor o igual  9
} while (num >= 0 && num <= 9);

//recorremos el array
for (let i = 0; i < array.length; i++) {
  //a mensaje le sumamos un parrafo con el indice i del array y el valor del indice i del array por cada vuelta
  mensaje += `<p>${i} --- ${array[i]}</p>`;
}

//sacamos en pantalla la variable mensaje con todos sus parrafos
document.getElementById("div1").innerHTML = mensaje;
