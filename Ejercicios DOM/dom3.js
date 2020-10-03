let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("Escribe tu edad"));

 if (edad<18){
     (document.getElementById ("div1").innerHTML = `<p>Hola ${nombre}, eres menor de edad`)
 }else{
    (document.getElementById ("div1").innerHTML = `<p>Hola ${nombre}, eres mayor de edad`)
}

// edad < 18 ?
// (document.getElementById ("div1").innerHTML = `<p>Hola ${nombre}, eres menor de edad`) :
// (document.getElementById ("div1").innerHTML =`<p>Hola ${nombre}, eres mayor de edad`);