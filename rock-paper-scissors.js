let score = [0, 0];

// GET RANDOM CHOICE
const computerPlay = () => {
    let randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice === 0) {
        return "rock";
    }
    else if (randomChoice === 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

// GET USER'S CHOICE
const userPlay = () => {
    let choice = prompt("Make your pick (rock, paper or scissors)")
    return choice;
}

// PLAY ROUND
const playRound = (userChoice, computerChoice) => {

    userChoice = userPlay();
    computerChoice = computerPlay();

    console.log(`User choice is ${userChoice}`);
    console.log(`Computer choice is ${computerChoice}`);

    if (userChoice === computerChoice) {
        return `It's a draw! The score is ${score}`;
    }
    else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        score[0]++;
        return `You win! ${userChoice} beats ${computerChoice}. The score is ${score}`
    }
    else {
        score[1]++;
        return `You lose. ${computerChoice} beats ${userChoice}. The score is ${score}`
    }

}


/* 
for (i = 0; i < 10; i++) {
    console.log(playRound());
    if (score[0] === 5) {
        console.log(`You win the game. The score is ${score}`);
    }
    else if (score[1] === 5) {
        console.log(`The computer wins the game. The score is ${score}`)
    }
} */
const playGame = () => {
    while (true) {
        alert(playRound());
        if (score[0] === 5) {
            alert(`You win the game. The score is ${score}`);
            break;
        }
        else if (score[1] === 5) {
            alert(`The computer wins the game. The score is ${score}`);
            break;
        }
        else {
            continue;
        }
    }
}

while (true) {
    playGame();
    let eleccion = prompt("¿Jugar otra ronda? Y/N").toUpperCase;
    if (eleccion == "N") {
        break;
    }
}

// POSIBILITIES:
// ROCK BEATS SCISSORS
// SCISSORS BEAT PAPER
// PAPER BEAT ROCK
// DRAW