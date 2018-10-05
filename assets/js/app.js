const dbRef = firebase.database().ref('domotica');
let w = 8;
let h = 8;

function createGrid(rows, cols) {
  let container = document.querySelector('.grid-container');
  for (let r = 0; r < rows; r++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);

    for (let c = 0; c < cols; c++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      container.appendChild(pixel);
    }
  }
}

createGrid(w, h);
