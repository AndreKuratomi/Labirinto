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
            filhos.dataset.column = j;
            filhos.dataset.row = i;
            filhos.id = 'start';
            linha.appendChild(filhos);
        }
        if (map[i][j] === " ") {
            let filhos = document.createElement('div');
            filhos.dataset.column = j;
            filhos.dataset.row = i;
            filhos.classList = 'via';
            linha.appendChild(filhos);
        }
        if (map[i][j] === "W") {
            let filhos = document.createElement('div');
            filhos.dataset.column = j;
            filhos.dataset.row = i;
            filhos.classList = 'parede';
            linha.appendChild(filhos);
        }
        if (map[i][j] === "F") {
            let filhos = document.createElement('div');
            filhos.dataset.column = j;
            filhos.dataset.row = i;
            filhos.id = 'chegada';
            linha.appendChild(filhos);
        }
    }
    repositorio.appendChild(linha);
}

//Criando o jogador e acoplando-o:
const start = window.document.getElementById('start');
const jogador = window.document.createElement('div');
jogador.id = "jogador";
jogador.dataset.column = 0;
jogador.dataset.row = 9;
start.appendChild(jogador);


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
// FUTURAMENTE
// const avisos3 = window.document.getElementById('labyrinth');
// const derrota = window.document.createElement('div');
// derrota.innerText = "Pois é, a frase de entrada continua valendo...! MUAHAHAHAHAHAHAHAAAAA!";
// derrota.classList = "avisos";
// derrota.id = "derrota";
// avisos3.appendChild(derrota);

const avisos4 = window.document.getElementById('labyrinth');
const vitoria = window.document.createElement('div');
vitoria.innerText = "Puxa vida, conseguiu...! PARABÉNS!";
vitoria.classList = "avisos";
vitoria.id = "vitoria";
avisos4.appendChild(vitoria);


//MOVIMENTAÇÃO:

const chegada = window.document.getElementById('chegada');

document.addEventListener('keydown', (evt) => {
    const keyName = evt.key;
    let row = Number(jogador.dataset.row);
    let column = Number(jogador.dataset.column);

    if (keyName === "ArrowDown") {
        entrada.style.display = "none";
        row += 1;
        let movimento = window.document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
        if (movimento.className === 'via') {
            parada.style.display = "none";
            jogador.dataset.row = row;
            movimento.appendChild(jogador);
        }
        else if (movimento.className === 'parede') {
            parada.style.display = "block";
        }
    }
    
    if (keyName === "ArrowUp") {
        entrada.style.display = "none";
        row -= 1;
        let movimento = window.document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
        if (movimento.className === 'via') {
            parada.style.display = "none";
            jogador.dataset.row = row;
            movimento.appendChild(jogador);
        }
        else if (movimento.className === 'parede') {
            parada.style.display = "block";
        }
    }

    if (keyName === "ArrowRight") {
        entrada.style.display = "none";
        column += 1;
        let movimento = window.document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
        if (movimento.className === 'via') {
            parada.style.display = "none";
            jogador.dataset.column = column;
            movimento.appendChild(jogador);
        }
        else if (movimento.className === 'parede') {
            parada.style.display = "block";
        }
        else if (movimento.id === 'chegada') {
            const keyName = !evt.key;
            //invalidar teclas
            movimento.appendChild(jogador);
            parada.style.display = "none";
            vitoria.style.display = "block";
        }
    }
      
    if (keyName === "ArrowLeft") {
        entrada.style.display = "none";
        column -= 1;
        let movimento = window.document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
        if (movimento.className === 'via') {
            jogador.dataset.column = column;
            movimento.appendChild(jogador);
            parada.style.display = "none";
        }
        else if (movimento.className === 'parede') {
            parada.style.display = "block";
        }
    }
});
// FUTURAMENTE
//TEMPO DE MOVIMENTAÇÂO
// const failLockedUser = () => {
//     let laugh = document.createElement("audio");
//     if (laugh.canPlayType("audio/mpeg")) {
//         laugh.setAttribute("src","./assets/soundEffects/single-falling-chip.mp3")
//     }

//     laugh.play();
// }
//tempo para alcançar a chegada: 60000