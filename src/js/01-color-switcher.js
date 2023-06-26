const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const DELAY = 1000;
let timerId = null;
stopBtn.disabled = true;
stopBtn.addEventListener('click', onStopBtn);
startBtn.addEventListener('click', onStartBtn);

function onStartBtn(e) {
  e.target.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
}

function onStopBtn(e) {
  startBtn.disabled = false;
  e.target.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
