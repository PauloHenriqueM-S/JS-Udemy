/**
 * Operadores Lógicos
 * && -> AND -> E -> Todas as condições precisam ser verdadeiras para retornar true
 * || -> OR -> OU
 * ! -> NOT -> Não
 */

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || true || false;
const expressaoNot = !false;

const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

//                      true                 false
const vaiLogar = usuario === 'Luiz' && senha === '123456';



console.log(vaiLogar);
