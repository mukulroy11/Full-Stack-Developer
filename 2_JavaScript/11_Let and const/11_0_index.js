const player = "roy"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

points += 100
hasWon = false

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game!`)
}