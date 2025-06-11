class Projetil{
    constructor(posicao, velocidade) {
        this.largura = 5;
        this.altura = 20;
        this.velocidade = velocidade;
        this.posicao = posicao;
    }

    desenhar(ctx) {
        ctx.fillStyle = "magenta"
        ctx.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura);
    }

    update(){
    this.posicao.y += this.velocidade
    }
}

export default Projetil;