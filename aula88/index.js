function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitHere(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('BAD VALUE'));
        return
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return
    }, time);
  })
}

// Promise.all Promise.race Promise.resolve Promise.reject

{ // Promise.all
  const promises = [
    'Primeiro valor',
    waitHere('Promise 1', 3000),
    waitHere('Promise 2', 500),
    waitHere('Promise 3', 1000),
    // waitHere(1000, 1000),
    'Outro valor'
  ];

  // Promise.all(promises)
  //   .then(function (value) {
  //     console.log(value);
  //   })
  //   .catch(e => console.log(e));
}

{// Promise.race
  const promises = [
    // 'Primeiro valor',
    waitHere('Promise 1', rand(1, 5)),
    waitHere('Promise 2', rand(1, 5)),
    waitHere('Promise 3', rand(1, 5)),
    // waitHere(1000, rand(1, 5)),
    // 'Outro valor'
  ];

  //   Promise.race(promises)
  //     .then(function (value) {
  //       console.log(value);
  //     })
  //     .catch(e => console.log(e));
}

{// Promise.resolve
  function baixaPagina() {
    const emCache = true;
    if (emCache) {
      // return Promise.resolve('Pagina em cache');
      return Promise.reject('Pagina em cache');
    } else {
      return waitHere('Baixei a pagina', rand(1, 5));
    }
  }

  baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO: ' + e));
}