const tagH4 = document.querySelector('h4')
const tagBody = document.querySelector('body')
const classWrapper = document.querySelectorAll('div')
tagH4.textContent = 'Total Number of countries: ' + countries.length
tagBody.style.textAlign = 'center'
tagBody.style.fontFamily = 'Roboto Condensed'
classWrapper[1].style.width = '100px'
classWrapper[1].style.display = 'flex'
classWrapper[1].style.flexWrap = 'wrap'
classWrapper[1].style.width = '60%'
classWrapper[0].style.position = 'relative'
classWrapper[0].style.left = '440px'




for (i = 0; i < countries.length; i++) {
    let tagP = document.createElement('p') 
    tagP.style.alignItems = 'center'
    tagP.style.justifyContent = 'center'
    tagP.style.display = 'flex'
    tagP.style.margin = '20px'
    tagP.style.padding = '90px 30px'
    tagP.style.height = '10px'
    tagP.style.width = '100px'
    tagP.style.border = 'solid grey 2px'
    tagP.style.fontSize = '20px'
    tagP.style.marginTop = '2px'
    tagP.style.borderRadius = '6px'

    tagP.textContent = countries[i]

    classWrapper[1].appendChild(tagP)
}