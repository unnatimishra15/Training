const btn = document.getElementById('colorbtn');


btn.addEventListener('click',changeColor,false);
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function changeColor()
{
    const randomcolor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    const outercolor = 'rgb(' + random(155) + ',' + random(155) + ',' + random(155) + ')';
    document.getElementById('innercontent').style.background = randomcolor;
    document.getElementById('content').style.background = outercolor;


}
// Key Event
const t = document.getElementById('txt');
const d = document.getElementById('display');
function displayfunction(e)
{
  d.innerHTML = e.keyCode + ' ' + String.fromCharCode(e.keyCode);
 console.log(e.type + ' ' + e.keyCode + ' ' + String.fromCharCode(e.keyCode));
}
t.addEventListener("keydown",displayfunction,false);
t.addEventListener("keypress",displayfunction,false);
t.addEventListener("keyup",displayfunction,false);


//Mouse Events

// var div1 = document.getElementById("one");
// var div2 = document.getElementById("two");
// div2.addEventListener("mousedown",mouseEvent,false);
// div2.addEventListener("mouseup",mouseEvent,false);
// div2.addEventListener("click",mouseEvent,false);
// div2.addEventListener("dblclick",mouseEvent,false);
// div2.addEventListener("mouseenter",mouseEvent,false); //onhover
// div2.addEventListener("mouseleave",mouseEvent,false);
// div2.addEventListener("mouseover",mouseEvent,false);
// div2.addEventListener("mouseout",mouseEvent,false);
// div2.addEventListener("mousemove",mouseEvent,false);
// div2.addEventListener("contextmenu",mouseEvent,false);
function mouseEvent(e){
  console.log(e.type)
}
// bubble up example
// div1 = addEventListener('click',mouseEvent,false);
// div2 = addEventListener('click',mouseEventTwo,false);

function mouseEventTwo(e){
  console.log(e.type)
}
var txt = document.getElementById("mytext");

function changeColor(e){
  txt.style.backgroundColor = "orange";

}
function color(e){
  txt.style.backgroundColor = "white"
}

txt.addEventListener("mouseover",changeColor,false);
txt.addEventListener("mouseout",color,false);