const cambiaColor = () =>{
    let rgb = []
    for(i=0;i<3;i++){
        rgb.push(Math.round(Math.random()*255))
    }
   return `rgb(${rgb})`
}

const classWrapper = document.querySelector('.wrapper')
const tagH1 = document.querySelector('h1')
const tagBody = document.querySelector('body')
const tagUl = document.querySelector('ul')
const tagLi = document.querySelectorAll('li')
const tagH2 = document.querySelector('h2')

tagH2.style.textDecoration = 'underline'
tagH2.style.fontSize = '35px'
tagUl.style.listStyle = 'none'

classWrapper.style.position = 'relative';
classWrapper.style.textAlign = 'center'
tagBody.style.fontFamily = 'Roboto Condensed'



const contenido = tagH1.textContent.split(' ')
const ultimaPalabra = contenido.pop()
tagH1.innerHTML = contenido.join(' ') + '<span class="hola"style="font-size: 3em;">' + ultimaPalabra + ' </span>' 
const span = document.querySelector('span')
setInterval(() => {
    span.style.color = cambiaColor()
}, 1000)

tagLi.forEach((elemento,i) => {
    elemento.style.backgroundColor = cambiaColor()
    elemento.style.textAlign = 'left'
    elemento.style.padding = '20px'
    elemento.style.display = 'inline-block'
    elemento.style.width = '900px'
})
tagLi[0].style.backgroundColor = 'rgb(0,250,50)'
tagLi[1].style.backgroundColor = 'rgb(200,250,0)'
for(i=2;i<tagLi.length;i++){
    tagLi[i].style.backgroundColor = 'rgb(250,0,50)'
}
const tiempoActual = () => {
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const hoy = new Date()
    let horaCompleta = `${hoy.getHours()}`,segundosCompletos = `${hoy.getSeconds()}`,minutosCompletos = `${hoy.getMinutes()}`
    if(hoy.getHours()<10){
       horaCompleta = `0${hoy.getHours()}`
    }
     if(segundosCompletos < 10){
        segundosCompletos = `0${hoy.getSeconds()}`
    }
     if(hoy.getMinutes() < 10){
        minutosCompletos = `0${hoy.getMinutes()}`
    }
    let TiempoFinal = `${meses[hoy.getMonth()]} ${hoy.getDate()}, ${hoy.getFullYear()} ${horaCompleta}:${minutosCompletos}:${segundosCompletos}`
    return TiempoFinal
}
let contenido1 = tagH2.textContent

setInterval(() => {
    tagH2.innerHTML = contenido1 + ' <br><span class="span1" style="text-decoration-style:none;font-size: 18px">' +  tiempoActual() +'</span>'
    const tagSpan = document.querySelectorAll('span')
    tagSpan[1].style.display = 'inline-block'
    tagSpan[1].style.paddingLeft = '60px'
    tagSpan[1].style.padding = '25px'
    tagSpan[1].style.marginTop = '30px'
tagSpan[1].style.backgroundColor = cambiaColor()
tagSpan[1].style.textDecoration = 'none'
},1000)
