//efeito de esconder formulário de cadastro

//comando de inicializar o javascript com jquery

//se a função fosse escrita com javascript seria assim:
//    document.getElementById("botao-cadastrar").click()

//com Jquery fica assim

$(document).ready(function(){



    $("#botao-cadastrar").click(function(){

        //o slideToggle faz com que tenha 2 opções de aparecer e desaparecer o item. Dependerá de como esle já estiver.
        //Se usar o "show" toda vez que clica no botão irá aparecer. O "hide" irá fazer ele esconder.
        $("#form-cadastrar").slideToggle("slow");
        
        //será feito função para desaparecer o login quando o formulário estiver aparecendo
        $("#section-login").slideToggle("slow");

        //botão cadastrar fazer sumir
        $("#botao-cadastrar").hide();
     });

});
