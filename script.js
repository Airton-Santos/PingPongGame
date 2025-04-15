// Variaveis
const canvasElement = document.querySelector("canvas")
const canvasContext = canvasElement.getContext("2d")

function setup(){
    //Definição de propiedades

    //largura da tela
    canvasElement.width = canvasContext.width = window.innerWidth

    //Altura da tela
    canvasElement.height = canvasContext.height = window.innerHeight
}

function draw(){
    canvasContext.fillStyle = "#286047" //Escolhe a cor do campo
    canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight) //Extensão do campo
}

setup()
draw()