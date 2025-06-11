class Estrelas{
    constructor(canvasLargura, canvasAltura) {
        this.canvasLargura = canvasLargura;
        this.canvasAltura = canvasAltura;
        this.largura = 2;
        this.altura = 2;
        this.velocidade = (Math.random() * 0.4 + 0.1);
        this.posicao = {
            x : Math.random() * canvasLargura,
            y : Math.random() * canvasAltura,
        };
        this.color = "white";
    }

    desenhar(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura);
    }

    update() {
        if(this.posicao.y > this.canvasAltura + this.altura){
            this.posicao.y = 0;
            this.posicao.x = Math.random() * this.canvasLargura;
            this.velocidade = (Math.random() * 0.4 + 0.1);
        };
        this.posicao.y += this.velocidade;
    }

}

export default Estrelas;