const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' }
]

// const novasPessoas = {};
// for (const { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

// console.log(novasPessoas.get(2));

// for (const [identifier, { id, nome }] of novasPessoas) {
//   console.log(identifier, id, nome);
// }

for (const pessoa of novasPessoas.values()) { // ou keys
  console.log(pessoa);
}

novasPessoas.delete(2);
console.log(novasPessoas);