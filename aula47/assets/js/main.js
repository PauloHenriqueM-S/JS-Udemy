const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

pause.disabled = true;

function zeroAtLeft(num) {
  return num >= 10 ? num : `0${num}`;
}


function startTimer() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
        if (hours === 24) hours = 0;
      }
    }
    timer.innerHTML = `${zeroAtLeft(hours)}:${zeroAtLeft(minutes)}:${zeroAtLeft(seconds)}`;
  }, 1000);
  start.innerHTML = 'Continuar';
  start.disabled = true;
  pause.disabled = false;

  pause.addEventListener('click', (e) => {
    clearInterval(interval);
    timer.style.color = 'red';
    start.disabled = false;
    pause.disabled = true;
  });

  if (pause.disabled === true) {
    timer.style.color = 'red';
  } else {
    timer.style.color = 'black';
  }

}

start.addEventListener('click', (e) => {
  startTimer();
});


clear.addEventListener('click', (e) => {
  clearInterval(interval);
  timer.innerHTML = '00:00:00';
  timer.style.color = 'black';
  if (start.innerHTML === 'Continuar') {
    start.innerHTML = 'Iniciar';
  }
  start.disabled = false;
  pause.disabled = true;
});