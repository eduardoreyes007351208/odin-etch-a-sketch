/* Create the squares that go inside the main container */
const gridContainer = document.querySelector('#gridContainer')

let createSquares = () => {
    
    let i = 0;
    while (i < (16*16)) {
        let gridSquare = document.createElement('div')
        gridSquare.classList.add('squares')
        gridSquare.setAttribute('style', 'width: 40px; height: 40px; flex-basis: 40px; border: 1px solid black')
        gridContainer.appendChild(gridSquare)
        console.log(i)
        i++
    }
}

createSquares()
const grids = document.querySelectorAll('.squares')

grids.forEach((square) => {
    
    square.addEventListener('mouseover', () => {
        square.style.background = 'black'
    })
})