

function vinDisel(){
    var imagem= document.getElementById("imagememegerada")
    imagem.src='./imagens/download.jpeg'
}


function CaradoPanico(){
    var imagem= document.getElementById("imagememegerada")
    imagem.src='./imagens/maxresdefault (1).jpg'
}


function Irineu(){
    var imagem= document.getElementById("imagememegerada")
    imagem.src='./imagens/maxresdefault.jpg'
}

function escrever(){
	console.log(document.getElementById("input-text").value)
    document.getElementById("text-header").innerHTML=(document.getElementById("input-text").value)

}