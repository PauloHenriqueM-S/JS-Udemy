const section = document.querySelector('.container');
const date = new Date();
const day = date.getDate();

section.innerHTML = `
${getweekday(date)}, ${day} de ${getmonth(date)} de ${date.getFullYear()} </br>
${zeroAEsquerda(date.getHours())}:${zeroAEsquerda(date.getMinutes())}
`;

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function getweekday(date) {
  const diaSemana = date.getDay();
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      break;
    case 1: diaSemanaTexto = 'Segunda-feira';
      break;
    case 2: diaSemanaTexto = 'Terça-feira';
      break;
    case 3: diaSemanaTexto = 'Quarta-feira';
      break;
    case 4: diaSemanaTexto = 'Quinta-feira';
      break;
    case 5: diaSemanaTexto = 'Sexta-feira';
      break;
    case 6: diaSemanaTexto = 'Sábado';
      break;
    default:
      diaSemanaTexto = '';
      break;
  }
  return diaSemanaTexto
}

function getmonth(date) {
  const mes = date.getMonth();
  let mesTexto;

  switch (mes) {
    case 0:
      mesTexto = 'Janeiro';
      break;
    case 1: mesTexto = 'Fevereiro';
      break;
    case 2: mesTexto = 'Março';
      break;
    case 3: mesTexto = 'Abril';
      break;
    case 4: mesTexto = 'Maio';
      break;
    case 5: mesTexto = 'Junho';
      break;
    case 6: mesTexto = 'Julho';
      break;
    case 7: mesTexto = 'Agosto';
      break;
    case 8: mesTexto = 'Setembro';
      break;
    case 9: mesTexto = 'Outubro';
      break;
    case 10: mesTexto = 'Novembro';
      break;
    case 11: mesTexto = 'Dezembro';
      break;
    default:
      mesTexto = '';
      break;
  }
  return mesTexto
}
