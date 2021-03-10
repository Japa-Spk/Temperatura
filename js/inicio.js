$(document).ready(function(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    $('.btn').click(function(){
        $.ajax({
            url: url,
            type:"GET",
            success:function(result){
                console.log("Resultado GET->", result);
            },
            error:function(error){
                console.log("Error->", error);
            }
        })
    });
})