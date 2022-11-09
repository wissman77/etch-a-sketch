// main conatiner DOM element
const conatiner = document.querySelector('.container');
const changeGridBtn = document.getElementById('change-grid-btn');

produceDivs(16, conatiner);

// Events listeners
changeGridBtn.addEventListener('click', () => {
  let squaresNumber = parseInt(prompt('What is the number of squares per side?'));
  if (squaresNumber > 100 || squaresNumber < 2) {
    alert('Please provide a number between 2 and 100');
    return;
  }
  clearContainer();
  produceDivs(squaresNumber, conatiner);
})

function clearContainer() {
  conatiner.innerHTML = null;
}

function produceDivs(squaresNumber, parentNode){
  // calculating the percentage of width or hight
  let elementHightAndWidth = 100/squaresNumber;

  // creating the grid and add event listeners to div elements
  for(let i = 0; i < squaresNumber ** 2; i++) {
    const div = document.createElement('div');
      div.classList.add('element')
      div.style.width = `${elementHightAndWidth}%`;
      div.addEventListener('mouseenter', changeBackground);
      div.style.height = `${elementHightAndWidth}%`;
      parentNode.appendChild(div);
  }
}

function changeBackground(event) {
  event.target.classList.add('black');
}