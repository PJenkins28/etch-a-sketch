// Global variables
let selection = '';
//DOM elements
const grid = document.getElementById('grid'); // Grid
const color = document.getElementById('color'); // User selection from color wheel
const single = document.getElementById('single'); //single-color mode
//const eraseBtn = document.getElementById('erase'); //erase button
  // each "square" div
// Event listener that assigns #color to 'selection'
single.addEventListener('click', getUserSelection());
//EL that assigns white to erase button
/*raseBtn.addEventListener('click', erase());*/
function getUserSelection() {
    color.addEventListener("input", function(){
        selection = color.value;
    });
}

/*function erase() {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
} IDK wtf is going on here lord help em i thought i knew what i was doing for a second*/

function makeGrid(size) {
    /*let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());*/

    let sizeAmt = size * size;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < sizeAmt; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", square);
        // mouseover event listener
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = selection;
        });
    }
}

makeGrid(42); // **Need to make funciton that allows user to dynamically change grid size

/*grid.getElementsByClassName.gridTemplateColumns = "repeat(16, 1fr)";
grid.getElementsByClassName.gridTemplateRows = "repeat(16, 1fr)";*/
/*createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};*/



// Display slider value
let sliderValue = document.getElementById("slider-value");
function displaySlider(val) {
    sliderValue.textContent = `${val} x ${val}`;
}