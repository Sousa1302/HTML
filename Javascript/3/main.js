$(document).ready(function(){
    $("form").on("submit",function(event){
        // prevenir que pagina do action seja carregada
        event.preventDefault();

        // guardar array com respostas selecionadas
        var checked = $("input:checked");
        var matrix = {
            "quest1":"ford",
            "quest2":"c++",
            "quest3":"nike",
            "quest4":"uncharted",
            "quest5":"banana",
            "quest6":"arroz"
        };
    })
})