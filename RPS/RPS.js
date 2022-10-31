

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('connors-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    //console.log(randomNumber)
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'Draw!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'y\'lose pal'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'y\'win pal'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'y\'win pal'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'y\'lose pal'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'y\'win pal'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'y\'lose pal'
    }
    resultDisplay.innerHTML = result
}




