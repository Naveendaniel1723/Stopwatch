let startTime = 0;
let isRunning = false;
let interval;
let lapCounter = 1;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

startStopBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - startTime;
    interval = setInterval(updateDisplay, 100);
    startStopBtn.textContent = "Pause";
    isRunning = true;
  } else {
    clearInterval(interval);
    startStopBtn.textContent = "Start";
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  startTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
  startStopBtn.textContent = "Start";
  isRunning = false;
  lapCounter = 1;
});

lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCounter++}: ${display.textContent}`;
    laps.appendChild(li);
  }
});

function updateDisplay() {
  const elapsed = Date.now() - startTime;
  const date = new Date(elapsed);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}