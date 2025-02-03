const boxOne = document.querySelector('.box.one')
const boxTwo = document.querySelector('.box.two')
const boxThree = document.querySelector('.box.three')

const submitBtnOne = document.querySelector('.submit-btn-one')
const submitBtnTwo = document.querySelector('.submit-btn-two')
const submitBtnThree = document.querySelector('.submit-btn-three')

const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')

const guessPlayerOne = document.querySelector('.guess-player-one')

const playerOneNameDisplay = document.querySelector('.player-one-name')

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

            console.log("Guess Number: " + guessPlayerOne.value)
        } else {
            alert("Please Choose a number between 0 to 9")
        }
    }
}