// INITIALIZE SCORE
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

// GET USER'S CHOICE (if the input isn't any of the 3 options, the code will ask the user to input his choice again)
const userPlay = () => {
    while (true) {
        let choice = prompt("Take your pick (rock, paper or scissors)").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        else {
            alert("Please enter a valid answer")
        }
    }
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

// PLAY GAME FUNCTION
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

// LET USER PLAY ANOTHER GAME OR STOP THE PROGRAM
while (true) {
    playGame();
    let eleccion = prompt("¿Play another round? Y/N").toLowerCase();
    if (eleccion === "n") {
        break;
    }
    score = [0, 0]
}