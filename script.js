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

function game (){
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Type your choice of either 'rock', 'paper', or 'scissors'!").toLowerCase();
        let result = '';

        result = playGame(getComputerChoice(), playerChoice);
        console.log(result);
        if (result.search("You win!") != -1){
            playerWins++;
        }
        if (result.search("CPU wins") != -1){
            cpuWins++;
        }
        if (result.search("a draw") != -1){
            draw++;
        }
    }

    return `The CPU won ${cpuWins} game(s), you won ${playerWins} game(s), and there were ${draw} draws.`
}

let playerWins = 0;
let cpuWins = 0;
let draw = 0;

console.log(game())