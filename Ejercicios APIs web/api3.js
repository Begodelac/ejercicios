

//Creamos una función a la que se le llamará cuando pulsemos un botón

function buscar() {
    //Creamos las variables dia, mes y anyo y les damos el valor de los inputs con esas mismas id
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anyo = document.getElementById("anyo").value;
    //Hacemos fetch a la API de la nasa con la api_key que nos han proporcionado. Añadimos también a la url el atributo date=las variablas dia mes anyo separados por un -
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=frhcTAc4jRe4b9NQKdhu5QGZUqgHbnapR9ddtg61&date=${anyo}-${mes}-${dia}`
    )
      .then(function (response) {
        //parseamos la respuesta y accedemos al body
        return response.json();
      })
      .then(function (data) {
        //Si data.results no existe mostramos un mensaje de error
        if (!data.results) {
          document.getElementById("div1").innerHTML =
            "<p>Error en la búsqueda</p>";
        }
        //Si nos llega la respuesta correcta sacamos la información en pantalla
        document.getElementById("div1").innerHTML = `
        <h1>${data.title}</h1>
        <img src="${data.hdurl}" alt="" />
        <p>${data.explanation}</p>
        <p>${data.date}</p>
  `;
        console.log(data);
      });
  }
  
