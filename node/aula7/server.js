const express = require('express')
const app = express();

// http://facebook.com/profiles/[id]?[query]=[value]&[query]=[value]

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send(`<form action="/" method="POST"> Nome: <input type="text" name="nome"><button>Olá mundo</button></form>`));

app.get('/testes/:idUsuarios?', (req, res) => {
  // /profiles/3
  // /profiles/?name=Luiz&sobrenome=Otávio&idade=30
  //
  console.log(req.params)
  console.log(req.query)
  res.send('Oi')
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3333, () => console.log('Acessar http://localhost:3333'))