class Asteroide{
    constructor(canvasLargura, canvasAltura) {
        this.canvasLargura = canvasLargura;
        this.canvasAltura = canvasAltura;
        this.largura = 312*0.1;
        this.altura = 336*0.1;
        this.velocidade = 10;
        this.posicao = {
            x : Math.floor(Math.random() * this.canvasLargura),
            y : 0,
        };
        this.asteroideSprites = this.getImage("src/assets/imagens/asteroide.png");
        this.sx = 0;
        this.framesContador = 8;
    }

    getImage(src) {
        const imagem = new Image();
        imagem.src = src;
        return imagem;
    }
    moverBaixo() {
        this.posicao.y += this.velocidade;
    }

    desenhar(ctx) {
        ctx.drawImage(
            this.asteroideSprites,
            this.sx, 0,
            312, 336,
            this.posicao.x, this.posicao.y,
            this.largura, this.altura,
        )
        this.update();
    }

    update(){
        if(this.framesContador == 0){
            if(this.sx == 312){
                this.sx = 0;
            }
            else{
                this.sx += 312;
            }
        
            this.framesContador = 8;
        }
        this.framesContador--;
        this.moverBaixo();
    }

    atingiuBordaInferior(){
        return this.posicao.y > this.canvasAltura
    }

}

export default Asteroide;