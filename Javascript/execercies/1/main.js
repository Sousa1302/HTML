$(document).ready(function(){
    var colorCircles = $(".color-circle");
    var colorImages = $(".color-image");
    var mainImage = $("#mainImage");
    var frase = $("h2");
    var placeholder = frase.find("span");

    // Esconder todas as imagens de cor inicialmente
    colorImages.hide();

    // Evento de clique nos círculos de cor
    colorCircles.on("click", function(){
        var selectedCircle = $(this);
        var imageId = selectedCircle.data("img");
        var selectedImage = $("#" + imageId);

        console.log("Clicked on a circle with image ID:", imageId); // Adicione esta linha para depuração

        // Esconder a imagem principal e todas as imagens de cor
        mainImage.hide();
        colorImages.fadeOut();

        // Mostrar apenas a imagem selecionada
        selectedImage.fadeIn();

        // Adicionar classe 'open' ao círculo selecionado
        selectedCircle.addClass("open");

        // Remover a classe 'open' dos círculos irmãos
        selectedCircle.parent().siblings().find('.color-circle').removeClass("open");
    });

    $(".img").on("click", function(e){
        e.preventDefault();
        
        var estaImagem = $(this);
        var titulo = estaImagem.find("h4").text();

        placeholder.text(titulo);

        
    });
});
