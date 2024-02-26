class Car {
  constructor(marca, modelo, ano, cor, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
  }
  descricao() {
    console.log(`Este é um ${this.marca} ${this.modelo} ano ${this.ano}, na cor ${this.cor} e custa R$ ${this.preco}`);
  }
}

class NewCar extends Car {
  constructor(marca, modelo, ano, cor, preco, garantia) {
    super(marca, modelo, ano, cor, preco);
    this.garantia = garantia;
  }
  ofertaEspecial() {
    console.log(
      `Aproveite nossa oferta especial para o novo ${this.marca} ${this.modelo}! Por apenas R$ ${this.preco - 100000}, além disso você leva o carro com ${this.garantia} de garantia`
    );
  }
}

let carro = new NewCar("BMW", "Z4", 2022, "vermelha", 500000, "5 anos");
carro.descricao();
carro.ofertaEspecial();
