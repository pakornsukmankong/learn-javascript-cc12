let playerOne = prompt("Player One Enter Number")

if (playerOne < 1 || playerOne >99) {
  alert("Invalid Range")
} else {
  //player 2
  do {
    playerTwo = prompt("Player Two Guess Number")
    if (playerTwo < playerOne) {
      alert("lower than")
    }
    else if (playerTwo > playerOne) {
      alert("higher than")
    }
    else {
      alert("currect")
    }
  }
  while (playerOne !== playerTwo)
}