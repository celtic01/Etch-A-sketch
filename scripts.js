const title = document.createElement('div');
const body = document.querySelector('body');

const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');


title.innerText = "Etch a sketch";

title.classList.add('title');

body.style.background = "#ffe7a3";

defaultGrid()

function defaultGrid ()
{
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridrow';
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
      for(j = 0; j < cellNum; j++)
      {
        let newCell = document.createElement('div');
        rows[j].appendChild(newCell).className = 'cell';
      }
    }
}
