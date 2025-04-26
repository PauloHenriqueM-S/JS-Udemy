class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return
    }
    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} ja desligado`);
      return
    }
    this.ligado = false
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome)
    this.temWifi = temWifi
  }

  // sobreescrita
  ligar() {
    console.log('Alterou o método ligar.');
  }

  // só tem no tablet
  falaOi() {
    console.log('Oi');
  }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S20 Ultra')
console.log(s1);

const t1 = new Tablet('iPad', true)
console.log(t1);
t1.ligar()
t1.ligar()
t1.falaOi()
// Não fazer mais que 2 extensoes