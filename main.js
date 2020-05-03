let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('results')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (3))
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.getElementById('.choices')

//get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChosen = e.target.id
generatedcomputerChoice()
results()
userChoice.innerHTML = userChosen
computerChoice.innerHTML = computerChosen
displayResult.innerHTML = result
}))


//get a random computer choice
function generatedComputerChoice ()  {
  if (randomNumber === 1) {
    return computerChosen = 'rock'
  } else if (randomNumber === 2) {
    return computerChosen = 'paper'
  } else if (randomNumber === 3) {
    return computerChosen = 'scissors'
  }
}

//get results
function results () {
  if (computerChosen ==userChosen) {
    return result = 'There was a tie'
  } else if (computerChosen == 'rock' && userChosen == 'paper') {
    return result = "You lost"
  } else if (computerChosen == 'rock' && userChosen == 'scissors') {
    return result = "You win"
  } else if (computerChosen == 'paper' && userChosen == 'rock') {
    return result = "You lost"
  } else if (computerChosen == 'paper' && userChosen == 'scissors') {
    return result = "You win"
  } else if (computerChosen == 'scissors' && userChosen == 'rock') {
    return result = "You win"
  } else if (computerChosen == 'scissors' && userChosen == 'paper') {
    return result = "You lost"
  }
}
