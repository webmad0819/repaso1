// Dani Vicario - gameEndWithCondition experiment (canvas)- Mon Sep 2 09:07:15 CEST 2019
// Dani Vicario - gameCover experiment (canvas)- Mon Sep 2 08:30:10 CEST 2019
const globalCompositeOperationModes = {
  "source-over": "source-over",
  "source-in": "source-in",
  "source-out": "source-out",
  "source-atop": "source-atop",
  "destination-over": "destination-over",
  "destination-in": "destination-in",
  "destination-out": "destination-out",
  "destination-atop": "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  "color-dodge": "color-dodge",
  "color-burn": "color-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity"
};

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

let spaceBarPressedTimes = 0;
let posX = 0

window.onkeydown = function(e) {
  //   console.log(e.keyCode)
  if (e.keyCode === 39) {
      posX+=200;
  }
  if (e.keyCode === 32) {
    spaceBarPressedTimes++;

    console.log("Space has been preseed " + spaceBarPressedTimes + " times")

    if (spaceBarPressedTimes > 3) {
      gameStart();
    }
  }
};

let intervalID = setInterval(() => {
    ctx.clearRect(0, 0, w, h);
    
    ctx.beginPath();
    ctx.rect(posX, h2, 20, 20)
    ctx.fill();
    ctx.closePath();

    if (posX > w) {
        clearInterval(intervalID)
        gameStart()
    }
}, 10)

function gameStart() {
  let coverImg = new Image();
  coverImg.src = "gameCover.jpg";

  coverImg.onload = function() {
    let alpha = 0;
    let intervalID = setInterval(() => {
      alpha += 0.0001;
      ctx.globalAlpha = alpha;
      ctx.drawImage(coverImg, 0, 0, w, h);

      if (alpha > 1) {
        clearInterval(intervalID);
      }
    });
  };
}
