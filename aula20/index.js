/**
 * Primitivos - string, number, boolean, undefined, null (bigint,symbol) - Valorres copiados
 * 
 * Referência (mutável) - Array, object, function - Passados por referência
 */

//             0123
// let nome = 'Luiz';
// nome[0] = 'R'
// console.log(nome[0]);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa'

// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop()
// console.log(a, b);

// a.push('Luiz')
// console.log(c);

const a = {
  nome: 'Luiz',
  sobrenome: 'Miranda'
}

const b = { ...a }

a.nome = "João"
console.log(a);
console.log(b);
