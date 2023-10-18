const button = document.createElement('button')
const container = document.getElementById('content')
button.textContent = 'change view'
button.style.position='absolute'
button.style.right='10%'
button.style.top='10%'
container.appendChild(button)

button.addEventListener('click', () => {
    location.href = `https://www.youtube.com/watch?v=${location.href.split('/').pop()}`
})



