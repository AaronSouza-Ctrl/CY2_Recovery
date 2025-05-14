class Jogador{
    constructor() {
        this.largura = 32;
        this.altura = 32;
        this.velocidade = 10;
        this.posicao = {
            x : 500,
            y : 500
        };
        this.naveSprites = this.getImage('src/assets/imagens/nave.png');
        this.sx = 0;
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

    desenhar(ctx) {
        ctx.drawImage(
            this.naveSprites,
            this.sx, 0,
            32, 32,
            this.posicao.x, this.posicao.y,
            this.largura, this.altura
        )
    }

    atirar(){

    }

}

export default Jogador;