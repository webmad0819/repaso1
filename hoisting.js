const score = 100
console.log(score)


// startGame()

// // function as a statement. it HAS hoisting
// function startGame() {
//     console.log("i am starting the game")
// }

// function as an expression
let startGame2 = function () {
    console.log("i am starting the game version 2")
}

startGame2()