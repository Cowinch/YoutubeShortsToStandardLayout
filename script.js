const button = document.createElement('button')
const icon = document.createElement('img')
const container = document.getElementById('actions')

icon.src = 'https://i.imgur.com/S6StmBo.png'
button.style.color="white"
button.style.borderRadius='50%'
button.style.height= button.style.width = '48px'
button.style.backgroundColor='#272727'
button.style.border = 'none'
button.style.cursor='pointer'
if(container){
    container.appendChild(button)
    button.style.paddingTop = "16px"
} else {
    document.body.appendChild(button)
    button.style.position='absolute'
    button.style.right='10%'
    button.style.top='10%'
}
button.appendChild(icon)

button.addEventListener('click', () => {
    location.href = `https://www.youtube.com/watch?v=${location.href.split('/').pop()}`
})



