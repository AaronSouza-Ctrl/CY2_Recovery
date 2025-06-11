import Jogador from "./classes/Jogador.js";
import Asteroide from "./classes/Asteroide.js";
import Estrelas from "./classes/Estrelas.js";

const teclas = {
    esquerda: false,
    direita: false,
    cima: false,
    baixo: false,
    tiro: {
        pressionada: false,
        liberada: true,
    }
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
        console.log(asteroides)
    }
}
const apagarAsteroides = () => {
    asteroides.forEach((asteroide, index) => {
        if(asteroide.atingiuBordaInferior()) {
            asteroides.splice(index, 1);
        }
    })
}
const estrelas = []
const gerarEstrelas = () => {
    for (let i = 0; i < 100; i++) {
        estrelas.push(new Estrelas(canvas.width, canvas.height));
    }
}
const desenharEstrelas = () => {
    estrelas.forEach((star) => {
        star.desenhar(ctx);
        star.update();
    });
}
const jogadorProjeteis = [];
const desenharProjeteis = () => {
    jogadorProjeteis.forEach((projetil) => {
        projetil.desenhar(ctx);
        projetil.update();
    })
}
const apagarProjeteis = () => {
    jogadorProjeteis.forEach((projetil, index) => {
        if(projetil.posicao.y < 0) {
            jogadorProjeteis.splice(index, 1);
        }
    })
}

function jogoLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jogador.desenhar(ctx);
    desenharAsteroides(ctx);
    apagarAsteroides();
    desenharProjeteis(ctx);
    apagarProjeteis();
    desenharEstrelas(ctx);
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
    if(teclas.tiro.pressionada && teclas.tiro.liberada){
        jogador.atirar(jogadorProjeteis);
        teclas.tiro.liberada = false
    }
    requestAnimationFrame(jogoLoop);
}

addEventListener('keydown', (event) => {
    const tecla = event.key
    if(tecla == "a") teclas.esquerda = true
    if(tecla == "d") teclas.direita = true
    if(tecla == "w") teclas.cima = true
    if(tecla == "s") teclas.baixo = true
    if(tecla == " ") teclas.tiro.pressionada = true
});

addEventListener('keyup', (event) => {
    const tecla = event.key
    if(tecla == "a") teclas.esquerda = false
    if(tecla == "d") teclas.direita = false
    if(tecla == "w") teclas.cima = false
    if(tecla == "s") teclas.baixo = false
    if(tecla == " ") {
        teclas.tiro.pressionada = false
        teclas.tiro.liberada = true
    }
});

setInterval( () => {
    const objetoAsteroide = new Asteroide(canvas.width, canvas.height);
    asteroides.push(objetoAsteroide);
}, 100)

gerarEstrelas();
jogoLoop();