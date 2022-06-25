const body = document.querySelector('body');
const buttons = document.querySelector('.buttons');
const title = document.createElement('div');
const clear = document.createElement('button');
const rgb = document.createElement('button');
const black = document.createElement('button');
let slider = document.getElementById('myRange');
let output = document.getElementById('output');
const container = document.getElementById('grid-container');

let allCells;       //variable for all the cells of the grid
let color = 'black';//default


createRgbButton();

createClearButton();

createBlackButton();

createAndUpdateSlider();

createTitle();

function createGrid(n) {
  //if there are cells, delete them and create grid
  // if there are not cells, just create the grid
  if (container.hasChildNodes()) {
    container.innerHTML = '';
  }
  let sizeOfCell = 500 / n;
  for (let i = 0; i < n; i++) {

    let newRow = document.createElement('div');

    newRow.setAttribute('style', `grid-column-start:${i}; grid-column-end:${i + 1};`);
    newRow.classList.add('newRow');

    for (let j = 0; j < n; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('style', `width:${sizeOfCell}px;height:${sizeOfCell}px;`);
      newRow.appendChild(cell);
      container.appendChild(newRow);
    }
  }
  allCells = container.querySelectorAll('.cell');
  
  if (color == 'random') {
    allCells.forEach(cell => { cell.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = `${random_rgba()}`; }) })
  }
  else {
    allCells.forEach(cell => { cell.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = `${color}`; }) })
  }

}

function createTitle() {
  title.innerText = 'Etch a sketch!';
  title.classList.add('title');
  body.appendChild(title);
}

function createClearButton() {
  const allCells = container.querySelectorAll('.cell');
  clear.classList.add('clear');
  clear.addEventListener('click', () => { container.innerHTML = ''; createGrid(slider.value) });
  clear.innerText = 'clear';
  buttons.appendChild(clear);
}

function createRgbButton() {
  rgb.classList.add('clear');
  rgb.style.marginRight = '50px';
  rgb.addEventListener('click', () => {
    allCells.forEach(cell => { cell.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = `${random_rgba()}`; }) })
  })
  rgb.innerText = 'RGB';
  buttons.appendChild(rgb);
}

function createBlackButton() {
  black.classList.add('clear');
  black.style.marginLeft = '50px';
  black.addEventListener('click', () => {
    allCells.forEach(cell => { cell.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = `${color}`; }) })
  })
  black.innerText = 'black';
  buttons.appendChild(black);
}

function createAndUpdateSlider() {
  createGrid(slider.value);
  output.innerHTML = slider.value + "x" + slider.value;
  slider.onchange = function () {
    createGrid(this.value);
    output.innerHTML = this.value + "x" + this.value;
  }
}

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}











