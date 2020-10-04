let array = [1, 3, 5, 7, 8, 4, 5, 2, 6, 20];
let total = 0;
let media;

for ( let i=0; i<10; i++){
    total = total + array[i];
}
media = total / array.length;

document.getElementById("div1").innerHTML = media;