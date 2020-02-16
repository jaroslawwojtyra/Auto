const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const textFuel = document.getElementById("ile-paliwa");
const canisterButton = document.getElementById("canister");
const upCar = 90;
const downCar = 270;
const leftCar = 0;
const rightCar = 180;
let myCar = {
  fuel: 50,
  car: document.getElementById("car"),
  y: 100,
  x: 100,
};

function fullFuel() {
  myCar.fuel = 50;
  textFuel.innerHTML = `Zatankowałeś. Aktualna ilość paliwa: ${myCar.fuel} L`
};
function tankOn(){
    if(myCar.x>0 && myCar.x<=100 && myCar.y>0 && myCar.y<=100){
    fullFuel()
  }
}
function burnFuel(){
  myCar.fuel -= 1
  textFuel.innerHTML = `Aktualna ilość paliwa: ${myCar.fuel} L`
}
function canisterTank(){
  if(myCar.fuel<36){
    myCar.fuel += 15
  }
  else{
    myCar.fuel = 50
  }
  textFuel.innerHTML = `Zatankowałeś. Aktualna ilość paliwa: ${myCar.fuel} L`

}

const carReposition = (positionChangeX, positionChangeY, rotation) => {
  if(myCar.fuel>0){
  myCar.y = myCar.y + positionChangeY;
  myCar.x = myCar.x + positionChangeX;
  myCar.car.style.top = `${myCar.y}px`;
  myCar.car.style.left = `${myCar.x}px`;
  myCar.car.style.transform = `rotate(${rotation}deg)`;
  burnFuel();
  tankOn();
  }
  else {
      textFuel.innerHTML = `Brak paliwa`
  }
}
carReposition(0, 0, leftCar);

up.addEventListener("click", () => {carReposition(0, -3, upCar)});
down.addEventListener("click", () =>{carReposition(0, 3, downCar)});
left.addEventListener("click", () =>{carReposition(-3, 0, leftCar)});
right.addEventListener("click", () =>{carReposition(3, 0, rightCar)});
canisterButton.addEventListener("click", () => {canisterTank()});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 38) {
    event.preventDefault();
    carReposition(0, -3, upCar);
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 40) {
    event.preventDefault();
    carReposition(0, 3, downCar);
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 37) {
    event.preventDefault();
    carReposition(-3, 0, leftCar);
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 39) {
    event.preventDefault();
    carReposition(3, 0, rightCar);
  }
});
