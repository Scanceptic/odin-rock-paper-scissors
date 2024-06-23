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
                    //console.log("Scissors");
                    result.textContent = "You Win! Rock beats Scissors!";
                    results.appendChild(result);
                    humanScore++;
                    break;
            }
            break;
        case "Paper":
            switch(computerChoice) {
                case "Rock":
                    console.log("You Win! Paper beats Rock!");
                    results.appendChild(result);
                    humanScore++;
                    break;
                case "Paper":
                    console.log("It's a Draw! Paper can't beat Paper!");
                    results.appendChild(result);
                    break;
                case "Scissors":
                    console.log("You Lose! Scissors beat Paper!");
                    results.appendChild(result);
                    computerScore++;
                    break;
            }
            break;
        case "Scissors":
            switch(computerChoice) {
                case "Rock":
                    console.log("You Lose! Rock beats Scissors!");
                    results.appendChild(result);
                    computerScore++;
                    break;
                case "Paper":
                    console.log("You Win! Scissors beat Paper!");
                    results.appendChild(result);
                    humanScore++;
                    break;
                case "Scissors":
                    console.log("It's a Draw! Scissors can't beat Scissors!");
                    results.appendChild(result);
                    break;
            }
        break;
    } 
}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    //console.log("Human Played Rock");
    playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    //console.log("Human Played Paper");
    playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    //console.log("Human Played Scissors");
    playRound("Scissors", getComputerChoice());
});


