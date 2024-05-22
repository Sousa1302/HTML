$(document).ready(function(){
    var frase = $("h2");
    var placeholder = frase.find("span");

    console.log(frase);
    console.log(placeholder);

    // evento de clique nos blocos de imagem 
    $(".img").on("click", function(e){
        e.preventDefault();
        
        var estaImagem = $(this);
        var titulo = estaImagem.find("h4").text();

        placeholder.text(titulo);

        // adicionar classe open
        estaImagem.addClass("open");

        // remover classe open dos siblings
        if(estaImagem.siblings("open")){
            console.log(estaImagem);
            estaImagem.siblings().removeClass("open");
        }
    });
    
});