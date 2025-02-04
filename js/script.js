const boxOne = document.querySelector('.box.one')
const boxTwo = document.querySelector('.box.two')
const boxThree = document.querySelector('.box.three')
const boxFour = document.querySelector('.box.four')

const resultBox = document.querySelector('.box.result')

const submitBtnOne = document.querySelector('.submit-btn-one')
const submitBtnTwo = document.querySelector('.submit-btn-two')
const submitBtnThree = document.querySelector('.submit-btn-three')
const submitBtnFour = document.querySelector('.submit-btn-four')

const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')

const guessPlayerOne = document.querySelector('.guess-player-one')
const guessPlayerTwo = document.querySelector('.guess-player-two')

const playerOneNameDisplay = document.querySelector('.player-one-name')
const playerTwoNameDisplay = document.querySelector('.player-two-name')

const playersDisplay = document.querySelector('.players-display')
const resultText = document.querySelector('.result-text')


//=====================================================================
// -- Stored Number
//=====================================================================

const storedNumber = 7


//=====================================================================
// -- Button Click Functionality
//=====================================================================

submitBtnOne.onclick = function () {
    if(inputOne.value == "") {
        alert("Please Enter Your Name")
    } else {
        boxOne.style.display = "none"
        boxTwo.style.display = "flex"
        playerOneNameDisplay.innerHTML = inputOne.value
    }
}

submitBtnTwo.onclick = function () {
    if(guessPlayerOne.value == "") {
        alert("Please Enter Your Guess Number")
    } else {
        if(guessPlayerOne.value >= 0 && guessPlayerOne.value <= 9) {
            boxTwo.style.display = "none"
            boxThree.style.display = "flex"

            console.log("Player 1 Guess Number: " + guessPlayerOne.value)
        } else {
            alert("Please Choose a number between 0 to 9")
        }
    }
}

submitBtnThree.onclick = function () {
    if(inputTwo.value == "") {
        alert("Please Enter Your Name")
    } else {
        boxThree.style.display = "none"
        boxFour.style.display = "flex"
        playerTwoNameDisplay.innerHTML = inputTwo.value
    }
}

submitBtnFour.onclick = function () {
    if(guessPlayerTwo.value == "") {
        alert("Please Enter Your Guess Number")
    } else {
        if(guessPlayerTwo.value >= 0 && guessPlayerTwo.value <= 9) {
            boxFour.style.display = "none"
            resultBox.style.display = "flex"

            console.log("Player 2 Guess Number: " + guessPlayerTwo.value)
        } else {
            alert("Please Choose a number between 0 to 9")
        }
    }

    if(storedNumber == guessPlayerOne.value && storedNumber !== guessPlayerTwo.value) {
        playersDisplay.innerHTML = inputOne.value
        resultText.innerHTML = "Congratulations! You won"
    } else if(storedNumber == guessPlayerTwo.value && storedNumber !== guessPlayerOne.value) {
        playersDisplay.innerHTML = inputTwo.value
        resultText.innerHTML = "Congratulations! You won"
    }  else {
        playersDisplay.innerHTML = "Both of you"
        resultText.innerHTML = "Game over! You all lost this game"
    }

    if(storedNumber == guessPlayerOne.value && storedNumber == guessPlayerTwo.value) {
        playersDisplay.innerHTML = "Both of you"
        resultText.innerHTML = "Congratulations! You all win this game"
    }
}

function reloadFunc() {
    location.reload()
}