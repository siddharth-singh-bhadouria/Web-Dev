// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.querySelector('#container')


for (let i = 1; i <= 1010; i++) {
    const pokemon = document.createElement('div')
    const label = document.createElement('span')
    label.innerText = `#${i}`
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemon.classList.add('pokemon')
    pokemon.append(newImg)
    pokemon.append(label)
    container.append(pokemon)
}