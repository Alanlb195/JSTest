
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');
const square5 = document.getElementById('square5');

const colorCoordinates = document.getElementById('color-coordinates');

const colorPalette = document.getElementById('color-palette');

square1.addEventListener('mouseover', changeBackground);
square2.addEventListener('mouseover', changeBackground);
square3.addEventListener('mouseover', changeBackground);
square4.addEventListener('mouseover', changeBackground);
square5.addEventListener('mouseover', changeBackground);

function changeBackground(event) {
    const color = event.target.style.backgroundColor;
    document.body.style.backgroundColor = color;
}

document.addEventListener('mousemove', showCoordinates);

function showCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    colorCoordinates.textContent = `Coordenadas: (${x}, ${y})`;
}

colorPalette.addEventListener('click', changePageColor);

function changePageColor(event) {
    const color = event.target.style.backgroundColor;
    document.body.style.backgroundColor = color;
}