/* Create the squares that go inside the main container */
const gridContainer = document.querySelector('#gridContainer')

let createSquares = () => {
    
    let i = 0;
    while (i < 16) {
        let gridSquare = document.createElement('div')
        gridSquare.setAttribute('style', 'width: 10px; height: 10px; border: 1px solid black')
        gridContainer.appendChild(gridSquare)
        console.log(i)
        i++
    }
}


createSquares()