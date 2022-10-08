const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#FFD700', '#FF00FF', '#FF69B4', '##FFFF66', '#00FFFF']

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(elem) {
    const color = getColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem){
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px black`
}

function getColor () {
  const index = Math.floor(Math.random() * colors.length) 
  return colors[index]
}