// ad-hoc object definition
let warrior1001001 = {
    life: 100,
    armor: 50,
    name: "Conan",
    receiveHit: function (hitPoints) {
        this.life -= hitPoints

        console.log("My name is " + this.name + " ::: My life points are: " + this.life)
    }
}

warrior1001001.receiveHit(40)