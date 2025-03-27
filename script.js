
let colorHex = 'black'
const gridContainer = document.querySelector('#gridContainer')
const colorBtn = document.querySelector('#colorBtn')


colorBtn.addEventListener('click', () => {
    chooseColor()
})
let chooseColor = () => {
    colorHex = prompt('Type in the color hex code or color name')
}
let createSquares = () => {
    
    let i = 0;
    while (i < (16*16)) {
        let gridSquare = document.createElement('div')
        gridSquare.classList.add('squares')
        gridSquare.setAttribute('style', 'width: 40px; height: 40px; flex-basis: 40px; border: 1px solid black')
        gridContainer.appendChild(gridSquare)
        i++
    }
}

createSquares()
const grids = document.querySelectorAll('.squares')

grids.forEach((square) => {
    
    square.addEventListener('mouseover', () => {
        square.style.background = `${colorHex}`
    })
})