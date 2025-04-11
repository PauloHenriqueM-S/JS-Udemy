// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const id = 123;
  const metodoInterno = function () {

  }

  // Atributos ou métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ': sou um método');
  }
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('João', 'Miranda');
p2.metodo()

