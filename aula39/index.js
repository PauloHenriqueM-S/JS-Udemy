// const nomes = ['Luiz', 'Otávio', 'Maria'];
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
};

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o indice ou chave (string, arrays ou objetos)
// For of - Retorna o valor em si (iterable, arrays ou strings)

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// *** is not iterable
// for (let valor of pessoa) {

// }

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// console.log('---------');

// for (let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log('---------');

// for (let valor of nomes) {
//   console.log(valor);
// }

// console.log('---------');

// nomes.forEach(function (valor, indice, array) {
//   console.log(valor, indice, array);
// });

