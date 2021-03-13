$(document).ready(function(){
    const url = 'http://192.168.0.12:8080/Temperatura/rest/prueba/ciudades';
    $('.btn').click(function(){
        $.ajax({
            url: url,
            type:"POST",
            success:function(result){
                console.log("Resultado GET->", result);
            },
            error:function(error){
                console.log("Error->", error);
            }
        })
    });
})