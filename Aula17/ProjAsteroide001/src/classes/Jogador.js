import Projetil from "./Projetil.js";

class Jogador{
    constructor() {
        this.largura = 32*3;
        this.altura = 32*3;
        this.velocidade = 10;
        this.posicao = {
            x : 500,
            y : 500
        };
        this.naveSprites = this.getImage("src/assets/imagens/Naves/Saboteur.png");
        this.sx = 0;
        this.framesContador = 8;
    }

    getImage(src) {
        const imagem = new Image();
        imagem.src = src;
        return imagem;
    }

    moverEsquerda() {
        this.posicao.x -= this.velocidade;
    }

    moverDireita() {
        this.posicao.x += this.velocidade;
    }

    moverCima() {
        this.posicao.y -= this.velocidade;
    }

    moverBaixo() {
        this.posicao.y += this.velocidade;
    }

    desenhar(ctx) {
        ctx.drawImage(
            this.naveSprites,
            this.sx, 0,
            32, 32,
            this.posicao.x, this.posicao.y,
            this.largura, this.altura,
        )
        this.update();
    }

    atirar(projeteis){
        const p = new Projetil(
            {
                x: this.posicao.x + this.largura / 2 - 2,
                y: this.posicao.y,
            },
            -10
        )
        projeteis.push(p)
    }

    update(){
        if(this.framesContador == 0){
            if(this.sx == 96){
                this.sx = 0;
            }
            else{
                this.sx += 32;
            }
        
            this.framesContador = 8;
        }
        this.framesContador--;
    }

}

export default Jogador;