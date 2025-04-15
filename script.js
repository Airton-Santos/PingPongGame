// Variaveis
const canvasElement = document.querySelector("canvas")
const canvasContext = canvasElement.getContext("2d")

const lineWidth = 15 // Largura da linha do central do campo

function setup(){
    //Definição de propiedades

    //largura da tela
    canvasElement.width = canvasContext.width = window.innerWidth

    //Altura da tela
    canvasElement.height = canvasContext.height = window.innerHeight
}

//Desenhar componentes

function draw(){
    canvasContext.fillStyle = "#286047" //Escolhe a cor do campo
    canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight) //Extensão do campo

    canvasContext.fillStyle = "#ffffff" //Escolhe a cor da linha do central do campo

    //Definição da linha do central do campo

    const x = window.innerWidth / 2 - lineWidth / 2
    const y = 0 
    const w = lineWidth // largura 
    const h = window.innerHeight //Altura 

    canvasContext.fillRect(x, y, w, h) //desenha linha central


    //Desenhar raquete da esquerda

    canvasContext.fillRect(10, 400, lineWidth, 200) //X, Altura que vai seguir o mouse, largura da linha central, Altura da raquete

    //desenhar a raquete da direita
    
    canvasContext.fillRect(innerWidth - lineWidth - 10, 400, lineWidth, 200) //X, Altura que vai seguir o mouse, largura da linha central, Altura da raquete
}

setup()
draw()