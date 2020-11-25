// Detect when mouse is on top of the canvas

const canvas = document.getElementById("jsCanvas");

function onMouseMove(event){
    console.log(event);
}

if(canvas){
    canvas.addEventListener("mousemove", on,onMouseMove);
}