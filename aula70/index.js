{
  // '' "" ``
  const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
  }

  const chave = 'nome';
  // console.log(pessoa[chave])
}

{
  const pessoa1 = new Object();
  pessoa1.nome = 'Luiz';
  pessoa1.sobrenome = 'Otávio';
  // console.log(pessoa1.nome)
  // console.log(pessoa1.sobrenome)
}

{
  const pessoa1 = new Object();
  pessoa1.nome = 'Luiz';
  pessoa1.sobrenome = 'Otávio';
  pessoa1.idade = 30;
  pessoa1.falarNome = function () {
    console.log(`${this.nome} está falando seu nome.`)
  }
  pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }

  // for (let chave in pessoa1) {
  //   console.log(chave, pessoa1[chave]);
  // }

  // delete pessoa1.nome;
  // console.log(pessoa1.getDataNascimento())
  // console.log(pessoa1)
}

{
  // Factory Functions / Classes
  function criaPessoa(nome, sobrenome) {
    return {
      nome,
      sobrenome,
      get nomeCompleto() { // se retirar o get lembrar de usar () para chamar a função 
        return `${this.nome} ${this.sobrenome}`
      }
    }
  }
  const p1 = criaPessoa('Luiz', 'Otávio');
  // console.log(p1);
  // console.log(p1.nomeCompleto);
}

{
  // Constructor Function
  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
  }

  // {} <- this 
  // p1 = (ENDERECOMEMORIA) -> 'Valor'
  // P1.ENDERECOMEMORIA = {nome: 'Outra coisa'}
  // p1 = (NOVOENCENDERECO)
  const p1 = new Pessoa('Luiz', 'Miranda');
  Object.freeze(p1);
  // p1 = 'Outra coisa'; // Não pode ser feito
  p1.nome = 'Outra coisa';
  const p2 = new Pessoa('Maria', 'Miranda');
  console.log(p1)
  console.log(p2)
  // const p2 = {}
  // p2.nome = 'Luiz';
}
