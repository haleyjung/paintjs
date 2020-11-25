// Detect when mouse is on top of the canvas

const canvas = document.getElementById("jsCanvas");

// offsetX, offsetY is the canvas area (client is the whole window)

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
}
