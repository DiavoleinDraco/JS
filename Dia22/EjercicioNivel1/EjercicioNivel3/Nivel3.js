//! PRIMERA PARTE (HASTA LA PARTE DEL TIEMPO)

const cambioColor = () => {
    let array = []
    for (i = 0; i < 3; i++) {
        array.push(Math.round(Math.random() * 255))
    }
    return `rgb(${array})`
}

const tiempoActual = () => {
    const tiempo = new Date()
    let horaActual = `${tiempo.getHours()}`, minutoActual = `${tiempo.getMinutes()}`, segundoActual = `${tiempo.getSeconds()}`
    if (horaActual < 10) {
        horaActual = `0${tiempo.getHours()}`
    }
    if (minutoActual < 10) {
        minutoActual = `0${minutoActual}`
    }
    if (segundoActual < 10) {
        segundoActual = `0${segundoActual}`
    }

    return `${meses[tiempo.getMonth()]} ${tiempo.getDate()}, ${tiempo.getFullYear()} ${horaActual}:${minutoActual}:${segundoActual}`
}

const title = document.createElement('h1')
const span1 = document.createElement('span')
const tagBody = document.querySelector('body')
const textUnderline = document.createElement('p')
const span2 = document.createElement('span')
const tagDiv = document.querySelector('div')


textUnderline.textContent = '30DaysOfJavaScript Challege'
span1.textContent = 2023
title.textContent = 'Asabeneh Yetayeh challenges in'

textUnderline.style.textDecoration = 'underline'
span1.style.fontSize = '72px'
textUnderline.style.fontSize = '20px'
span2.style.padding = '6px'

Object.assign(tagBody.style, {
    textAlign: 'center',
    fontFamily: 'Rubik'

})

Object.assign(title.style, {
    display: 'inline-block',
    marginRight: '10px'
})

setInterval(() => {
    span2.textContent = tiempoActual()
    span2.style.backgroundColor = cambioColor()
    span1.style.color = cambioColor()
}, 1000)


tagDiv.appendChild(title)
tagDiv.appendChild(span1)
tagDiv.appendChild(textUnderline)
tagDiv.appendChild(span2)

//! PARTE 2 (LISTAS)
const tagDivContainer = document.createElement('div');

for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
    const tagDivChild = document.createElement('div')
    const tagA = document.createElement('a')
    const tagDetails = document.createElement('details')
    const tagSummary = document.createElement('summary')
    const separar = asabenehChallenges2020.challenges[i].name.split(' ')
    const tagPStatus = document.createElement('p')
    tagSummary.textContent = separar[3]


    asabenehChallenges2020.challenges[i].topics.forEach(elemento => {
        const tagDivChildDetails = document.createElement('p')
        tagDivChildDetails.textContent = elemento
        tagDetails.appendChild(tagDivChildDetails)
        tagDetails.style.display = 'block'
        tagDetails.style.paddingLeft = '50%'
    })

    tagPStatus.textContent = asabenehChallenges2020.challenges[i].status

    Object.assign(tagPStatus.style, {
        textAlign: 'center',
        display: 'inline-block',
        position: 'relative',
        left: '80%',
        margin: '0px',
        padding: '0px',
        top: 'auto',
        
    })


    tagA.href = asabenehChallenges2020.challenges[i].githubUrl
    tagA.target = '_blank'
    tagA.textContent = asabenehChallenges2020.challenges[i].name
    Object.assign(tagA.style, {
        position: 'relative',
        top: '10px'
    })
  
    if(tagPStatus.textContent == 'Done'){
        tagDivChild.style.backgroundColor = 'green'
    }else if(tagPStatus.textContent == 'Ongoing'){
        tagDivChild.style.backgroundColor = 'yellow'
    }else{
        tagDivChild.style.backgroundColor = 'red'
    }


    //* Atributos tagDivChild
    Object.assign(tagDivChild.style, {
        textAlign: 'left',
        marginBottom: '5px',
        padding: '20px 0',
        height: 'auto',
        alignItems: 'center',
      
    })

    //* Atributos tagDivContainer
    Object.assign(tagDivContainer.style, {
        position: 'relative',
        top: '20px',
        alignItems: 'center'
    })


    tagDetails.appendChild(tagSummary)
    tagDivChild.appendChild(tagA)
    tagDivChild.appendChild(tagDetails)
    tagDivChild.appendChild(tagPStatus)
    tagDivContainer.appendChild(tagDivChild);
}

const allDetails = document.querySelectorAll('details')
tagDiv.appendChild(tagDivContainer);

//! PARTE 3 
const tagH2 = document.createElement('h2')
const tagDivIcons = document.createElement('div')
tagH2.textContent =  asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName
tagDiv.appendChild(tagH2)

   asabenehChallenges2020.author.socialLinks.forEach(elemento => {
    tagDivIcons.innerHTML += elemento.fontawesomeIcon
    tagDivIcons.style.fontSize = '100px'
   })
   

tagDiv.appendChild(tagDivIcons)