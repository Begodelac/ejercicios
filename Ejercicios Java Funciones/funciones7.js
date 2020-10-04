let num = parseInt(window.prompt("Escribe un número"));

esPar();
function esPar(num){
    if (num % 2 === 0){
        window.alert("El número es par")
    }else{
        window.alert("El número es impar");
    }
}