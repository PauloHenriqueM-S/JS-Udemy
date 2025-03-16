// For in -> lê os indices ou chaves do objeto
const frutas = ['Pêra', 'Maçã', 'Uva'];

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 30
}

const chave = 'nome';
// console.log(pessoa.nome);
// console.log(pessoa['nome']);



for (let chave in pessoa) {
  // console.log(chave);
  console.log(chave, pessoa[chave]);
}

// for (let indice in frutas) {
//   console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
