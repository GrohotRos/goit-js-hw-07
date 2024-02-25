function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  let newBoxesHTML = '';
  let initialSize = 30;

  for (let i = 0; i < amount; i++) {
    newBoxesHTML += `<div style="width: ${initialSize}px; height: ${initialSize}px; background-color: ${getRandomHexColor()};"></div>`;
    initialSize += 10;
  }

  boxesContainer.innerHTML = newBoxesHTML; 
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; 
}

const input = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    console.log('Введіть число від 1 до 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);