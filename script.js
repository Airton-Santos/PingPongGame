// Variaveis
const canvasElement = document.querySelector("canvas")
const canvasContext = canvasElement.getContext("2d")
const gapX = 10

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

    //desenhar a raquete da esquerda
const leftPaddle = {
    x: gapX,
    y: 400,
    w: line.w,
    h: 200,
    draw: function () {
        canvasContext.fillRect(this.x, this.y, this.w, this.h) //X, Altura que vai seguir o mouse, largura da linha central, Altura da raquete
    }
}

    //desenhar a raquete da direita
const rigthPaddle = {
    x: filed.w - line.w - gapX,
    y: 400,
    w: line.w,
    h: 200,
    draw: function () {
        canvasContext.fillRect(this.x, this.y, this.w, this.h) //X, Altura que vai seguir o mouse, largura da linha central, Altura da raquete
    }
}

const score = {
    human: 1,
    computer: 2,
    draw: function() {
        canvasContext.font = "bold 72px Arial"
        canvasContext.textAlign = 'center'
        canvasContext.textBaseline = 'top'
        canvasContext.fillStyle = "#01341D"
        canvasContext.fillText(this.human, filed.w / 4, 50) // 25% da largura da janela. 50 = Y 50 pixels do topo.
        canvasContext.fillText(this.computer, filed.w / 4 + window.innerWidth / 2 , 50) // Posição X: (25% + 50%) da largura da tela = 75% da largura da janela.

    }
}


const ball = {
    x: 300,
    y: 200,
    r: 20,
    speed: 5,
    _move: function () { //função para mover a bola
        this.x += 1 * this.speed
        this.y += 1 * this.speed
    },
    draw: function () {
        canvasContext.fillStyle = "#ffffff" //Escolhe a cor da bola
        canvasContext.beginPath() 
        canvasContext.arc(this.x, this.y, this.r, 0 , 2 *Math.PI, false) //X, Y, Raio, Arco
        canvasContext.fill()

        this._move()
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

    filed.draw() //desenhando campo com objeto

    line.draw() //desenhando a linha com objeto

    leftPaddle.draw() //desenhando raquete esquerda com objeto

    rigthPaddle.draw() //desenhando raquete esquerda com objeto

    score.draw() //desenhar placar com objeto

    ball.draw() //desenhando a bola com objeto

}

window.animateFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||  
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60)
        }
    )
})()

function main() {
    animateFrame(main)
    draw()
}

setup()
main()
