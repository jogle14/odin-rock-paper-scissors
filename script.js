function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);

    switch (cpuChoice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playGame(cpuChoice, playerChoice){
    console.log(cpuChoice)
    if (cpuChoice === playerChoice) {
        return "It's a draw, both sides chose " + cpuChoice + ". Refresh the page to go again.";
    }

    if (((cpuChoice === 'rock') && (playerChoice == 'scissors')) || ((cpuChoice === 'paper') && (playerChoice === 'rock')) || ((cpuChoice === 'scissors') && (playerChoice === 'paper'))) {
        return "CPU wins, as " + cpuChoice + " beats " + playerChoice + ". Refresh the page to go again.";
    }

    return "You win! " + playerChoice + " beats " + cpuChoice + ". Refresh the page to go again.";
}

let playerChoice = prompt("Type your choice of either 'rock', 'paper', or 'scissors'!").toLowerCase();

if ((playerChoice === 'rock') || (playerChoice === 'paper') || (playerChoice === 'scissors')) {
    console.log(playGame(getComputerChoice(), playerChoice));
} else {
    console.log("Invalid player choice! Refresh page and try again.")
}