/**
 * Object.values
 * Object.entries
 * Object.assing(des,any)
 * Object.getOwnPropertyDescriptor(o,'prop')
 * ... (spread)
 * 
 * // Já vimos
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define varias propriedades de uma vez)
 * Object.defineProperty (define uma propriedade)
 */

// const caneca = Object.assign({}, produto, { material: 'porcelana' });
// Object.freeze(produto); // congela o objeto, impossibilita a modificaçãe
// const caneca = { nome: produto.nome, preco: produto.preco };

// caneca.nome = 'Outro nome'
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// console.log(Object.keys(produto));

// Object.defineProperty(produto, 'nome', { writable: false, configurable: false, value: 'Qualquer outra coisa' });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
// delete produto.preco;

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
// console.log(Object.values(produto));
// console.log(Object.values(produto));
// for (let [chave, valor] of Object.entries(produto)) {
//   console.log(chave, valor);
// }
for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}

