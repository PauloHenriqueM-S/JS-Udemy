const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a próxima iteração
// Break sai do laço 

for (let numero of numeros) {

  if (numero === 2) {
    console.log('Pulei o 2');
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log('Encontrei o 7');

    break;
  }

}

for (let i in numeros) {
  const numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o 2');
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log('Encontrei o 7');

    break;
  }

}

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o 2');
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log('Encontrei o 7');

    break;
  }

}

let i = 0;
do {
  const numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o 2');
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log('Encontrei o 7');
    i++;
    break;
  }

  i++;
} while (i < numeros.length) 