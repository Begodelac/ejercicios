let array = [];
let parrafos = "";

for ( let i = 0; i < 10; i++){
    array.push(window.prompt("Introduce 10 valores"));
}
for (let i = 0; i < array.length; i++){
    parrafos +=`<p>${array[i]}</p>`;
}

document.getElementById("div1").innerHTML = parrafos;

 