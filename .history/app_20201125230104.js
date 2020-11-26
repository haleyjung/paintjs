// Detect when mouse is on top of the canvas & Get the canvas' 2D rendering context
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

// Give a size to the pixel modifier in addition to css
canvas.width = 700;
canvas.height = 700;

// Set the style of the stroke in canvas
ctx.strokeStyle ="#2c2c2c"
ctx.lineWidth=2.5;

let painting = false;

// Stop painting when mouse leaves the canvas or we let go of it
function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

// offsetX, offsetY is the canvas area (client is the whole window)
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    // Create a starting point of a path(line)
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        // Make path visible
        ctx.stroke();
    }
}

function handleColorClick(event){
    console.log(event.target.style);
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))