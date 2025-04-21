// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro de todos os números (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const soma = numeros.reduce((acumulador, valor) => {
//   return acumulador + valor;
// }, 0);

// console.log(soma);

// const pares = numeros.reduce((acumulador, valor) => {
//   if (valor % 2 === acumulador) {
//     acumulador.push(valor);
//   }
//   return acumulador
// }, 0)  // lembrar de usar um array vazio para acumulador
// console.log(pares);

// const dobro = numeros.reduce((acumulador, valor) => {
//   acumulador = valor * 2
//   return acumulador
// }) // lembrar de usar um array vazio  para acumulador

// console.log(dobro)

// Professor

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor
  return acumulador
}, 0)
console.log(total)

const pares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])
console.log(pares)

const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2)
  return acumulador
}, [])
console.log(dobro)

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 },
];

// const maisVelha = pessoas.reduce((acumulador, pessoa) => {
//   if (acumulador.idade > pessoa.idade) return acumulador;
//   return pessoa
// })
// console.log(maisVelha);

// Professor

const maisVelha = pessoas.reduce(function (acumulador, pessoa) {
  if (acumulador.idade > pessoa.idade) return acumulador;
  return pessoa
})
console.log(maisVelha);