function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitHere(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new Error('BAD VALUE'));

    setTimeout(() => {
      resolve(msg);
    }, time);
  })
}

// waitHere('Frase 1', rand(1, 3), function () {
//   waitHere('Frase 2', rand(1, 3), function () {
//     waitHere('Frase 3', rand(1, 3));
//   });
// });


waitHere('Conexão com o BD', rand(1, 3))
  .then(resp => {
    console.log(resp);
    return waitHere('Buscando dados da BASE', rand(1, 3));
  })
  .then(resp => {
    console.log(resp);
    return waitHere(2222, rand(1, 3));
    // return resp + ' vai pro outro THEN'
  })
  .then(resp => {
    console.log(resp);
  })
  .then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log('Error: ' + e)
  });