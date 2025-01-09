const canvas = document.getElementById('Canvas1');
const ctx = canvas.getContext('2d');
let drawing = false;
let colordraw = 'black';
let isErasing = false;
const bgColor = 'white';

const bgColorBtn = document.getElementById('bgColorBtn');
const bgColorSelector = document.getElementById('bgColorSelector');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', (event) => {
  if (isErasing) {
    erase(event);
  } else {
    draw(event);
  }
});

const startDrawing = (e) => {
  drawing = true;
  draw(e);
};

const stopDrawing = () => {
  drawing = false;
  ctx.beginPath();
};

const erase = (e) => {
  if (!isErasing) return;
  ctx.clearRect(
    e.offsetX - ctx.lineWidth / 4,
    e.offsetY - ctx.lineWidth / 4,
    ctx.lineWidth,
    ctx.lineWidth
  );
};

const draw = (e) => {
  if (!drawing) return;
  ctx.lineWidth = 5;
  ctx.lineCap = 'solid';
  ctx.strokeStyle = colordraw;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
};

const activeButton = (event) => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
  event.target.classList.add('active');
};

const stiftButton = document.querySelector('.stiftButton');
const eraseButton = document.querySelector('.eraseButton');
const colorButton = document.querySelector('.colorButton');
const colorInput = document.querySelector('#colorSelecter');

console.log(colorButton);

stiftButton.addEventListener('click', (event) => {
  event.preventDefault();
  isErasing = false;
  activeButton(event);
});

eraseButton.addEventListener('click', (event) => {
  event.preventDefault();
  isErasing = true;
  activeButton(event);
});

colorButton.addEventListener('click', (event) => {
  event.preventDefault();
  colorInput.click();
  activeButton(event);
});

colorInput.addEventListener('input', (event) => {
  event.preventDefault();
  colordraw = event.target.value;
});

bgColorBtn.addEventListener('click', () => {
  bgColorSelector.click();
});

bgColorSelector.addEventListener('input', (e) => {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = e.target.value;
});

const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener('click', () => {
  const ctx = canvas.getContext('2d');
  const currentBgColor = canvas.style.backgroundColor;

  // Сохраняем текущие настройки контекста
  ctx.save();

  // Очищаем весь canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Восстанавливаем настройки контекста
  ctx.restore();

  // Сохраняем цвет фона
  canvas.style.backgroundColor = currentBgColor;
});
