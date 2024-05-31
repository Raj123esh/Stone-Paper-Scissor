let userScore=0;
let ComputerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const computerscore=document.querySelector("#computer-score");

function genCompChoice() {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

function drawGame(){
    console.log("Game was draw.");
    msg.innerText="game was draw. Play again";
    msg.style.backgroundColor="#081b31";
}

function showWinner(userwin){
    if(userwin)
    {
        userScore++;
        userscore.innerText=userScore;
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else{
        ComputerScore++;
        computerscore.innerText=ComputerScore;
        console.log("You lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}

function playGame(userchoice) {
    console.log("user choice = " + userchoice);
    // Generate computer choice.
    const compChoice=genCompChoice();
    console.log("computer choice = " + compChoice);
    if(userchoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            //scissors,paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userchoice==="paper")
        {
            //scissors,rock
            userwin = compChoice === "scissors" ? false : true;
        }
        else
        {
            //rock,paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
}

for (const choice of choices) {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
}
