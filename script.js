let canvas = document.getElementById("Canvas1");
let ctx = canvas.getContext("2d");
let drawing = false;
let colordraw = "black";
let isErasing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", (event) => {
  if (isErasing) {
    erase(event);
  } else {
    draw(event);
  }
});

function startDrawing(e) {
  drawing = true;
  draw(e);
}
function stopDrawing() {
  drawing = false;
  ctx.beginPath();
}
function erase(e) {
  if (!isErasing) return;
  ctx.clearRect(
    e.offsetX - ctx.lineWidth / 4,
    e.offsetY - ctx.lineWidth / 4,
    ctx.lineWidth,
    ctx.lineWidth
  );
}
function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = 5;
  ctx.lineCap = "solid";
  ctx.strokeStyle = colordraw;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function ActiveButton(event) {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");
}

let stiftButton = document.querySelector(".stiftButton");
let eraseButton = document.querySelector(".eraseButton");
let colorButton = document.querySelector(".colorButton");
let colorInput = document.querySelector("#colorSelecter");

console.log(colorButton);

stiftButton.addEventListener("click", (event) => {
  event.preventDefault;
  isErasing = false;
  ActiveButton(event);
});

eraseButton.addEventListener("click", (event) => {
  event.preventDefault;
  isErasing = true;
  ActiveButton(event);
});

colorButton.addEventListener("click", (event) => {
  event.preventDefault();
  colorInput.click();
  ActiveButton(event);
});

colorInput.addEventListener("input", (event) => {
  event.preventDefault;
  colordraw = event.target.value;
});
