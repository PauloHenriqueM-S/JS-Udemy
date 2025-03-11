/**
 * let a = 'A'; // B
 *let b = 'B'; // C
 *let c = 'C'; // A
 *
 *const numeros = [b, c, a];2
 *[a, b, c] = numeros;
 *
 *console.log(a, b, c);
 *
 */

// ... rest, ... spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [um, dois, tres] = numeros;
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco);

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const [, [, , seis]] = numeros
const [lista1, lista2, lista3] = numeros

// console.log(seis);


console.log(lista3[2]);
