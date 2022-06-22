const body = document.querySelector('body');
const container = document.getElementById('grid-container');
const title = document.createElement('div');


body.style.backgroundColor = '#ffebb3';

title.innerText = 'Etch a sketch!';

title.classList.add('title');

for (let i = 0; i < 16; i++) {
  let newRow = document.createElement('div');
  newRow.setAttribute('style',`grid-column-start:${i}; grid-column-end:${i+1};`);

  for (let j = 0; j < 16; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    newRow.appendChild(cell);
    container.appendChild(newRow);
  }

}

body.appendChild(title);




