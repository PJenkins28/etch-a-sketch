const grid = document.querySelector('.grid');
/*grid.getElementsByClassName.gridTemplateColumns = "repeat(16, 1fr)";
grid.getElementsByClassName.gridTemplateRows = "repeat(16, 1fr)";*/
/*createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};*/

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

//var picker;
//var pickerCtx;
// Creating Color-Picker element
//var picker = document.getElementById("color-picker");
//var pickerCtx = picker.getContext("2d");

const canvas = document.getElementById("canvas");
const pickerCtx = canvas.getContext("2d",{willReadFrequently: true});
//C reates gradient
const color = 'rgba(0,0,255,1)';
const gradient = pickerCtx.createLinearGradient(0, 0, pickerCtx.canvas.width,0);
gradient.addColorStop(0, "black");
gradient.addColorStop(1, color);

// Fills element with gradient
pickerCtx.fillStyle = gradient;
pickerCtx.fillRect(0, 0, pickerCtx.canvas.width, pickerCtx.canvas.height);

// Create Vertical gradient
let gradientV = pickerCtx.createLinearGradient(0, 0, 0, 300);
gradientV.addColorStop(0, 'rgba(0,0,0,0)');
gradientV.addColorStop(1, '#000');
pickerCtx.fillStyle = gradientV;
pickerCtx.fillRect(0, 0, pickerCtx.canvas.width, pickerCtx.canvas.height); 

// Event Listener that records color mouse clicks on color-picker
        canvas.addEventListener('click', function(event){
        let x = event.clientX;  // Get X coordinate
        let y = event.clientY;  // Get Y coordinate
        const pixel = pickerCtx.getImageData(x,y,1,1);   // Read pixel Color
        const data = pixel.data;
        const rgb = `rgb(${data[0]},${data[1]},${data[2]})`;
        console.log(rgb);
        //document.body.style.backgroundColor = rgb ;    // Set this color to body of the document
    } );

/*function colorSelection(event) {
    let x = event.clientX;
    let y = event.clientY;
    let pixel = pickerCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
    rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    document.body.style.background = rgb;    // Set this color to body of the document
}*/