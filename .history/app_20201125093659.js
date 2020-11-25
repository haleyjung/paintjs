// 1. Detect when mouse is on top of the canvas

const canvas = document.getElementById("jsCanvas");

let painting = false;

// offsetX, offsetY is the canvas area (client is the whole window)
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

// 2. Event when we click a mouse on the canvas
function onMouseDown(event){
    painting = true;
}

// 3. Not painting when we let go of the mouse
function onMouseUp(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
}
