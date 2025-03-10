function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda-feira';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça-feira';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta-feira';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta-feira';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta-feira';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
  }
}

const data = new Date('1987-04-26 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);


// if (diaSemana === 0) diaSemanaTexto = 'Domingo';
// if (diaSemana === 1) diaSemanaTexto = 'Segunda-feira';
// if (diaSemana === 2) diaSemanaTexto = 'Terça-feira';
// if (diaSemana === 3) diaSemanaTexto = 'Quarta-feira';
// if (diaSemana === 4) diaSemanaTexto = 'Quinta-feira';
// if (diaSemana === 5) diaSemanaTexto = 'Sexta-feira';
// if (diaSemana === 6) diaSemanaTexto = 'Sábado';


console.log(diaSemana, diaSemanaTexto);
