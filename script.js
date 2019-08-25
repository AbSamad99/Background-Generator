var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Background");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var buttonRandomiser = document.querySelector(".buttonRandomiser");

document.onload= css.textContent= body.style.background + ";";

function setBackground(){
  body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value +")";
  css.textContent= body.style.background + ";";
}

function setBackgroundLeft(){
  body.style.background = "linear-gradient(to left," + color1.value + ", " + color2.value +")";
  css.textContent= body.style.background + ";";
}

function setBackgroundBottom(){
  body.style.background = "linear-gradient(" + color1.value + ", " + color2.value +")";
  css.textContent= body.style.background + ";";
}

function setBackgroundBottomRight(){
  body.style.background = "linear-gradient(to bottom right," + color1.value + ", " + color2.value +")";
  css.textContent= body.style.background + ";";
}

function RandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setBackgroundRandom(){
  color1.value=RandomColor();
  color2.value=RandomColor();
  var x=Math.floor(Math.random()*100);
  if(x>=0 && x<=25){
    setBackground();
  }
  else if (x>25 && x<=50) {
    setBackgroundLeft();
  }
  else if (x>50 && x<=75) {
    setBackgroundBottom();
  }
  else if (x>75 && x<=100) {
    setBackgroundBottomRight();
  }
}

color1.addEventListener("input",setBackground);
color2.addEventListener("input",setBackground);
button1.addEventListener("click",setBackground);
button2.addEventListener("click",setBackgroundLeft);
button3.addEventListener("click",setBackgroundBottom);
button4.addEventListener("click",setBackgroundBottomRight);
buttonRandomiser.addEventListener("click",setBackgroundRandom);

setBackground();
