// script.js
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.style.backgroundColor = randomColor;
  }
  