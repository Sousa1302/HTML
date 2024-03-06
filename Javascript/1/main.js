/**
 *  Codigo principal do jQuery
 */

$(document).ready(function(){
    // mostra texto na consola , quando o documento esta pronto 
    console.log("O documento esta pronto");

    $("input, textarea").on("focusin focusout",function(event){
        // $(this) -> refere-se ao elemento selecionado nesta function
        $(this).toggleClass("border-form");
        // mostra dealhes do evento na consola
        console.log(event);
    });
    
    $("#loader").hide();

    // quando o formulario for submetido 
    $("form").on("submit", function(event){
        console.log("submit");
        // prevenir acao default do browser = que a pagina seja recarregada 
        event.preventDefault();
        // mostrar loader
        $("#loader").fadeIn(3000, function(){           // callback
            console.log("FadeIn completo");
            $(this).find("span").text("Registo Efetuado");
            // funcionamente do butao fechar
            $(this).find('.close').on("click", function(){
                $("#loader").fadeOut(500);
            })
        });
        
    });

});






