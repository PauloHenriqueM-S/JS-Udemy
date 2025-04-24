// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, color) {
  Produto.call(this, nome, preco)
  this.color = color
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (quantia) {
  this.preco = this.preco + (this.preco * (quantia / 100))
}

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Estoque precisa ser um número')
      }
      estoque = valor
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 15, 'Vidro', 5);
camiseta.aumento(100);
console.log(produto);
console.log(camiseta);
caneca.estoque = 100
console.log(caneca)
console.log(caneca.estoque)
