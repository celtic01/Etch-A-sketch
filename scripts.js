const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const title = document.createElement('div');


body.style.backgroundColor = '#ffebb3';

title.innerText = 'Etch a sketch!';

title.classList.add('title');


createGrid(16);

body.appendChild(title);










function createGrid(n)
{
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








