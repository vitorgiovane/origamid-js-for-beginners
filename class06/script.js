// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const person = {
  name: "Vitor",
  lastName: "Alves",
  sex: "Male"
}

// Crie um método no objeto anterior, que mostre o seu nome completo
const vitor = {
  name: "Vitor",
  lastName: "Alves",
  sex: "Male",
  fullName() {
    return `${this.name} ${this.lastName}`
  }
}

// Modifique o valor da propriedade preco para 3000
var car = {
  price: 1000,
  doors: 4,
  brand: "Audi"
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const dog = {
  name: "Spike",
  breed: "Labrador",
  color: "black",
  yearsOld: 10,
  bark(sawAMan) {
    if (sawAMan) {
      return "AU AU!"
    }
  }
}
