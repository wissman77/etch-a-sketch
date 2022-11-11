// main conatiner DOM element
const conatiner = document.querySelector('.container');
const changeGridBtn = document.getElementById('change-grid-btn');
const blackBtn = document.getElementById('black-btn');
const randomRgbBtn = document.getElementById('random-rgb-btn');
const blackShadesBtn = document.getElementById('black-shades-btn');

let squaresNumber = 16


produceDivs(squaresNumber, conatiner, changeToBlack);

// Events listeners
changeGridBtn.addEventListener('click', () => {
  squaresNumber = parseInt(prompt('What is the number of squares per side?'));
  if (squaresNumber > 100 || squaresNumber < 2) {
    alert('Please provide a number between 2 and 100');
    return;
  }
  clearContainer();
  produceDivs(squaresNumber, conatiner, changeToBlack);
});

blackBtn.addEventListener('click', () => {
  clearContainer();
  produceDivs(squaresNumber, conatiner, changeToBlack);
})

randomRgbBtn.addEventListener('click', () => {
  clearContainer();
  produceDivs(squaresNumber, conatiner, changeToRandomRGB);
});

blackShadesBtn.addEventListener('click', () => {
  clearContainer();
  produceDivs(squaresNumber, conatiner, changeToBlackShades);
});


function clearContainer() {
  conatiner.innerHTML = null;
}

function produceDivs(squaresNumber, parentNode, func){
  // calculating the percentage of width or hight
  let elementHightAndWidth = 100/squaresNumber;

  // creating the grid and add event listeners to div elements
  for(let i = 0; i < squaresNumber ** 2; i++) {
    const div = document.createElement('div');
      div.classList.add('element')
      div.style.width = `${elementHightAndWidth}%`;
      div.addEventListener('mouseenter', func);
      div.style.height = `${elementHightAndWidth}%`;
      div.style.opacity = 0.1;
      parentNode.appendChild(div);
  }
}

function changeToBlack(event) {
  event.target.style.opacity = 1;
  event.target.classList.add('black');
}

function changeToRandomRGB(event) {
  event.target.style.opacity = 1;
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  event.target.style.background = `rgb(${r}, ${g}, ${b})`;
}

function changeToBlackShades(event) {
  let opacity =  parseFloat(event.target.style.opacity);
  opacity += 0.1;
  if (opacity > 1) {
    return;
  }
  event.target.style.opacity = opacity; 
  event.target.style.background = `rgb(0, 0, 0)`;
}