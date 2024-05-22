$(document).ready(function(){
    var title = $("dt");
    var descrition = $("dd");
    var question = $("dl");

    // esconder resposta 
    descrition.hide();

    question.on("click", function(){
        
        // abrir ou fechar a pergunta selecionada 
        if($(this).is(".open")){    // se ja estiver aberta faz isto
            $(this).find("dd").fadeOut(function(){
                $(this).closest("dl").removeClass("open");
            });
        }
        else {      // se nao esta aberta faz isto
            $(this).find("dd").fadeIn(function(){
                $(this).closest("dl").addClass("open");
            });
        }
        

        // fechar outras perguntas abertas 
        if($(this).siblings(".open")){
            $(this).siblings(".open").find("dd").slideUp(function(){
                $(this).closest(".open").removeClass("open");
            });
        }

    });
});