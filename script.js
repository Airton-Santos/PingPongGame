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