// Variaveis
const canvasElement = document.querySelector("canvas")
const canvasContext = canvasElement.getContext("2d")

const lineWidth = 15 // Largura da linha do meio do campo

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

    canvasContext.fillStyle = "#ffffff" //Escolhe a cor da linha do meio do campo

    //Definição da linha do meio do campo

    const x = window.innerWidth / 2 - lineWidth / 2
    const y = 0 
    const w = lineWidth // largura 
    const h = window.innerHeight //Altura 
    
    canvasContext.fillRect(x, y, w, h) 
}

setup()
draw()