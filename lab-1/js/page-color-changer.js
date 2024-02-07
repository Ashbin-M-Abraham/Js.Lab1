//create function to lsiten to click 
let redListener = document.getElementById("red");
let  blueListener = document.getElementById("blue");
let  greenListener=document.getElementById('green');
//add event listener for each color button

redListener.addEventListener( "change", changeColor);
blueListener.addEventListener("change", changeColor) ;
greenListener.addEventListener("change",changeColor);
function changeColor(){
    let redColor =Number(redListener.value);
    let blueColor= Number(blueListener.value);
    let greenColor = Number(greenListener.value);
    console.log(redColor,greenColor,blueColor);
    let body = document.documentElement;
    body.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}
