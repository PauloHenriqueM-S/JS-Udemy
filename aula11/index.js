/**
 *  Aritméticos
 * + Adição / Concatenação (- / *)
 * ** Potenciação
 * % Resto da divisão
 * 
 * Precedência
 * ()
 * **
 * * / %
 * + -
 * 
 */
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

/**
 * Incremento = ++
 * Decremento = --
 */
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
++contador; // 5
console.log(contador);

const passo = 50;
let contador2 = 0;
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2);

contador2 += passo; // contador2 = contador2 + 50

// NAN - Not a Number | parseInt (inteiro), parseFloat (decimais)
const num11 = 10;
const num22 = Number('Luiz');
console.log(num11 + num22);
console.log(typeof num22);

