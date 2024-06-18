//console.log("Hello World");

const getComputerChoice = function() {
    let choiceVal = Math.random() * 3;
    //console.log("Random Number is " + choiceVal);
    choiceVal = Math.floor(choiceVal);
    //console.log("Rounded number is " + choiceVal);
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