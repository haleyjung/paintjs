// Detect when mouse is on top of the canvas
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

// Give a size to the pixel modifier in addition to css
canvas.width = 700;
canvas.height = 700;

// Set the style of the stroke in canvas
ctx.strokeStyle ="blue";
ctx.lineWidth=2.5;

let painting = false;
let filling = false;

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
    const color = event.target.style.backgroundColor;
    // Override strokestyle with color
    ctx.strokeStyle = color;
}

// Set line width according to the range
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

// Fill <-> Paint
function handleModeClick(){
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// Change strings to array and make event listener
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

if(range){
    range.addEventListener("input", handleRangeChange)
};

if(mode){
    mode.addEventListener("click", handleModeClick)
};