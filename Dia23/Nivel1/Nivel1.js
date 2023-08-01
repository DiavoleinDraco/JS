const tagHeader = document.querySelector('header')
const tagSection = document.querySelector('section')
const tagInput = document.querySelector('.input')
const tagButton = document.querySelector('.generar')
const tagH1 = document.querySelector('h1')
const tagDiv = document.createElement('div')
tagH1.style.color = 'rgb(100,180,100)'

Object.assign(document.body.style, {
    textAlign: 'center',
    position: 'relative',
    top: '20px',
    margin: '0 auto',
    maxWidth: '900px',
    fontFamily: 'Rubik'
})

Object.assign(tagInput.style, {
    textAlign: 'left',
    padding: '10px 500px 10px 0',
    border: 'solid',
    borderColor: 'rgb(100,180,100)'
})

Object.assign(tagButton.style, {
    fontSize: '20px',
    marginLeft: '15px',
    padding: '13px 15px 13px 15px',
    backgroundColor: 'rgb(100,180,100)',
    border: 'none',
    color: 'rgb(255,255,255)'
})


tagButton.addEventListener('click', () => {

    tagDiv.innerHTML = ' '
    for (i = 0; i < tagInput.value; i++) {
        const tagP = document.createElement('p')
        tagP.textContent = i
        if (i % 2 == 0) {
            tagP.style.backgroundColor = 'rgb(100,180,100)'
        } else {
            let primo = true

            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    primo = false
                    break
                }

            }
            tagP.style.backgroundColor = primo ? 'rgb(184, 18,24)' : 'rgb(230,194,0)'
        }


        Object.assign(tagP.style, {
            fontSize: '24px',
            color: 'rgb(255,255,255)',
            textAlign: 'center',
            width: '40px',
            display: 'inline-block',
            marginTop: '20px',
            padding: '20px 40px',
            margin: '6px 10px',



        })
        Object.assign(tagDiv.style, {
            width: '1100px',
            textAlign: 'left'
        })
        tagDiv.appendChild(tagP)


    }
    tagSection.appendChild(tagDiv)
})