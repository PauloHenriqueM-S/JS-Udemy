// defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    // value: estoque, // valor
    // writable: true, // pode ou não alterar o valor
    configurable: false, // configura e ou não 
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Estoque precisa ser um número')
      }
      estoquePrivado = valor
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 'O valor que eu quero'
p1.estoque = 500
console.log(p1.estoque);

function criaProduto(nome) {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      valor = valor.replace('coisa', '');
      nome = valor
    }
  }
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome);
p2.nome = 'Outra coisa';
console.log(p2.nome);