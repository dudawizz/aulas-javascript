'use strict'

// Seleção dos elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video");

// Criar um objeto de áudio referenciando o arquivo
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

// Criando arquivo de imagem referenciando o arquivo
const imagem = new Image();
imagem.src = "wow.gif";

/* Se quiser criar referência de video via JS
const video = document.createElement("video");
video src = "pink-floyd.mp4";
video.width = 354;
video.height = 196;
*/

/* // Criando um ouvinte de evento (Event Listener):
O primeiro parâmetro do addEventlistener é o tipo de evento que queremos "ouvir/monitorar". O segundo parâmetro é a função (conhecida como callback) responsável por executar ações no momento em que o evento acontecer.*/
exemplo01.addEventListener("click", function (){
    // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Beleza! Evento acionado, função executada :)"
    
    // Ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // Modificando a fonte do body
    pagina.style.fontFamily = "Arial";

    // Executando o áudio
    efeitoSonoro.play();

    mensagem.insertAdjacentElement("afterend", imagem);

    // Remover o atributo hidden (isso fará o video aparecer)
    video.removeAttribute("hidden");
    video.play(); // Reproduzir o video
});


/* Exemplo Modo Noturno */
const divContainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");

botao.addEventListener("click", function(){
    /* Usamos toggle para alternar entre os estados da classe (aplicada e não aplicada) */
    pagina.classList.toggle("noturno");
    divContainer.classList.toggle("noturno");

    /* 1) Aplicar um efeito de mudança de cores suaves*/
    /* 2) Fazer botão mudar de texto, ou seja, iniciar com o texto "Ativar e troca para texto "Desativar" conforme o que estiver acontecendo. */
    
    pagina.style.transition = "1s";
    divContainer.style.transition = "1s"
    // transição para modo claro e escuro

    function mudarTexto(){
        var botao = document.getElementById("noturno")

        if (botao.innerText = "Ativar" ) {
            
        }

    }

});