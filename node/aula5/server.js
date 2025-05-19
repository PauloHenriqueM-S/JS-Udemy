const express = require('express')
const app = express();

//         Criar   Ler,  Atualizar  Apagar
// CRUD -> Create, Read, Update,    Delete
//         Post    Get   Put        Delete

// http://meusite.com/ <- GET -> Entrege a página /
// http://meusite.com/sobre <- GET -> Entrege a página /sobre
// http://meusite.com/contato <- GET -> Entrege a página /contato

app.get('/', (req, res) => res.send(`<form action="/" method="POST"> Nome<input type="text" name="nome"><button>Enviar</button></form>`));

app.post('/', (req, res) => res.send('Recebi o formulário'))

app.get('/sobre', (req, res) => res.send('Sobre'));

app.listen(3333, () => console.log('Acessar http://localhost:3333'))