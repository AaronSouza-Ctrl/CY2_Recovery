import Jogador from "./classes/Jogador.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false;

const jogador = new Jogador();

function jogoLoop(){
    jogador.desenhar(ctx);
    requestAnimationFrame(jogoLoop);
}

jogoLoop();