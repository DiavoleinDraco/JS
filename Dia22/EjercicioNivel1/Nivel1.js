const tagDiv = document.querySelector('div')
const tagBody =  document.querySelector('body')
tagBody.style.textAlign = 'center'
tagDiv.style.width = '1000px' 
tagDiv.style.marginLeft = '160px'
tagBody.style.fontFamily = 'Roboto Condensed'

for(i=0;i<102;i++){
  
    let tagP = document.createElement('p')
    tagP.style.width = '20px'
    tagP.style.display = 'inline-block'
        
        if(i%2 == 0){
            tagP.style.backgroundColor = 'rgb(100,190,0)'
        }else{
            let primo = true
        for(let j = 2; j < i; j ++){
           if(i%j === 0){
            primo = false
            break 
           }
        }
        tagP.style.backgroundColor = primo ? 'red' : 'rgb(230,194,0)'
    }
    tagP.style.fontSize = '25px'
    tagP.style.color = 'rgb(255,255,255)'
    tagP.textContent = i
    tagP.style.margin = '2px'
    tagP.style.padding = '40px 70px 40px 70px'
    tagDiv.appendChild(tagP)
}