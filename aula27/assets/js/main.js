function escopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('#resultado');


  function calcularIMC(event) {
    event.preventDefault()

    const peso = form.querySelector('#peso').value.toString().replace(',', '.');
    const altura = form.querySelector('#altura').value.toString().replace(',', '.');

    console.log(altura);


    const imc = peso / (altura * altura);
    console.log(imc);

    const result = imc.toFixed(2)

    if (result < 18.5) {
      resultado.innerHTML = `Seu IMC é ${result} (Abaixo do peso)`
    } else if (result > 18.5 && result <= 24.9) {
      resultado.innerHTML = `Seu IMC é ${result} (Peso normal)`
    } else if (result > 25 && result <= 29.9) {
      resultado.innerHTML = `Seu IMC é ${result} (Sobrepeso)`
    } else if (result > 30 && result <= 34.9) {
      resultado.innerHTML = `Seu IMC é ${result} (Obesidade grau I)`
    } else if (result > 35 && result <= 39.9) {
      resultado.innerHTML = `Seu IMC é ${result} (Obesidade grau II)`
    } else if (result > 40) {
      resultado.innerHTML = `Seu IMC é ${result} (Obesidade grau III)`
    } else {
      resultado.innerHTML = 'Informe seus dados!'
    }

  }

  form.addEventListener('submit', calcularIMC)
}
escopo()

// Professor

// Capturar evento de submit do formulário
const form = document.querySelector('formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    setResultado('Peso inválido', false)
    return;
  }
  if (!altura) {
    setResultado('Altura inválido', false)
    return;
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)

})

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0]
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2)
}

function criaP(className) {
  const p = document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''

  const p = criaP()

  if (isValid) { p.classList.add('paragrafo-resultado') } else { p.classList.add('bad') }

  p.innerHTML = msg
  resultado.appendChild(p)
}