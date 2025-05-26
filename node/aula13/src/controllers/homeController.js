const HomeModel = require('../models/HomeModel')

HomeModel.create({ // Em vez de create usar find para pegar os dados
  titulo: 'Outra coisa qualquer',
  descricao: 'Outra descrição'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  res.render('index')
  return
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}