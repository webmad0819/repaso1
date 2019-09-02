class Warrior {
  constructor(nameParam) {
    this.life = 100;
    this.armor = 50;
    if (nameParam.length === 0) {
        this.name = "Default"    
    }   else {
        this.name = nameParam
    }
  }

  receiveHit(hitPoints) {
    this.life -= hitPoints;

    console.log(
      "My name is " + this.name + " ::: My life points are: " + this.life
    );
  }
}

// let warrior is the instantiated object
// Warrior is the class
let warrior = new Warrior();
warrior.receiveHit(20);

console.log(warrior);
