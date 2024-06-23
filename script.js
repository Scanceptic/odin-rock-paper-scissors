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

const results = document.querySelector("#results");

const createResult = function(result) {
    let li = document.createElement("li");
    li.textContent = result;
    return li;
}


const playRound = function(humanChoice, computerChoice) {
    switch(humanChoice) {
        case "Rock":
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
    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});


