const body = document.querySelector('body');
const buttons = document.querySelector('.buttons');
const title = document.createElement('div');
const clear = document.createElement('button');
const rgb = document.createElement('button');
const colorPicker = document.createElement('input');
let slider = document.getElementById('myRange');
let output = document.getElementById('output');
const container = document.getElementById('grid-container');

let allCells;
let color = 'black';

let isMouseDown = false;

createRgbButton();
createClearButton();
createColorPickerButton();
createAndUpdateSlider();
createTitle();

function createGrid(n) {
  if (container.hasChildNodes()) {
    container.innerHTML = '';
  }
  let sizeOfCell = 500 / n;
  for (let i = 0; i < n; i++) {
    let newRow = document.createElement('div');
    newRow.setAttribute('style', `grid-column-start:${i}; grid-column-end:${i + 1};`);

    for (let j = 0; j < n; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('style', `width:${sizeOfCell}px;height:${sizeOfCell}px;`);
      newRow.appendChild(cell);
      container.appendChild(newRow);
    }
  }
  allCells = container.querySelectorAll('.cell');
  allCells.forEach(cell => {
    cell.addEventListener('mousedown', onMouseDown);
    cell.addEventListener('mouseup', onMouseUp);
    cell.addEventListener('mouseover', onMouseOver);
  });
  container.addEventListener('mouseleave', onMouseLeave);
}

function createTitle() {
  title.innerText = 'Etch a sketch!';
  title.classList.add('title');
  body.appendChild(title);
}

function createClearButton() {
  clear.classList.add('button-select');
  clear.addEventListener('click', () => { container.innerHTML = ''; createGrid(slider.value) });
  clear.innerText = 'clear';
  buttons.appendChild(clear);
}

function createRgbButton() {
  rgb.classList.add('button-select');
  rgb.style.marginRight = '50px';
  rgb.addEventListener('click', () => {
    color = 'random';
  });
  rgb.innerText = 'RGB';
  buttons.appendChild(rgb);
}

function createColorPickerButton() {
  colorPicker.setAttribute('type', 'color');
  colorPicker.setAttribute('value', 'black');
  colorPicker.style.marginLeft = '50px';
  colorPicker.classList.add('colorp-select');
  colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
  }, false);
  buttons.appendChild(colorPicker);
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

function onMouseDown(event) {
  isMouseDown = true;
  event.target.style.backgroundColor = color === 'random' ? random_rgba() : color;
}

function onMouseOver(event) {
  if (isMouseDown) {
    event.target.style.backgroundColor = color === 'random' ? random_rgba() : color;
  }
}

function onMouseUp(event) {
  isMouseDown = false;
}


function onMouseLeave(event) {
  isMouseDown = false;
}