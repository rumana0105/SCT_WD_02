let timer;
let running = false;
let elapsedTime = 0;
let lapCounter = 1;

const display = document.getElementById('display');
const lapTimesList = document.getElementById('lap-times');

function updateDisplay() {
    const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            elapsedTime += 100;
            updateDisplay();
        }, 100);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    running = false;
    clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    lapCounter = 1;
    updateDisplay();
    lapTimesList.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lapTime = elapsedTime;
        const hours = String(Math.floor(lapTime / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor((lapTime % 3600000) / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((lapTime % 60000) / 1000)).padStart(2, '0');
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${hours}:${minutes}:${seconds}`;
        lapTimesList.appendChild(lapItem);
    }
});
