// game engine
setInterval(() => {
  superMario.moveLeft();
  enemy1.moveRight();
  scenario.animate();
}, 100);

let superMario = {
  life: 100,
  moveLeft: function() {
    console.log("mario moving to the left");
  },
  moveRight: function() {
    console.log("mario moving to the right");
  }
};

let enemy1 = {
  life: 50,
  moveRight: function() {
    console.log("enemy moving to the right");
  }
};

let scenario = {
  posX: 100,
  posY: 200,
  sprite: "mountains.jpg",
  animate: function() {
    console.log("i am moving the mountains using a parallax effect");
  }
};
