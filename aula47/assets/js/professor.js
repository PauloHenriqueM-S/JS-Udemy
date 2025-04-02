function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.start');
const pausar = document.querySelector('.pause');
const zerar = document.querySelector('.clear')

let segundos = 0;
let timer

function iniciarRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000)
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado');
    segundos = 0;
  }

  if (el.classList.contains('start')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
  }

  if (el.classList.contains('pause')) {
    clearInterval(timer);
    relogio.classList.add('pausado');
  }
});

iniciar.addEventListener('click', (e) => {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciarRelogio();
});

pausar.addEventListener('click', (e) => {
  clearInterval(timer);
  relogio.classList.add('pausado');
});

zerar.addEventListener('click', (e) => {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});