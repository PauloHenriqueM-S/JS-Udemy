/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 * tem 1.8 de altura e seu IMC é de 25.9259225925925924
 * Luiz Otávio nasceu em 1980
 */
const nome = 'Paulo';
const sobrenome = 'Henrique';
const idade = 23;
const peso = 80;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}
${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
