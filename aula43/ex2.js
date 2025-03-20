// Escreva uma função chamada ePaisagem que reccebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura ? true : false

// Professor

function ePaisagem(largura, altura) {
  return largura > altura // já retornaria true ou false
  // return largura > altura ? true : false
}

// const ePaisagem = (largura, altura) => largura > altura