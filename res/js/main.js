const autoChangeColorButton = document.getElementById("autoChangeColorButton");
const stopAutoChangeColorButton = document.getElementById("stopAutoChangeColorButton");

let intervalId;

var punch = new Audio('../res/img/punch.mp3');

autoChangeColorButton.onclick = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    changeBackgroundColor();
  }, 1000);
};

stopAutoChangeColorButton.onclick = () => {
  clearInterval(intervalId);
};

//!     changing color of background
document
  .getElementById("changeColorButton")
  .addEventListener("click", function () {
    changeBackgroundColor();
  });

function changeBackgroundColor() {
  var randomColor = getRandomColor();
  document.getElementById("colorChangingDiv").style.backgroundColor =
    randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//!     counter of clicks
const counter = document.getElementById("clickCounter");

let numberOfClicks = 0;
let clickIncrease = 1;

changeColorButton.onclick = () => {
  numberOfClicks += clickIncrease;
  counter.innerText = "Click counter: " + numberOfClicks;
  //punch.play();
};