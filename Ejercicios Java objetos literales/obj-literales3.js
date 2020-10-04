num = parseInt(window.prompt("Introduce un número"));

if (num < 100) {
  document.getElementById("div1").innerHTML = num;
  document.getElementById("div1").style.color = "green";
} else if (num >= 100 && num <= 200) {
  document.getElementById("div1").innerHTML = num;
  document.getElementById("div1").style.color = "yellow";
} else {
  document.getElementById("div1").innerHTML = num;
  document.getElementById("div1").style.color = "red";
}