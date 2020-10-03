let valor;
let sumaValores = 0;

while (valor !== 0){
    valor = parseInt(window.prompt("Escribe un número"))
    if (valor < 0){
        console.log("Se ignoran los valores negativos");
    }else {
        sumaValores = sumaValores + valor;
    }
}
console.log(`La suma es ${sumaValores}`);


