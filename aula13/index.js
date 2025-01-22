let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/**
 * varA = varB; // B
 * varB = varC; // C
 * varC = varA; // B
 */

/*
FUNCIONA
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
