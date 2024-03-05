/**
 *  Codigo principal do jQuery
 */

$(document).ready(function(){
    console.log("O documento esta pronto");

    $("input").on("focus",function(event){
        // $(this) -> refere-se ao elemento selecionado nesta function
        $(this).addClass("border-form");
    });
        
    

});






