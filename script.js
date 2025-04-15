// Variaveis
const canvasElement = document.querySelector("canvas")
const canvasContext = canvasElement.getContext("2d")
const lineWidth = 15 // Largura da linha do central do campo

const filed = {
    w: window.innerWidth, //Largura
    h: window.innerHeight, //Altura
    draw: function () {
        canvasContext.fillStyle = "#286047" //Escolhe a cor do campo
        canvasContext.fillRect(0, 0, this.w, this.h) //Extensão do campo
    }
}

const line = {
    w: 15, //Largura
    h: filed.h, //Altura
    draw: function () {
        canvasContext.fillStyle = "#ffffff" //Escolhe a cor da linha do central do campo

        //Definição da linha do central do campo

        const x = filed.w / 2 - this.w / 2
        const y = 0 
        const w = this.w // largura 
        const h = this.h //Altura 

        canvasContext.fillRect(x, y, w, h) //desenha linha central
    }
}

function setup(){
    //Definição de propiedades

    //largura da tela
    canvasElement.width = canvasContext.width = filed.w

    //Altura da tela
    canvasElement.height = canvasContext.height = filed.h
}

//Desenhar componentes

function draw(){

    filed.draw()

    line.draw()


    //Desenhar raquete da esquerda

    canvasContext.fillRect(10, 400, lineWidth, 200) //X, Altura que vai seguir o mouse, largura da linha central, Altura da raquete

    //desenhar a raquete da direita
    
    canvasContext.fillRect(innerWidth - lineWidth - 10, 400, lineWidth, 200) //X, Altura que vai seguir o mouse, largura da linha central, Altura da raquete

    //desenhar bola
    canvasContext.beginPath() 
    canvasContext.arc(500, 300, 20, 0 , 2 *Math.PI, false) //X, Y, Raio, Arco
    canvasContext.fill()

    //desenhar Placar
    canvasContext.font = "bold 72px Arial"
    canvasContext.textAlign = 'center'
    canvasContext.textBaseline = 'top'
    canvasContext.fillStyle = "#01341D"
    canvasContext.fillText('0', window.innerWidth / 4, 50) // 25% da largura da janela. 50 = Y 50 pixels do topo.
    canvasContext.fillText('0', window.innerWidth / 4 + window.innerWidth / 2 , 50) // Posição X: (25% + 50%) da largura da tela = 75% da largura da janela.


}

setup()
draw()