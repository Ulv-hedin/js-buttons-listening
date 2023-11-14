const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const square = document.querySelector('.square')

const firstBtn = () => {
	console.log('cześć')
}

const redSquare = () => {
	square.style.backgroundColor = 'tomato'
}
const blueSquare = () => {
	square.style.backgroundColor = 'blue'
}

const changeText = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
    
}

btn1.addEventListener('dblclick', firstBtn)
square.addEventListener('mouseover', redSquare)
square.addEventListener('mouseleave', blueSquare)
btn2.addEventListener('click', changeText)

