//console.log("Hello World");

const getComputerChoice = function() {
    console.log("Computer Choosing...");
    let choiceVal = Math.random() * 3;
    //console.log("Random Number is " + choiceVal);
    choiceVal = Math.floor(choiceVal);
    //console.log("Rounded number is " + choiceVal);
    if (choiceVal === 0) {
        console.log("Computer chose rock")
        return "Rock";
    } else if (choiceVal === 1) {
        console.log("Computer chose paper");
        return "Paper";
    } else if (choiceVal === 2) {
        console.log("Computer chose scissors");
        return "Scissors";
    } else {
        return "Error";
    }
}

//console.log(getComputerChoice());

const getHumanChoice = function() {
    let choiceVal = prompt("Enter your move: Rock, Paper, or Scissors?");
    if (choiceVal === "Rock") {
        return "Rock";
    } else if (choiceVal === "Paper") {
        return "Paper";
    } else if (choiceVal === "Scissors") {
        return "Scissors";
    } else {
        return "Error";
    }
}

//console.log(getHumanChoice());

/*
const playGame = function (rounds) {

    let humanScore = 0;
    let computerScore = 0;

    const playRound = function(humanChoice, computerChoice) {
        switch(humanChoice) {
            case "Rock":
                switch(computerChoice) {
                    case "Rock":
                        console.log("It's a Draw! Rock can't beat Rock!");
                        break;
                    case "Paper":
                        console.log("You Lose! Paper beats Rock!");
                        computerScore++;
                        break;
                    case "Scissors":
                        console.log("You Win! Rock beats Scissors!");
                        humanScore++;
                        break;
                }
                break;
            case "Paper":
                switch(computerChoice) {
                    case "Rock":
                        console.log("You Win! Paper beats Rock!");
                        humanScore++;
                        break;
                    case "Paper":
                        console.log("It's a Draw! Paper can't beat Paper!");
                        break;
                    case "Scissors":
                        console.log("You Lose! Scissors beat Paper!");
                        computerScore++;
                        break;
                }
                break;
            case "Scissors":
                switch(computerChoice) {
                    case "Rock":
                        console.log("You Lose! Rock beats Scissors!");
                        computerScore++;
                        break;
                    case "Paper":
                        console.log("You Win! Scissors beat Paper!");
                        humanScore++;
                        break;
                    case "Scissors":
                        console.log("It's a Draw! Scissors can't beat Scissors!");
                        break;
                }
            break;
        } 
    }

    for (let i = 0; i < rounds; i++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }     

    return console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
}
playGame(5);  
*/


const playRound = function(humanChoice, computerChoice) {
    console.log("Evaluating Human Move...");
    switch(humanChoice) {
        case "Rock":
            console.log("Rock");
            console.log("Evaluating Computer Move...");
            switch(computerChoice) {
                case "Rock":
                    console.log("Rock");
                    console.log("It's a Draw! Rock can't beat Rock!");
                    break;
                case "Paper":
                    console.log("Paper");
                    console.log("You Lose! Paper beats Rock!");
                    //computerScore++;
                    break;
                case "Scissors":
                    console.log("Scissors");
                    console.log("You Win! Rock beats Scissors!");
                    //humanScore++;
                    break;
            }
            break;
        case "Paper":
            console.log("Paper");
            console.log("Evaluating Computer Move...");
            switch(computerChoice) {
                case "Rock":
                    console.log("Rock");
                    console.log("You Win! Paper beats Rock!");
                    //humanScore++;
                    break;
                case "Paper":
                    console.log("Paper");
                    console.log("It's a Draw! Paper can't beat Paper!");
                    break;
                case "Scissors":
                    console.log("Scissors");
                    console.log("You Lose! Scissors beat Paper!");
                    //computerScore++;
                    break;
            }
            break;
        case "Scissors":
            console.log("Scissors");
            console.log("Evaluating Computer Move...");
            switch(computerChoice) {
                case "Rock":
                    console.log("Rock");
                    console.log("You Lose! Rock beats Scissors!");
                    //computerScore++;
                    break;
                case "Paper":
                    console.log("Paper");
                    console.log("You Win! Scissors beat Paper!");
                    //humanScore++;
                    break;
                case "Scissors":
                    console.log("Scissors");
                    console.log("It's a Draw! Scissors can't beat Scissors!");
                    break;
            }
        break;
    } 
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    console.log("Human Played Rock");
    playRound("Rock", getComputerChoice);
});

paper.addEventListener("click", () => {
    console.log("Human Played Paper");
    playRound("Paper", getComputerChoice);
});

scissors.addEventListener("click", () => {
    console.log("Human Played Scissors");
    playRound("Scissors", getComputerChoice);
});