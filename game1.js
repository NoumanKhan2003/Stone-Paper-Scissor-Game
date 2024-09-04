let userScoreNum = 0;
let compScoreNum = 0;
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let message = document.querySelector("#message");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin) => {
    if (userWin) {
        message.innerText = "You win!";
        userScoreNum++;
        userScore.innerText = userScoreNum;
        messages.style.backgroundColor = "rgb(20, 207, 70)";
        messages.style.color = "black";
    } else {
        message.innerText = "You Lose!"
        compScoreNum++;
        compScore.innerText = compScoreNum;
        messages.style.backgroundColor = " rgb(232, 69, 15)";
        messages.style.color = "white";
    }
}

const play = (userChoice) => {
    const compChoice = genCompChoice();
    let updateUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    let updateCompChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
    let updateComp = document.querySelector("#updateComp");
    let updateUser = document.querySelector("#updateUser");

    updateUser.innerHTML = updateUserChoice;
    updateComp.innerHTML = updateCompChoice;

    if (userChoice === compChoice) {
        message.innerText = "Game Draw!";
        messages.style.backgroundColor = "white";
        messages.style.color = "black";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

    document.querySelectorAll(".choice").forEach(choice => {
        choice.classList.remove("selected");
    });

    document.getElementById(userChoice).classList.add("selected");
    
}

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
        setTimeout(() => {
            document.querySelectorAll(".choice").forEach(choice => {
                choice.classList.remove("selected");
            });
        }, 300);
    });
});