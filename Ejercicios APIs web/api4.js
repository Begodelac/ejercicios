const url = "http://swapi.dev/api/";

let selectPlanetas = document.getElementById("ListaPlanetas");
let ListaPersonajes =  document.getElementById("personajes");
let listaPlanetas

fetch (url + "planets/").then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    listaPlanetas = datos.results;
    for (let i = 0; i < datos.results.length; i++) {
      let opcionPlaneta =`<option> ${datos.results[i].name}</option>`;
      selectPlanetas.innerHTML += opcionPlaneta
    }
    });

//Creamos las variables planetas, planetaSeleccionado y personas

let planetas = "";
let planetaSeleccionado;
let personas = "";

//Hacemos fetch a la API con el endpoint /planets
fetch("http://swapi.dev/api/planets/")
  .then(function (response) {
    //parseamos la respuesta y accedemos al body
    return response.json();
  })
  .then(function (datos) {
    for (let i = 0; i < datos.results.length; i++) {
      console.log(datos.results[i].residents);
      //Igualamos planetas a lo que ya es más codigo HTML necesario para crear una opcion con cada planeta que nos llega. En el value queremos que sea i + 1.
      //Ya que 1 es el endpoint del primer planeta que recibimos, 2 el segundo etc...
      planetas += `
        <option value=${i + 1}>${datos.results[i].name}</option>
        `;
    }
    //Sacamos en el elemento con id="planetas" (es un select) las options que hemos creado
 
  });

//En el HTML tenemos un select con el atributo onchange al que le pasamos la función manageChange(). Que por parametro recibe el evento.
function manageChange(e) {
  //igualamos planetaSeleccionado el valor del objetivo del evento. Es decir, el value de la opción seleccionada.
  planetaSeleccionado = e.target.value;
  //hacemos fetch a la misma url que antes, solo que le añadimos la variable planetaSeleccionado
  fetch(`http://swapi.dev/api/planets/${planetaSeleccionado}`)
    .then(function (respuesta) {
      //parseamos la respuesta y accedemos al body
      return respuesta.json();
    })
    .then(function (datos) {
      //Reseteamos la varibale personas
      personas = "";
      //Recorremos el array datos.residents
      for (let i = 0; i < datos.residents.length; i++) {
        //Havemos un fetch a cada url que guarda el array datos.resindents
        fetch(datos.residents[i])
          .then(function (respuesta) {
            //parseamos la respuesta y accedemos al body
            return respuesta.json();
          })
          .then(function (datos) {
            //personas es igual a lo que ya hera más un div con un parrafo donde sacamos el nombre de los personajes
            personas += `
                  <div>
                    <p>${datos.name}</p>
                  </div>
                  `;
            //En el div con id "personas" mostramos el contenido de la variable personas
            document.getElementById("personas").innerHTML = personas;
          });
      }
    });
}
