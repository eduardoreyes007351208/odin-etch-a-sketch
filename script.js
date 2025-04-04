/* Variable Declaration */
let colorHex = 'black'
let size = 16
const gridContainer = document.querySelector('#gridContainer')
const colorBtn = document.querySelector('#colorBtn')
const sizeBtn = document.querySelector('#sizeBtn')
const resetBtn = document.querySelector('#resetBtn')
const currentColorText = document.querySelector('#currentColor')

/* Event Listeners */
colorBtn.addEventListener('click', () => {
    chooseColor()
})
sizeBtn.addEventListener('click', () => {
    customSize()
})
resetBtn.addEventListener('click', () => {
    resetCanvas(size)
})

/* functions */

/* Allow User to choose color for drawing */
let chooseColor = () => {
    colorHex = prompt('Type in the color hex code or color name')
    currentColorText.textContent = `Current Color: ${colorHex}`
}
/* Generate the canvas */
let createSquares = (size) => {
    let squareWidth = Math.round(640/size)

    gridContainer.setAttribute('style', `width: ${(size*squareWidth)+80}px; height: ${(size*squareWidth)+80}px`)
    let i = 0;
    while (i < (size * size)) {
        let gridSquare = document.createElement('div')
        gridSquare.classList.add('squares')
        gridSquare.setAttribute('style', `background: #BFBEC3; width: ${squareWidth}px; height: ${squareWidth}px; flex-basis: ${squareWidth}px; border: 1px solid black`)
        gridContainer.appendChild(gridSquare)
        i++
    }
}
/* Allow user to create custom canvas */
let customSize = () => {
    size = prompt('Choose the size for the grid (Min: 1, Max: 100): ')
    while (size < 1 || size > 100 ) {
        size = prompt('Please enter size between 1-100: ')
    }
    const grids = document.querySelectorAll('.squares')
    grids.forEach((square) => {
        gridContainer.removeChild(square)
    })
    createSquares(size)
    draw()
}
/* Allow User to draw on canvas */
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

    currentColorText.textContent = `Current Color: ${colorHex}`
}
/* Allow users to reset the canvas */
let resetCanvas = (size) => {
    const grids = document.querySelectorAll('.squares')
    grids.forEach((square) => {
        gridContainer.removeChild(square)
    })
    createSquares(size)
    draw()
}

/* Default / Start Program */
createSquares(size)
draw()