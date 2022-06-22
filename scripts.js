const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const title = document.createElement('div');


body.style.backgroundColor = '#ffebb3';

title.innerText = 'Etch a sketch!';

title.classList.add('title');

createGrid(16);

body.appendChild(title);

const allCells = container.querySelectorAll('.cell');

console.log(allCells);

allCells.forEach(cell => {cell.addEventListener('mouseover', (event) =>{event.target.style.backgroundColor = 'black';})})

  

function changeColor()
{
  this.setAttribute('style','background-color: black')
}

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

function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
  }
}









