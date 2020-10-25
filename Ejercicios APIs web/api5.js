
let tipos = "";
let pokemon = "";

//Hacemos fetch al endpoint type de la API de pokemon
fetch("https://pokeapi.co/api/v2/type/")
  .then(function (res) {
    //parseamos la respuesta y accedemos al body
    return res.json();
  })
  .then(function (datos) {
    //recorremos el array datos.results
    for (let i = 0; i < datos.results.length; i++) {
      //la variable tipos es igual a lo que ya era más distintas opciones que reciben en el value el nombre del tipo de pokemon y como contenido el nombre del tipo también
      tipos += `<option value="${datos.results[i].name}">${datos.results[i].name}</option>`;
    }
    //Sacamos en el elemento con id "tipos" (un select) el valor de la variable tipos. (distintas option)
    document.getElementById("tipos").innerHTML = tipos;
  });

//A esta función se le llama cada vez que el select cambia y recibe por parametro el evento
function buscarPorTipo(event) {
  //Reseteamos la variable pokemon
  pokemon = "";
  //Hacemos fetch a la API de pokemon con los endpoint "type" y el nombre del tipo que nos llega por el evento.
  fetch(`https://pokeapi.co/api/v2/type/${event.target.value}`)
    .then(function (respuesta) {
      return res.json();
    })
    .then(function (datos) {
      //como nos piden sacar 3 pokemon del tipo seleccionado aleatorios hacemos un bucle que se recorra 3 veces
      for (let i = 0; i < 3; i++) {
        //La variable pokemon será igual a lo que ya tiene más el código HTML en formato string.
        //Como nos pide que sean 3 pokemon aleatorios en el indice del array[] en vez de poner la [i] o un [número] correcto. Ponemos un [Math.random]
        pokemon += `<p>${
          datos.pokemon[
            Math.floor(Math.random() * datos.pokemon.length - 0) + 0
          ].pokemon.name
        } </p>`;
      }
      //Sacamos en pantalla el contenido de la variable pokemon
      document.getElementById("pokemon").innerHTML = pokemon;
    });
}
