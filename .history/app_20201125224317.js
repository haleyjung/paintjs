// 1. Detect when mouse is on top of the canvas & Get the canvas' 2D rendering context
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle ="#2c2c2c"
ctx.lineWidth=2.5;

let painting = false;

// > stop painting when mouse leaves the canvas or we let go of it
function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

// > offsetX, offsetY is the canvas area (client is the whole window)
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    // > Create starting point of a path(line)
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
        
    }

}

// 2. Event when we click a mouse on the canvas
function onMouseDown(event){
    painting = true;
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
