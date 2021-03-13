$(document).ready(function () {
    const url = 'http://192.168.0.12:8080/Temperatura/rest/prueba/ciudades';
    var todasCiudades = [];
    var ciudadesSeleccionadas = [];
    cargar_ciudades();
    function cargar_ciudades() {
        $.ajax({
            url: url,
            type: "POST",
            success: function (result) {
                console.log("Resultado GET->", result);
                todasCiudades = result;
                var ciudades = document.getElementsByName("ciudades")[0];
                for (value in result) {
                    var option = document.createElement("option");
                    option.value = result[value].id;
                    option.text = result[value].nombre + "-" + result[value].pais.nombre;
                    ciudades.add(option);
                }
            },
            error: function (error) {
                console.log("Error->", error);
            }
        })
    }

    const selectElement = document.getElementsByName('ciudades')[0];

    selectElement.addEventListener('change', (event) => {
        console.log("Ciudad Seleccionada->", event.target.value);
        const resultado = document.getElementsByName('descripcion')[0];
        const busqueda = todasCiudades.find(ciudad => ciudad.id == event.target.value);
        resultado.textContent = busqueda.descripcion;
    });


    $('.btn').click(function () {
        const busqueda = todasCiudades.find(ciudad => ciudad.id == selectElement.value);
        console.log("adicionar Ciudad",busqueda);
        var card = '<div class="col-md-4 mb-5"> <div class="card h-100"> <div class="card-body"> <h2 class="card-title">'+busqueda.nombre+'</h2> <p class="card-text">'+busqueda.descripcion+'</p></div><div class="card-footer"><a class="btn btn-secondary btn-sm">Ver Informacion</a></div></div></div>'
        ciudadesSeleccionadas.push(card);
        console.log("HTML->", ciudadesSeleccionadas);
        var cadenaCards = "";
        for(cards of ciudadesSeleccionadas){
            cadenaCards=cadenaCards+cards;
        }
        document.getElementsByName("ciudadesList")[0].innerHTML=cadenaCards;
    });


})