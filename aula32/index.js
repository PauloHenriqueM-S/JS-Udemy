const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; //criando

var nome2 = 'Otávio'; // redeclarada

console.log(nome, nome2);


if (verdadeira) {
  let nome = 'Otávio'; // criando
  var nome2 = 'Rogério'; // redeclarando
  console.log(nome, nome2);

  if (verdadeira) {
    var nome2 = 'Ronaldo' // redeclarando
    let nome = 'Outra coisa'
    console.log(nome, nome2);

  }
}

console.log(nome, nome2);


function falaOi() {
  var sobrenome = 'Miranda';
  console.log('Oi ' + nome);

  if (verdadeira) {
    let nome = 'Luiz';
    console.log(nome);

  }

}

falaOi()

// console.log(sobrenome);


// var sobrenome = 'Miranda';

console.log(sobrenome);


let sobrenome = 'Miranda';