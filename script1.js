const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const fuel = document.getElementById("ile-paliwa");
const canister = document.getElementById("canister");
const upCar = 90;
const downCar = 270;
const leftCar = 0;
const rightCar = 180;

function carModel(brand, model, milage, bak) {
  this.brand = brand,
  this.model = model,
  this.milage = milage,
  this.bak = bak,
  this.jedz = function() {
    this.milage += 5;
    return this.milage;
  }
  this.tank = function() {
    this.bak += 5;
    return this.bak;
    console.log(`Zatankowałeś, masz ${this.bak} L benzyny`);
  }
  this.name = function() {
    return `${this.brand} ${this.model}`;
  }
  this.el = document.createElement('span');
  this.append = function() {
    this.el.innerHTML = ` ${this.brand} ${this.model} <>`;
    document.body.appendChild(this.el);
  }
  this.hide = function() {
    this.el.style.display = 'none';
  }
  this.show = function() {
    this.el.style.display = 'inline'
  }
  this.remove = function() {
    this.el.parentNode.removeChild(this.el);
  }
  this.el.addEventListener('click', () => this.hide());
}

let maluch = new carModel('fiat', 'tipo', 1000, 10);
let polonez = new carModel('polonez', 'caro', 6000, 15);
let opel = new carModel('opel', 'astra', 88000, 30);
let audi = new carModel('audi', 'a6', 5000, 20);
let kia = new carModel('kia', 'rio', 12000, 19);
let skoda = new carModel('skoda', 'octavia', 55000, 14);

maluch.append();
polonez.append();
opel.append();
audi.append();
kia.append();
skoda.append();
