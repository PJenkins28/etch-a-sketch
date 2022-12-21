// Grid DOM elements
const grid = document.querySelector('#grid');
const newSize = document.getElementById('grid-size');

// Global variables
let draw = false; // Register if user is actively coloring
let selection =''; // Color of pixel

// Creates Grid and sets pixel size
function createGrid(size) {
    let area = size * size;
    for (let i = 0; i <= area; i++) {
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);

        // Mouseover and mousedown event listeners
        div.addEventListener('mouseover', function() {
            if(!draw) {
                return;
            }
            div.style.backgroundColor = selection;
        });
        div.addEventListener('mousedown', function() {
            div.style.backgroundColor = selection;
        });
    }
}

// Event listeners to only draw when mouse is clicked and to stop when it is released.
grid.addEventListener("mousedown", function() {
    draw = true;
})
grid.addEventListener("mouseup", function() {
    draw = false;
})

// Creates default grid of size 16x16 when page loads
createGrid(16); 

// Assigns new grid size value from user input
function gridSize() { 

    grid.innerHTML = '';
    createGrid(`${newSize.value}`);
}

// Event listener to change size of grid with user input
newSize.addEventListener('input', gridSize); 


// Color wheel and button DOM elements
const color = document.getElementById('color') // User selection from color wheel
const single = document.getElementById('single') // Color button
const erase = document.getElementById('erase'); // Pixelated erase button
const reset = document.getElementById('reset'); // Reset grid button

// Assigns color wheel value to pixel
function getUserSelection() {
    selection = color.value;
}

// Restores original background color of grid
function eraseGrid() {
    selection = 'white';
}

// Button and color wheel event listeners
color.addEventListener('input', getUserSelection); // Color wheel input
single.addEventListener('click', getUserSelection); // Color button
erase.addEventListener('click', eraseGrid); // Erase button
reset.addEventListener('click', gridSize); // Reset button