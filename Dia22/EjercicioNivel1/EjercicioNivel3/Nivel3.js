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
        tagDetails.style.display = 'inline-block'
        tagDetails.style.position = 'relative'
        tagDetails.style.paddingLeft = '50%'
        tagDetails.style.height = 'auto'
        Object.assign(tagDetails.style, {
            display: 'inline-block',
            position: 'relative',
            paddingLeft: '45%'
        })
    })

    tagPStatus.textContent = asabenehChallenges2020.challenges[i].status

    Object.assign(tagPStatus.style, {
        textAlign: 'center',
        display: 'inline',
        position: 'absolute',
        left: '80%',
        margin: '0px',
        padding: '0px',
        top: 'auto',

    })


    tagA.href = asabenehChallenges2020.challenges[i].githubUrl
    tagA.target = '_blank'
    tagA.textContent = asabenehChallenges2020.challenges[i].name
    Object.assign(tagA.style, {
        display: 'block',
        position: 'relative',
        width: '250px',
        top: '10px'
    })

    if (tagPStatus.textContent == 'Done') {
        tagDivChild.style.backgroundColor = 'green'
    } else if (tagPStatus.textContent == 'Ongoing') {
        tagDivChild.style.backgroundColor = 'yellow'
    } else {
        tagDivChild.style.backgroundColor = 'red'
    }


    //* Atributos tagDivChild
    Object.assign(tagDivChild.style, {

        position: 'relative',
        textAlign: 'left',
        marginBottom: '5px',
        padding: '20px 0',
        height: 'auto',
        alignItems: 'center',
        width: '900px',
        left: 'auto'


    })

    //* Atributos tagDivContainer
    Object.assign(tagDivContainer.style, {
        position: 'relative',
        top: '20px',
      
        margin: '0 auto',
        maxWidth: '900px'
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
const tagPDescripcion = document.createElement('p')
const tagDivTtitlesSkills = document.createElement('div')
const tagDivTitles = document.createElement('div')
const tagDivSkills = document.createElement('div')
const tagDivQualifi = document.createElement('div')


tagDivTtitlesSkills.style.Width = '100%'
//texto de asabeneh yetahen
tagH2.textContent = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName
tagH2.style.paddingTop = '20px'


// Iconons 
asabenehChallenges2020.author.socialLinks.forEach(elemento => {
    tagDivIcons.innerHTML += elemento.fontawesomeIcon
    tagDivIcons.style.fontSize = '60px'
})

//Primer parrafo con la info del yeta
tagPDescripcion.textContent = 'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my Linkedin or Github profile. Thank you so much for joining in my quest of changing everyone to developer'
Object.assign(tagPDescripcion.style, {
    width: '700px',
    display: 'inline-block'
})

// Creacion de titles y añadir su contenido
const tagTitiless = document.createElement('p')
tagTitiless.textContent = 'Titles'

tagDivTitles.appendChild(tagTitiless)

asabenehChallenges2020.author.titles.forEach(elemento => {
    const tagTitiles = document.createElement('p')

    tagTitiles.style.display = 'inline-block'
    tagTitiles.textContent = elemento[0].concat(elemento[1])
    Object.assign(tagTitiles.style,{
        display: 'inline-block',
        margin: '0px',
        paddingBottom: '6px'
    })

    tagDivTitles.appendChild(tagTitiles)
})

// Creacion de skills y añadir su contenido
const tagSkillsitas = document.createElement('p')
tagSkillsitas.textContent = 'Skills'

tagDivSkills.appendChild(tagSkillsitas)


asabenehChallenges2020.author.skills.forEach(elemento => {
    const tagSkills = document.createElement('p')

    tagSkills.style.display = 'inline-block'
    tagSkills.textContent = '✅' + elemento
    Object.assign(tagSkills.style,{
        display: 'inline-block',
        margin: '0px',
        paddingBottom: '6px'
    })

    tagDivSkills.appendChild(tagSkills)
})


// Creacion de quali y añadir su contenido
const tagQualis = document.createElement('p')
tagQualis.textContent = 'Qualifications'

tagDivQualifi.appendChild(tagQualis)


const tagQual1 = document.createElement('p')


Object.assign(tagQual1.style,{
    display: 'inline-block',
    margin: '0px',
    paddingBottom: '6px'
})
tagQual1.textContent = '📖' + asabenehChallenges2020.author.qualifications[0]
tagDivQualifi.appendChild(tagQual1)
for (i = 1; i < 4; i++) {
    const tagQual = document.createElement('p')
    tagQual.textContent = '👨🏾‍🎓' + asabenehChallenges2020.author.qualifications[i]
    Object.assign(tagQual.style,{
        display: 'inline-block',
        margin: '0px',
        paddingBottom: '6px'
    })

    tagDivQualifi.appendChild(tagQual)
}



// Estilo de los divs contenedores de los 3 anteriores
Object.assign(tagDivQualifi.style, {
    textAlign: 'left',
    display: 'inline-block',
    margin: '0 auto',
    maxWidth: '200px'
    
})





Object.assign(tagDivSkills.style, {
    textAlign: 'left',
    display: 'inline-block',
    margin: '0 auto',
    maxWidth: '200px'
})

Object.assign(tagDivTitles.style, {
    textAlign: 'left',
    display: 'inline-block',
    margin: '0 auto',
    maxWidth: '150px'
})


//apendizar todo 

tagDivTtitlesSkills.appendChild(tagDivTitles)
tagDivTtitlesSkills.appendChild(tagDivSkills)
tagDivTtitlesSkills.appendChild(tagDivQualifi)
tagDiv.appendChild(tagH2)
tagDiv.appendChild(tagDivIcons)
tagDiv.appendChild(tagPDescripcion)
tagDiv.appendChild(tagDivTtitlesSkills)

//darle paddin a los iconos 
const tagI = document.querySelectorAll('i')
tagI.forEach(elemento => elemento.style.padding = '10px')


//!parte 4, las keywords

const divKeywords = document.createElement('div')
Object.assign(divKeywords.style,{
   
    position: 'relative',
        top: '20px',
      
        margin: '0 auto',
        maxWidth: '900px'
    
    
})

asabenehChallenges2020.keywords.forEach(elementos => {
    const tagPKeyWords = document.createElement('p')
    tagPKeyWords.textContent = '# ' + elementos 
    divKeywords.appendChild(tagPKeyWords)
    Object.assign(tagPKeyWords.style,{
        
        position: 'relative',
        border: 'hidden',
        borderRadius: '10px',
        backgroundColor: cambioColor(),
        margin: '8px',
        width:'auto',
        display: 'inline-block'
    })
    
})




tagDiv.appendChild(divKeywords)