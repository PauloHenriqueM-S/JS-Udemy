class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }

  // Vai para o prototype todos os métodos criados

  fala() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
  }
  // comer() {
  //   console.log(`${this.nome} esta comendo...`);
  // }
  // beber() {
  //   console.log(`${this.nome} esta bebendo...`);
  // }

}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome
}

Pessoa2.prototype.fala = function () {
  console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
const p3 = new Pessoa('Joana', 'Miranda');
const p4 = new Pessoa('João', 'Miranda');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);