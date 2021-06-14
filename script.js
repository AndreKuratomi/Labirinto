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

//Função risada:
const failLockedUser = () => {
    let laugh = document.createElement("audio");
    if (laugh.canPlayType("audio/mpeg")) {
        laugh.setAttribute("src","./soundEffects/laugh-joker.mp3")
    }
    
    laugh.play();
}

//Mensagens:

const avisos0 = window.document.getElementById('labyrinth');
const instrucao = window.document.createElement('div');
instrucao.innerText = "Descubra como sair do labirinto o mais rápido possível antes que seja tarde!";
instrucao.id = "instrução";
avisos0.appendChild(instrucao);

const avisos1 = window.document.getElementById('labyrinth');
const entrada = window.document.createElement('div');
entrada.innerText = "Deixai a esperança, vós que entrais... ou prove-nos o contrário!";
entrada.classList = "avisos";
entrada.id = "entrada";
avisos1.appendChild(entrada);

const avisos2 = window.document.getElementById('labyrinth');
const parada = window.document.createElement('div');
parada.innerText = "(O jogador não é um fantasma para atravessar paredes, ok?)";
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

const avisos5 = window.document.getElementById('labyrinth');
const reload = window.document.createElement('div');
reload.innerHTML = "<button>RECOMECE O LABIRINTO!</button>";
reload.id = "reload";
avisos5.appendChild(reload);

reload.addEventListener('click', function() {
    location.reload();
});

//TEMPO DE MOVIMENTAÇÂO
const begin = window.document.getElementById('start');
const game = window.document.getElementById('chegada')

setTimeout(() => {
    entrada.style.display = "none";
    begin.classList = "parede";
}, 2500);
setTimeout(() => {
    begin.style.backgroundColor = "black";
    begin.classList = "parede";
}, 5000);
setTimeout(() => {
    game.style.backgroundColor = "green";
}, 10000);
setTimeout(() => {
    game.style.backgroundColor = "darkGreen";
}, 20000);
setTimeout(() => {
    game.style.borderTop = "2px #000" 
    game.style.borderBottom = "2px #000";
}, 21250);
setTimeout(() => {
    game.style.borderTop = "4px #000";
    game.style.borderBottom = "4px #000";
}, 22500);
setTimeout(() => {
    game.style.backgroundColor = "black";
    game.classList = "parede";
    instrucao.style.display = "none";
    failLockedUser();
}, 25000);
setTimeout(() => {
    derrota.style.display = 'block';
    reload.style.display = "block";
}, 30000);

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
            // const keyName = !evt.key;
            // invalidar teclas
            movimento.appendChild(jogador);
            instrucao.style.display = "none";
            parada.style.display = "none";
            vitoria.style.display = "block";
            reload.style.display = "block";
            // clearTimeout(late);
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
