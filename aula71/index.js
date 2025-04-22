// defineProperty - definePorperties
function Produto(nome, preco, estoque) {
  // this.nome = nome;
  // this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode ou não alterar o valor
    configurable: false // configura e ou não 
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(p1));
p1.estoque = 500000;
delete p1.estoque
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}