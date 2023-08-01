const boton = document.querySelector('.presionar')
const masa = document.querySelector('.masa')
const seleccionar = document.querySelector('.seleccionar')
boton.addEventListener('click', () => {
       const tagP = document.createElement('p')
      
       for(i=0;i<1;i++){
        tagP.textContent = ''
        tagP.textContent = masa.value * seleccionar.value
        document.body.appendChild(tagP)
        
       }
    
    })
