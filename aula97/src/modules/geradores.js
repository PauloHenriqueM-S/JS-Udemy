const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolo = () => String.fromCharCode(rand(33, 47)) + String.fromCharCode(rand(58, 64)) + String.fromCharCode(rand(91, 96)) + String.fromCharCode(rand(123, 126));

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhasArray = []
  qtd = Number(qtd)

  for (let i = 0; i < qtd; i++) {
    maiusculas && senhasArray.push(geraMaiuscula())
    minusculas && senhasArray.push(geraMinuscula())
    numeros && senhasArray.push(geraNumero())
    simbolos && senhasArray.push(geraSimbolo())
  }

  return senhasArray.join('').slice(0, qtd);
}