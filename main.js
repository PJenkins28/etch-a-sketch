
const grid = document.getElementById('grid');
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
    }
}

makeGrid(16); // **Need to make funciton that allows user to dynamically change grid size

/*grid.getElementsByClassName.gridTemplateColumns = "repeat(16, 1fr)";
grid.getElementsByClassName.gridTemplateRows = "repeat(16, 1fr)";*/
/*createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};*/