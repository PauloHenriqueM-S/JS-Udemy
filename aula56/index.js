// Factory Function (função fabrica)
// Constructor Function (função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    fala: function (assunto) {
      return `${this.nome} está ${assunto}`
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const imc = this.peso / (this.altura * this.altura);
      return imc.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80)
