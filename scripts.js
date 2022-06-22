const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const title = document.createElement('div');
const buttons = document.querySelector('.buttons');
const clear = document.createElement('button');

createGrid(16);

const allCells = container.querySelectorAll('.cell');
allCells.forEach(cell => {cell.addEventListener('mouseover', (event) =>{event.target.style.backgroundColor = 'black';})})

body.style.backgroundColor = '#ffebb3';
title.innerText = 'Etch a sketch!';
title.classList.add('title');
body.appendChild(title);

clear.innerText = 'Clear';
clear.classList.add('button-paper');

clear.addEventListener('click', () => allCells.forEach(cell => cell.style.backgroundColor = 'white'))

buttons.appendChild(clear);


function createGrid(n) {
  for (let i = 0; i < n; i++) {
    let newRow = document.createElement('div');

    newRow.setAttribute('style', `grid-column-start:${i}; grid-column-end:${i + 1};`);
    newRow.classList.add('newRow');
    for (let j = 0; j < n; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      newRow.appendChild(cell);
      container.appendChild(newRow);
    }
  }
}










