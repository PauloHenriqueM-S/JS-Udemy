const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
}

// Atribuição via desestruturação
// const { nome = '', sobrenome, idade } = pessoa
// const {nome: n = '', sobrenome,idade } = pessoa;
// console.log(nome, sobrenome,);

const { endereco: { rua: r = 12345, numero }, endereco } = pessoa
console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(resto);
