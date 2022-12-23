//Returns computer's randomly generated choice
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);

    switch (cpuChoice){
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

//Returns a statement about game results, along with what the computer chose
function playRound(playerChoice){
    let cpuChoice = getComputerChoice();
    // Draw, both the same
    if (cpuChoice === playerChoice) {
        return ["It's a draw, both sides chose " + cpuChoice + ". Refresh the page to go again.", cpuChoice];
    }
    //CPU won, these pairs mean the computer must have won
    if (((cpuChoice === 'ROCK') && (playerChoice == 'SCISSORS')) || ((cpuChoice === 'PAPER') && (playerChoice === 'ROCK')) || ((cpuChoice === 'SCISSORS') && (playerChoice === 'PAPER'))) {
        return ["CPU wins, as " + cpuChoice + " beats " + playerChoice + ". Refresh the page to go again.", cpuChoice];
    }
    //only result left is a Player win
    return ["You win! " + playerChoice + " beats " + cpuChoice + ". Refresh the page to go again.", cpuChoice];
}
//Main game function
function playGame(e){
    //Select main divs to be edited
    const playingField = document.querySelector('.playingField');
    const resultsField = document.querySelector('.resultsField');
    const totalsField = document.querySelector('.totals')

    //remove previous results, if there are any
    if (playingField.lastChild != null){
        playingField.removeChild(playingField.lastChild);
        playingField.removeChild(playingField.lastChild);
        playingField.removeChild(playingField.lastChild);
        playingField.removeChild(playingField.lastChild);
        resultsField.removeChild(resultsField.lastChild);
        totalsField.removeChild(totalsField.lastChild);
    }
    
    //selects the text from the button the player picked, then plays a game with it. Stores lowercase cpu and player choices for later use
    let playerChoice = e.target.innerText;
    let playerChoiceLower = playerChoice.toLowerCase();
    let result = playRound(playerChoice);
    let cpuChoiceLower = result[1].toLowerCase();

    //updates count on who won
    if (result[0].search("You win!") != -1) playerWins++;
    if (result[0].search("CPU wins") != -1) cpuWins++;
    if (result[0].search("a draw") != -1) draw++;

    //Displays results underneath the playing field
    const displayResults = document.createElement('div')
    displayResults.textContent = result[0];
    displayResults.className = "result";
    resultsField.appendChild(displayResults);

    //selects the pictures for what was picked during the game
    const cpuPic = document.createElement('img');
    cpuPic.src = `images\\${cpuChoiceLower}.png`;
    const playerPic = document.createElement('img');
    playerPic.src = `images\\${playerChoiceLower}.png`;

    //indicates who picked what on the playing field
    const cpuPicText = document.createElement('p');
    cpuPicText.textContent = "CPU CHOICE --->";
    const playerPicText = document.createElement('p');
    playerPicText.textContent = "PLAYER CHOICE --->";

    //Displays current totals on who was won how many games
    const totalsUpdated = document.createElement('p');
    totalsUpdated.textContent = `Player Wins: ${playerWins} CPU Wins: ${cpuWins} Draws: ${draw}`

    //Add all new elements to the page
    playingField.appendChild(cpuPicText);
    playingField.appendChild(cpuPic);
    playingField.appendChild(playerPicText);
    playingField.appendChild(playerPic);
    totalsField.appendChild(totalsUpdated);
}

//win totals
let playerWins = 0;
let cpuWins = 0;
let draw = 0;

//Creates an array of button objects, and added an Event Listener to each button
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener('click',playGame));