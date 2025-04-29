function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitHere(msg, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('BAD VALUE'));
        return
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return
    }, time);
  });
}

// waitHere('Fase 1', rand())
//   .then(value => {
//     console.log(value);
//     return waitHere('Fase 2', rand())
//   })
//   .then(fase => {
//     console.log(fase);
//     return waitHere('Fase 3', rand())
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase
//   })
//   .then(fase => {
//     console.log('Terminamos na fase:', fase);
//   })
//   .catch(e => console.log(e));

async function exec(params) {
  try {
    // const fase1 = await waitHere('Fase 1', rand());
    const fase1 = waitHere('Fase 1', 1000);
    console.log(fase1);

    setTimeout(function () {
      console.log('Essa promise estava pendente', fase1);
    }, 1100);

    // const fase2 = await waitHere(2, rand());
    const fase2 = await waitHere('Fase 2', rand());
    console.log(fase2);
    const fase3 = await waitHere('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
  } catch (e) {
    console.log(e);
  }
}

// exec();

// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada

const teste2 = waitHere('qlq', 5000)
console.log(teste2)