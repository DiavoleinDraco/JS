const tagH1 = document.querySelector('h1')
const tagP = document.querySelector('p')
Object.assign(document.body.style,{
    position: 'relative',
    margin: '0 auto',
    maxWidth: '900px',
    textAlign: 'center',
    top: '35vh',
    fontFamily: 'Handjet',
    texxShadow: '5px 5px 5px 5px rgb(200,200,200)',
})
Object.assign(tagH1.style,{
   padding: '10px',
   border: '2px solid none',
   fontSize: '60px',
   boxShadow: '5px 5px 5px 5px rgb(200,200,200)'
})

document.body.addEventListener('keydown', e => {
    const word = document.createElement('span')
   
    if(e.keyCode === 32){
        word.textContent = 'Espacio'
        
    }else{
        word.textContent = e.key
    }
    word.style.color = 'rgb(100,180,100)'

    tagH1.innerHTML = 'Tu presionaste ' + `<span>${word.textContent}</span>`
    const tagspan = document.querySelector('span')
    tagspan.style.color = 'rgb(100,180,100)'
   tagP.innerHTML = e.keyCode
   Object.assign(tagP.style,{
    display: 'inline',
    padding: '10px 15px 30px 15px',
    border: '2px solid none',
    fontSize: '120px',
    boxShadow: '5px 5px 5px 5px rgb(200,200,200)',
    color: 'rgb(100,180,100)'
 })
})

