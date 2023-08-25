const buttons = document.querySelectorAll('.button');
const reset = document.querySelector('.reset');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const colors = [];
for (let i = 0; i < buttons.length; i++) {
  colors.push(getRandomColor());
}

const correctColorIndex = getRandomInt(0, colors.length - 1);
const colorDisplay = document.querySelector('.content-text');
colorDisplay.textContent += ` ${colors[correctColorIndex]}`;

buttons.forEach((button, index) => {
  button.style.backgroundColor = colors[index];
  button.addEventListener('click', () => {
    checkSelectedColor(button.style.backgroundColor, colors[correctColorIndex]);
  });
});

function checkSelectedColor(selectedColor, correctColor) {
  const validator = document.querySelector('.validator');

  if (selectedColor === correctColor) {
    validator.textContent = `You're Right!`;
  } else {
    validator.textContent = `Oops, that isn't the right color. Try again.`;
  }
}

reset.addEventListener('click', () => {
    location.reload(); 
  });
