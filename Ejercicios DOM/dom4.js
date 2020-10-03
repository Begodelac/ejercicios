let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("escribe tu edad"));



edad > 18 ?
(document.getElementById("div1").innerHTML=`<p style="color:green;">Hola ${nombre}, eres mayor de edad</p>`) :
(document.getElementById("div1").innerHTML= `<p style="color:red;">Hola ${nombre}, eres menor de edad</p>`);

