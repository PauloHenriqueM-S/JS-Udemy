// filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter(n => n > 10)
// Professor
function callbackFilter(valor) { // , indice, array
  // if (valor > 10) {
  //   return true;
  // } else {
  //   return false;
  // }
  return valor > 10
}

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  // console.log(valor, indice, array)
  return valor > 10
}) //callbackFilter

// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoasCom5Letras = pessoas.filter(p => p.nome.length >= 5)
const pessoasComMaisDe50Anos = pessoas.filter(p => p.idade > 50);
const pessoasComLetraA = pessoas.filter(p => p.nome.toLowerCase().endsWith('a'))

// console.log(pessoasCom5Letras);
// console.log(pessoasComMaisDe50Anos);
console.log(pessoasComLetraA);