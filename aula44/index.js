function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser do tipo number.');
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma(1, '2'));
} catch (e) {
  // console.log(e);
  console.log('Erro ao somar.');
}


// try {
//   console.log(naoExisto);
// } catch (e) {
//   console.log('nãoExisto não existe.');
//   console.log(e);
// }

