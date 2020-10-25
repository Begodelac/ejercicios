let url = "https://randomuser.me/api/";
fetch(url)
    .then ( function(respuesta){
        return respuesta.json();
    })
    .then (function (datos){
        let persona =`
            <div>
            <img src =${datos.results[0].picture.large} />
            <p>Nombre: ${datos.results[0].name.title} ${datos.results[0].name.first} ${datos.results[0].name.last} </p>
            <p>Dirección: ${datos.results[0].location.street.name}</p>
            <p>Ciudad: ${datos.results[0].location.city}</p>
            <p>Estado: ${datos.results[0].location.state}</p>
            <p>País: ${datos.results[0].location.country}</p>

        </div>
        `;
        document.getElementById("div1").innerHTML = persona
    });