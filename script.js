let randomNo = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#sbmt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".prevGuess"); 
const remaining = document.querySelector(".remGuess");
const startOver = document.querySelector(".resultPara");
const lowOrHi = document.querySelector(".low_hi");

const p = document.createElement("p");
const guess  = userInput.value
let previousGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("please Enter the valid number");
  } else if (guess < 1) {
    alert("please Enter the number greater than 1");
  } else if (guess > 100) {
    alert("please Enter the number smaller than 100");
  } else {
    previousGuess.push(guess);
    if (numGuess == 11) {
      dispalyGuess(guess);
      displayMessage(`<p style="color:red">Game Over , Random Number was ${randomNo}</p>`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNo) {
    displayMessage(`<p  style = "color:green">Congratulations, Your guess is right!`);
    endGame()
  } else if (guess < randomNo) {
    displayMessage("Your guess is too low");
  } else {
    displayMessage("Your guess is tooo high");
  }
}

//To cleanup guess
function dispalyGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add('.resultpara');
  p.innerHTML = `<h2 id="newGame">Start New Game!</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click', function(e){
    randomNo = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess} `;
    lowOrHi.innerHTML='';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true
  });
}
