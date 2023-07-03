const button = document.querySelector('button')
const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
})

function randomColor() {
    h1.style.color = 'black'
    let r = Math.floor(Math.random() * 255) + 1
    let g = Math.floor(Math.random() * 255) + 1
    let b = Math.floor(Math.random() * 255) + 1
    if (r < 10 || g < 10 || b < 10)
        h1.style.color = 'white'
    return `rgb(${r}, ${g}, ${b})`
}
