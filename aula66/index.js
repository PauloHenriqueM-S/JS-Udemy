// Dobre os números
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosDobrados = numeros.map(n => n * 2);
// console.log(numerosDobrados)

// Professor 

// const numerosEmDobro = numeros.map(function (valor) {
//   return valor * 2
// })

const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

// const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// const semNome = pessoas.map(obj => {
//   delete obj.nome;
//   return obj
// })

// console.log(semNome);

// const comId = pessoas.map((obj, indice) => {
//   obj.id = indice;
//   return obj
// })

// console.log(comId);

// Professor

// const nomes = pessoas.map(function (valor) {
//   return valor.nome
// })
const nomes = pessoas.map(valor => valor.nome)
console.log(nomes);

// const idades  = pessoas.map(function (obj) {
//   // delete obj.nome;
//   // return obj
//   return {idade: obj.idade}
// })
const idades = pessoas.map(obj => ({ idade: obj.idade }))
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
  // obj.id = (indice + 1) * 1000 // altera o obj original
  const newObj = { ...obj }
  newObj.id = indice
  return newObj
})

console.log(comIds);