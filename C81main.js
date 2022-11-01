canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouseEvent= " ";
var last_x, last_y, current_y, current_x;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e){
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent= "mouseleave";
}

canvas.addEventListener("mousemove", my_mouseMove);
function my_mouseMove(e){
    var color= document.getElementById("color_input").value;
    var l_width= document. getElementById("width_input").value;
    var radius= document.getElementById("radius_input").value;
    current_x= e.clientX- canvas.offsetLeft;
    current_y= e.clientY- canvas.offsetTop;

    if(mouseEvent== "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
  ctx.lineWidth= l_width;

  console.log("Current x and y are");
  console.log("x="+ current_x+ "and y="+ current_y);

ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
  ctx.stroke();
    }

    last_x= current_x;
    last_y= current_y;
}

function clear_area(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}