function teste() {
  console.log('Teste');
  // Não utiliza (this)
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste()
  }


  //Método de  instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    console.log('Troca de pilha');
  }
}

const c1 = new ControleRemoto('LG');
// c1.aumentarVolume();
// c1.aumentarVolume();
// c1.aumentarVolume();

// console.log(c1);

// ControleRemoto.trocaPilha();

