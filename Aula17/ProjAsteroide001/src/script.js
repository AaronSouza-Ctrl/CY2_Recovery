import Jogador from "./classes/Jogador.js";
import Asteroide from "./classes/Asteroide.js";

const teclas = {
    esquerda: false,
    direita: false,
    cima: false,
    baixo: false,
};
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false;

const jogador = new Jogador();
const asteroides = [];
const desenharAsteroides = () => {
    for(let i = 0; i < asteroides.length; i++){
        const asteroide = asteroides[i];
        asteroide.desenhar(ctx);
    }
}

function jogoLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jogador.desenhar(ctx);
    desenharAsteroides(ctx);
    if(teclas.esquerda){
        jogador.moverEsquerda();
    }
    if(teclas.direita){
        jogador.moverDireita();
    }
    if(teclas.cima){
        jogador.moverCima();
    }
    if(teclas.baixo){
        jogador.moverBaixo();
    }
    requestAnimationFrame(jogoLoop);
}

addEventListener('keydown', (event) => {
    const tecla = event.key
    if(tecla == "a") teclas.esquerda = true
    if(tecla == "d") teclas.direita = true
    if(tecla == "w") teclas.cima = true
    if(tecla == "s") teclas.baixo = true
});

addEventListener('keyup', (event) => {
    const tecla = event.key
    if(tecla == "a") teclas.esquerda = false
    if(tecla == "d") teclas.direita = false
    if(tecla == "w") teclas.cima = false
    if(tecla == "s") teclas.baixo = false
});

setInterval( () => {
    const objetoAsteroide = new Asteroide(canvas.width, canvas.height);
    asteroides.push(objetoAsteroide);
}, 100)

jogoLoop();