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
    
    
    // quando o formulario for submetido 
    $("form").on("submit", function(event){
        console.log("submit");

        // gravar valores de forms em variaveis
        $("#loader").hide();
        var username = $("input#username").val();
        var password = $("input#password").val();
        var nome = $("input#nome").val();
        var idade = $("input#idade").val();
        console.log(username);
        console.log(password);
        console.log(nome);
        console.log(idade);

        // construir frse numa var 
        var frase = "Ola " + nome + " , o seu username " + username + " , com data de nascimento " + idade + " !";
        console.log(frase);

        
        // prevenir acao default do browser = que a pagina seja recarregada 
        event.preventDefault();
        
        // mostrar loader
        $("#loader").fadeIn(3000, function(){           // callback
            console.log("FadeIn completo");
            $(this).find("span").text("Registo Efetuado");

            $("#loader").append("<p>" + frase +"</p>");
            
            // funcionamente do butao fechar
            $(this).find('.close').on("click", function(){
                $("#loader").fadeOut(500);
            })
        });
        
    });

});






