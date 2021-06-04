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
const derrota = window.document.createElement('div');
derrota.innerText = "Pois é, a frase de entrada continua valendo...! MUAHAHAHAHAHAHAHAAAAA!";
derrota.classList = "avisos";
derrota.id = "derrota";
avisos2.appendChild(derrota);

const avisos3 = window.document.getElementById('labyrinth');
const vitoria = window.document.createElement('div');
vitoria.innerText = "Puxa vida, conseguiu...! PARABÉNS!";
vitoria.classList = "avisos";
vitoria.id = "vitoria";
avisos2.appendChild(vitoria);


//Movimentação:

// Orientação

// Escolha uma opção: 
//A) use um DIV absolutamente posicionado para representar a posição atual do jogador no labirinto, ou 
//B) faça o DIV do jogador ser anexado (appended) a uma célula DIV pelo mesmo motivo.

//Você precisa registrar (ou receber via solicitação) a posição atual do jogador no labirinto (índices de linha e de coluna). 
//Você pode fazer isso de uma entre várias maneiras. 

//Você poderia manter um registro persistente da posição do jogador em um, digamos, array ou objeto global cuja função é a de 
//registrar a posição atual do jogador. 
//Você poderia atualizar seu array de mapa constantemente para refletir o movimento do jogador (mover o "S" pelo mapa). 

//Você pode manter seus índices em atributos de dados em seu HTML e acessá-los através da propriedade DIV de jogador "parentElement" (no caso do 3B). 
//Ou você poderia fazer um pouco de matemática na posição atual do DIV do jogador na tela, relativo à posição inicial do elemento 
//de início na tela e ao tamanho das células (no caso do 3A).
// O movimento pode ser realizado de algumas maneiras diferentes: No caso do 3A, mude a posição absoluta do DIV do jogador. 
//Ou, no caso do 3B, faça o append do DIV do jogador ao próximo DIV de célula. 

//(Você poderia usar "document.querySelector()" e o seletor CSS de atributos para obter o próximo elemento de célula pelos índices 
//que denominou via atributos de dados.)

// Requisitos
// Configure um ou mais handlers de evento para mover seu DIV de jogador da mesma forma que fez nas avaliações anteriores sobre 
// eventos de teclado.
// Não permita que o jogador atravesse uma parede ou saia dos limites do labirinto.






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

