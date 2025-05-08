const nome = 'Luiz'
const sobrenome = 'Miranda'
const idade = 30

// export default function soma(x, y) {
// return x + y
// }

// export class Pessoa {
//   constructor(nome, sobrenome, idade) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.idade = idade
//   }
// }

const cpf = ''

// export default (x, y) => x * y

export { nome as nome2, sobrenome, idade }
// export { nome as default, sobrenome, idade } // nome sera o export padrão

export default class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
  }
}