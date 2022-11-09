// main conatiner DOM element
const conatiner = document.querySelector('.container');

produceDivs(16, conatiner);

function produceDivs(divsNumber, parentNode){
  // calculating the percentage of width or hight
  let elementHightAndWidth = 100/divsNumber;

  // creating the grid and add event listeners to div elements
  for(let i = 0; i < divsNumber ** 2; i++) {
    const div = document.createElement('div');
      div.classList.add('element')
      div.style.width = `${elementHightAndWidth}%`;
      div.addEventListener('mouseenter', changeBackground);
      div.style.height = `${elementHightAndWidth}%`;
      parentNode.appendChild(div);
  }
}

function changeBackground(event) {
  event.target.style.background = 'black';
}