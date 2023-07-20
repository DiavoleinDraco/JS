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

classWrapper.style.position = 'relative';
classWrapper.style.top = '50%';
classWrapper.style.left = '50%'
tagBody.style.fontFamily = 'Roboto Condensed'



const contenido = tagH1.textContent.split(' ')
const ultimaPalabra = contenido.pop()
tagH1.innerHTML = contenido.join(' ') + '<span style="font-size: 3em;">' + ultimaPalabra + ' </span>' 
const span = document.querySelector('span')
setInterval(() => {
    span.style.color = cambiaColor()
}, 1000)


