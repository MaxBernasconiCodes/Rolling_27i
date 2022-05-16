class Auto {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.posicion = 0;
  }
  acelarar(cantidad) {
    this.posicion += cantidad;
  }
  bocinear() {
    console.log("Bip Bip");
  }
}

let chevito = new Auto("Chevrolet", "206");
let auto2 = new Auto("Peugeot", "209");
let auto3 = new Auto("Fiat", "508");

chevito.bocinear();
chevito.bocinear();
console.debug(chevito.marca);
console.debug(auto2.marca);
console.debug(auto3.marca);
console.debug(chevito.modelo);
console.debug(auto2.modelo);
console.debug(auto3.modelo);
console.debug(chevito.posicion);
console.debug(auto2.posicion);
console.debug(auto3.posicion);

console.debug(auto3.acelarar);
console.debug(auto3.posicion);
auto3.acelarar(10);
console.debug(auto3.posicion);

localStorage.setItem("autoguardado", JSON.stringify(chevito));

let chevitosacado = JSON.parse(localStorage.getItem("autoguardado"));
chevitosacado = new Auto(chevitosacado.marca, chevitosacado.modelo);

console.log(chevito);
console.log(chevitosacado);

chevitosacado.bocinear();

console.clear();

class Especie {
  constructor(nombre) {
    this.nombre = nombre;
  }
  presentarse() {
    console.debug("Soy un " + this.nombre);
  }
}

class Animal extends Especie {
  constructor(especie, raza) {
    super(especie);
    this.raza = raza;
  }
  declararse() {
    console.debug(`Hola soy un ${this.raza} de especie ${this.nombre}`);
  }
}

let Michina = new Animal("Mamifero", "Gato");

Michina.presentarse();
Michina.declararse();


class Planta extends Especie {
    constructor(especie, tipo) {
        super(especie);
        this.tipo = tipo;
      }
      moverHojas() {
        console.debug(`woooosh`);
      }
}

let cactus = new Planta('Cactus', 'pinchuda');

cactus.presentarse()
Michina.presentarse()
