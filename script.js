console.log("Hello World");

const getComputerChoice = function() {
    let choiceVal = Math.random() * 3;
    console.log("Random Number is " + choiceVal);
    choiceVal = Math.floor(choiceVal);
    console.log("Rounded number is " + choiceVal);
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

console.log(getComputerChoice());