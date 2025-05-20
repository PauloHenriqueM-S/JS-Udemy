exports.paginaInicial = (req, res) => {
  res.send(`
    <form action='/' method='POST'>
      Nome: <input type="text" name="qualquercoisa"><br>
      Outro campo: <input type="text" name="aquioutrocampo"><br>
      <button>Enviar</button>
      </form>
    `)
}

exports.trataPost = (req, res) => {
  res.send('Recebi o formulário')
}