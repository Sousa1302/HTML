$(document).ready(function(){
    $("form").on("submit",function(event){
        // prevenir que pagina do action seja carregada
        event.preventDefault();

        // guardar array com respostas selecionadas
        var answers = $("input:checked");
        var matrix = {
            "quest1":"ford",
            "quest2":"c++",
            "quest3":"nike",
            "quest4":"uncharted",
            "quest5":"banana",
            "quest6":"arroz"
        };
        
        var correct = 0;
        var wrong = 0;

        answers.each(function(){
            var thisV = $(this);
            var quest = thisV[0]["name"];  // questx, num da pergunta
            var answ = thisV[0]["id"];     // resposta 
            console.log(quest + " - " + answ);
            
            // validar se as respostas correspondem a matrix
            if (matrix[quest] == answ) {
                console.log("CORRETO");
                correct++;
                thisV.addClass("correct");
            } else {
                console.log("ERRADO");
                wrong++;
                thisV.addClass("wrong");
            }
        });
        $("form").append("Tem " + correct + " respostas corretas e " + wrong +  " respostas erradas !");

        // console.log("Correct answers: " + correct);
        // console.log("Wrong answers: " + wrong);
    })
});