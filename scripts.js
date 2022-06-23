const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const title = document.createElement('div');
const buttons = document.querySelector('.buttons');
const clear = document.createElement('button');
let slider = document.getElementById('myRange');
let output = document.getElementById('output');


createClearButton();

createAndUpdateSlider();

createTitle();




function createGrid(n) {
  //if there are cells, delete them and create grid
  // if there are not cells, just create the grid
  if(container.hasChildNodes())
  {
    container.innerHTML ='';
  }
  let sizeOfCell = 500/n;
  for (let i = 0; i < n; i++) {
    let newRow = document.createElement('div');

    newRow.setAttribute('style', `grid-column-start:${i}; grid-column-end:${i + 1};`);
    newRow.classList.add('newRow');

    for (let j = 0; j < n; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('style',`width:${sizeOfCell}px;height:${sizeOfCell}px;`);
      newRow.appendChild(cell);
      container.appendChild(newRow);
    }
  }
  const allCells = container.querySelectorAll('.cell');
  allCells.forEach(cell => { cell.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = 'black'; }) })

}

function createTitle()
{
  title.innerText = 'Etch a sketch!';
title.classList.add('title');
body.appendChild(title);
}

function createClearButton()
{
  const allCells = container.querySelectorAll('.cell');
  clear.classList.add('button-paper');
  clear.addEventListener('click', () => {container.innerHTML = ''; createGrid(slider.value)});
  clear.innerText='clear';
  buttons.appendChild(clear);
  
}

function createAndUpdateSlider()
{
  createGrid(slider.value);
  output.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function () {
  createGrid(this.value);
  output.innerHTML = this.value + "x" + this.value;
}
}










