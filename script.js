
let colorHex = 'black'
const gridContainer = document.querySelector('#gridContainer')
const colorBtn = document.querySelector('#colorBtn')
const sizeBtn = document.querySelector('#sizeBtn')


colorBtn.addEventListener('click', () => {
    chooseColor()
})
sizeBtn.addEventListener('click', () => {
    customSize()
})

let chooseColor = () => {
    colorHex = prompt('Type in the color hex code or color name')
}
let createSquares = (size) => {
    let squareWidth = 0

    switch (true) {
        case size >= 16 && size <= 25:
            squareWidth = 30
            break
        case size > 25 && size <= 50:
            squareWidth = 20
            break
        case size > 50 && size <= 100:
            squareWidth = 10
            break
        default:
            squareWidth = 10
    }


    gridContainer.setAttribute('style', `width: ${(size*squareWidth)+2}px; height: ${(size*squareWidth)+2}px`)
    let i = 0;
    while (i < (size * size)) {
        let gridSquare = document.createElement('div')
        gridSquare.classList.add('squares')
        gridSquare.setAttribute('style', `width: ${squareWidth}px; height: ${squareWidth}px; flex-basis: ${squareWidth}px; border: 1px solid black`)
        gridContainer.appendChild(gridSquare)
        i++
    }
}
let customSize = () => {
    let size = prompt('Choose the size for the grid (Max Size 100)')
    const grids = document.querySelectorAll('.squares')
    grids.forEach((square) => {
        gridContainer.removeChild(square)
    })
    createSquares(size)
    draw()
}

let draw = () => {
    const grids = document.querySelectorAll('.squares')

    grids.forEach((square) => {
    
        square.addEventListener('mouseover', () => {
            if (colorHex == '' || colorHex == null) {
                square.style.background = 'black'
            } else {
                square.style.background = `${colorHex}`
            }
        
        })
    })
}

createSquares(16)
draw()