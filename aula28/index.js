// (condicao)? 'Valor para verdadeiro' : 'Valor para falso';
// exemplo: 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);

// if (pontuacaoUsuario >= 1000){
//   console.log('Usuário VIP');
// } else {
//   console.log('Usuário normal');
// }

