// argumentos que sustenta todos os argumentos enviados
{
  function funcao() {
    let total = 0;
    for (let argumento of arguments) {
      total += argumento;
    }

    console.log(total)
  }
  funcao(1, 2, 3)
}

{
  function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
  }
  funcao(1, 2, 3)
}

{
  // funcao(a, b = 2, c = 4) só anula um valor predefinido se o argumento for undefined
  function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
  }
  funcao(2, undefined, 10)
}

{
  function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
  }
  let obj = { nome: 'Luiz', sobrenome: 'Miranda', idade: 30 }
  funcao(obj)
}

{
  function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
  }
  funcao(['Luiz Otávio', 'Miranda', 30])
}

{
  // em vez do array podemos usar o operador rest
  // rest operator sempre deve ser o ultimo parametro
  function conta(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, numeros)
    for (let numero of numeros) {
      if (operador === '+') acumulador += numero
      if (operador === '-') acumulador -= numero
      if (operador === '/') acumulador /= numero
      if (operador === '*') acumulador *= numero
    }

    console.log(acumulador)
  }
  conta('+', 1, 20, 30, 40, 50)
}

{
  const conta = function (operador, acumulador, ...numeros) {
    console.log(arguments)
  }
  conta('+', 1, 20, 30, 40, 50)
}

{
  // arguments não funciona com arrow functions
  const conta = (operador, acumulador, ...numeros) => {
    // console.log(arguments)
    console.log(operador, acumulador, numeros)
  }
  conta('+', 1, 20, 30, 40, 50)
}

{
  const conta = (...args) => {
    console.log(args)
  }
  conta('+', 1, 20, 30, 40, 50)
}