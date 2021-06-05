'use strict';

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWW W WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

//CRIANDO ELEMENTOS:

//Do array para HTML:
const repositorio = window.document.getElementById('labyrinth');

for (let i = 0; i < map.length; i++) {

    let linha = document.createElement('div');
    linha.id = 'lines';

    for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === "S") {
            let filhos = document.createElement('div');
            filhos.id = 'jogador';
            linha.appendChild(filhos);
        }
        if (map[i][j] === " ") {
            let filhos = document.createElement('div');
            filhos.id = 'via';
            linha.appendChild(filhos);
        }
        if (map[i][j] === "W") {
            let filhos = document.createElement('div');
            filhos.id = 'parede';
            linha.appendChild(filhos);
        }
        if (map[i][j] === "F") {
            let filhos = document.createElement('div');
            filhos.id = 'chegada';
            linha.appendChild(filhos);
        }
    }
    repositorio.appendChild(linha);
}

//Mensagens:
const avisos1 = window.document.getElementById('labyrinth');
const entrada = window.document.createElement('div');
entrada.innerText = "Deixai a esperança, vós que entrais... ou prove-nos o contrário!";
entrada.classList = "avisos";
entrada.id = "entrada";
avisos1.appendChild(entrada);

const avisos2 = window.document.getElementById('labyrinth');
const parada = window.document.createElement('div');
parada.innerText = "O jogador não é um fantasma para atravessar paredes, viu?";
parada.classList = "avisos";
parada.id = "parada";
avisos2.appendChild(parada);

const avisos3 = window.document.getElementById('labyrinth');
const derrota = window.document.createElement('div');
derrota.innerText = "Pois é, a frase de entrada continua valendo...! MUAHAHAHAHAHAHAHAAAAA!";
derrota.classList = "avisos";
derrota.id = "derrota";
avisos3.appendChild(derrota);

const avisos4 = window.document.getElementById('labyrinth');
const vitoria = window.document.createElement('div');
vitoria.innerText = "Puxa vida, conseguiu...! PARABÉNS!";
vitoria.classList = "avisos";
vitoria.id = "vitoria";
avisos4.appendChild(vitoria);


//MOVIMENTAÇÃO:
const jogador = window.document.getElementById('jogador');
// console.log(jogador)
const via = window.document.getElementById('via');
const parede = window.document.getElementById('parede');
const chegada = window.document.getElementById('chegada');

document.addEventListener('keydown', (evt) => {
    const keyName = evt.key;
    let i = 9;
    let j = 0;
    let player = map[i][j]
    if (keyName === "ArrowDown") {
        entrada.style.display = "none";
        (i += 1);
        console.log(player)
        if (player === ' ') {
            console.log('Davis')
            // ' '.id = "jogador";
        }
        if (player === 'W') {
            console.log('batatas')
            parada.style.display = "block";
        }
    }
    if (keyName === "ArrowUp") {
        entrada.style.display = "none";
        player = map[i++][j];
        console.log(player)
        if (player === ' ') {
            console.log('homero')
            // via.id = "jogador";
        }
        if (player === 'W') {
            console.log('banana')
            parada.style.display = "block";
        }

    } else if (keyName === "ArrowRight") {
        map[i][j+=5];
        console.log(player)
        console.log(j)
        entrada.style.display = "none";
        if (player === ' ') {
            console.log('banana')
            // via.id = "jogador";
        }
        else if (player === 'W') {
            parada.style.display = "block";
        }
        else if (player === 'F') {
            chegada.id = "jogador";
            vitoria.style.display = "block";
        }
  
      
    } else if (keyName === "ArrowLeft") {
        player = map[i][j-1]
        console.log(player)
        entrada.style.display = "none";
        if (player === " ") {
            via.id = "jogador";
        }
        if (player === 'W') {
            parada.style.display = "block";
        }
    }
});
  
//tempo para alcançar a chegada: 60000


// Para um desafio extra
// Adicione animações CSS3 para permitir que os jogadores se movam suavemente de uma célula para outra.
// Você pode adicionar os seguintes atributos CSS ao DIV que representa o jogador:
// animation-duration: 100ms;
// Você pode criar classes com animações CSS3 associadas representando as direções de movimento, por exemplo:
// @keyframes slideRight {
// from {margin-left: -33px;}
// to {margin-left: 0;}
// }
// .slideRight {animation-name: slideRight;}
// Você pode precisar remover a classe associada à animação anterior antes de poder adicioná-la de volta e executá-la novamente. Você pode achar útil usar window.setTimeout para especificar uma função para remover as classes de animação (depois de permitir um timeout suficiente para que a animação seja concluída).

