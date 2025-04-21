// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((ac, n) => ac + n);

console.log(numerosPares)