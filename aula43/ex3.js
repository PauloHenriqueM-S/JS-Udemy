// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e por 5 = FizzBuzz
// Número não é divisível por 3 e por 5 = Retorna o proprio número
// Checar se o número é realmente um número = Retorna o proprio número
// Use a função com números de 0 a 100
// Checagem de divisibilidade = number % 3 === 0 || number % 5 === 0

function fizzBuzz(number) {
  if (typeof number !== 'number') return number;
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number
}

;// Professor

// function fizzBuzz(numero) {
//   if (typeof numero !== 'number') return numero;
//   if (numero % 3 === 0) return 'Fizz';
//   if (numero % 5 === 0) return 'Buzz';
//   if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
//   return numero
// }

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));

}