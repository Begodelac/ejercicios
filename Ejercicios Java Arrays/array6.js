let array = [];
let parrafos
for (let i = 0; i < 3; i++){
    array.push(window.prompt("Escribe un valor"));
}
if (array [0] < array [1] && array[0] < array[2]){
    parrafos =`<p>${array[0]}</p>`;
}else if (array [1] < array [2] && array[1] < array[0]){
    parrafos =`<p>${array[1]}</p>`;
}else {
    parrafos =`<p>${array[2]}</p>`;
}
document.getElementById("div1").innerHTML = parrafos;

