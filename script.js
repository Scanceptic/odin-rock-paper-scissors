const getComputerChoice = function() {
    let choiceVal = Math.random() * 3;
    choiceVal = Math.floor(choiceVal);
    if (choiceVal === 0) {
        return "Rock";
    } else if (choiceVal === 1) {
        return "Paper";
    } else if (choiceVal === 2) {
        return "Scissors";
    } else {
        return "Error";
    }
}

let humanScore = 0;
let computerScore = 0;

let gameOver = false;

const results = document.querySelector("#results");

const createResult = function(result) {
    let li = document.createElement("li");
    li.textContent = result;
    return li;
}


const playRound = function(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "Rock":
            results.appendChild(createResult(`The Computer Played ${computerChoice}!`));
            switch(computerChoice) {
                case "Rock":
                    results.appendChild(createResult("It's a Draw! Rock can't beat Rock!"));
                    break;
                case "Paper":
                    results.appendChild(createResult("You Lose! Paper beats Rock!"));
                    computerScore++;
                    break;
                case "Scissors":
                    results.appendChild(createResult("You Win! Rock beats Scissors!"));
                    humanScore++;
                    break;
            }
            break;
        case "Paper":
            results.appendChild(createResult(`The Computer Played ${computerChoice}!`));
            switch(computerChoice) {
                case "Rock":
                    results.appendChild(createResult("You Win! Paper beats Rock!"));
                    humanScore++;
                    break;
                case "Paper":
                    results.appendChild(createResult("It's a Draw! Paper can't beat Paper!"));
                    break;
                case "Scissors":
                    results.appendChild(createResult("You Lose! Scissors beat Paper!"));
                    computerScore++;
                    break;
            }
            break;
        case "Scissors":
            results.appendChild(createResult(`The Computer Played ${computerChoice}!`));
            switch(computerChoice) {
                case "Rock":
                    results.appendChild(createResult("You Lose! Rock beats Scissors!"));
                    computerScore++;
                    break;
                case "Paper":
                    results.appendChild(createResult("You Win! Scissors beat Paper!"));
                    humanScore++;
                    break;
                case "Scissors":
                    results.appendChild(createResult("It's a Draw! Scissors can't beat Scissors!"));
                    break;
            }
        break;
    } 
}

const updateScore = function() {
    const score = document.querySelector("#score-counter");
    score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    if (humanScore + computerScore >= 5) {
        if (humanScore > computerScore) {
            let win = document.createElement("p");
            win.textContent = "You Win!!!";
            win.style.color = "lightcoral";
            win.style.fontWeight = "700";
            win.style.fontSize = "36px";
            results.appendChild(win);
        } else if (computerScore > humanScore) {
            let loss = document.createElement("p");
            loss.textContent = "You Lose...";
            loss.style.color = "black";
            loss.style.fontWeight = "700";
            loss.style.fontSize = "36px";
            results.appendChild(loss);
        };
        stopGame();
    };
};

const newGame = function() {
    humanScore = 0;
    computerScore = 0;
    
    updateScore();

    const element = document.getElementById("results");

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    };

    gameOver = false;
};

const stopGame = function() {
    const restartGame = document.createElement("p");
    restartGame.textContent = "Please click New Game in the top-right to play another game"
    restartGame.style.fontWeight = "700";
    results.appendChild(restartGame);
    gameOver = true;
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    if (gameOver) {
        return alert("Please start a new game to continue playing.");
    } else {
        playRound("Rock", getComputerChoice());
        updateScore();
    };
});

paper.addEventListener("click", () => {
    if (gameOver) {
        return alert("Please start a new game to continue playing.");
    } else {
        playRound("Paper", getComputerChoice());
        updateScore();
    };
});

scissors.addEventListener("click", () => {
    if (gameOver) {
        return alert("Please start a new game to continue playing.");
    } else {
        playRound("Scissors", getComputerChoice());
        updateScore();
    };
});

const newgame = document.querySelector("#new-game");

newgame.addEventListener("click", () => {
    newGame();
});

