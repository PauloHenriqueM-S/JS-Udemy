//               01234567
let umaString = "O rato roeu a roupa do rei de Roma."; // \ -> Escape

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(` em um lindo dia.`));

console.log(umaString.indexOf('texto', 3));
console.log(umaString.lastIndexOf('o', 3));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[x]/));
console.log(umaString.replace([/r/g, '#']));

console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3));
console.log(umaString.slice(32));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' '));
console.log(umaString.split(' ', 3));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());