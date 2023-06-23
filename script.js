// script.js
function generateRandomColor() {
  var randomColor = getRandomColor();
  var colorDisplay = document.getElementById('colorDisplay');
  var hexCode = document.getElementById('hexCode');
  var rgbCode = document.getElementById('rgbCode');
  
  colorDisplay.style.backgroundColor = randomColor;
  hexCode.textContent = 'Hex: ' + randomColor;
  rgbCode.textContent = 'RGB: ' + convertHexToRgb(randomColor);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function convertHexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var rgb = [];
  rgb.push(parseInt(result[1], 16));
  rgb.push(parseInt(result[2], 16));
  rgb.push(parseInt(result[3], 16));
  return rgb.join(', ');
}
