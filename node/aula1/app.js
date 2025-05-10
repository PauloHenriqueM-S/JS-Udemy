const path = require('path')
const axios = require('axios')

// const mod1 = require('./mod1')
const { nome, sobrenome, falaNome, Pessoa } = require('./mod1')
// const falaNome = mod1.falaNome

console.log(nome, sobrenome)
console.log(falaNome())

const p1 = new Pessoa('Luiz')
console.log(p1)

axios('https://jsonplaceholder.typicode.com/posts')
  .then(res => console.log(res.data))
  .catch(e => console.log(e))