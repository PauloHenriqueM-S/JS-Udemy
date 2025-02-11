/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true || false -> true vai retornar  "o valor verdadeiro"
 * 
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

function falaOi() {
  return 'Oi'
}

const vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = false;
const c = 'false';
const d = '';
const e = null;
const f = undefined;
const g = NaN;

console.log(a || b || c || d || e || f || g);