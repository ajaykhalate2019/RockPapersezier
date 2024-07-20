let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
 const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw . play again!";
    msg.style.background = "#081b31";
 };
 const shoeWinner= (userWin,  userChoice , compChoice) => {

    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        // console.log("you win!");
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.background = "red";
    }
 }
const playGame = (userChoice) => {
    // console.log("user Choice = " , userChoice);
    const compChoice = genCompChoice();
    // console.log("comp Choice = " , compChoice);

    if(userChoice == compChoice) {
    //Draw Game
    drawGame ();
    }else {
        let userWin = true;
        if (userChoice ==="rock") {  
       //scissors ,paaper 
       userWin = compChice ==="paper "? false :true;            
        }else if( userChoice === "paper") {
            //rock ,scissors
            userWin = compChoice === "scissors" ? false:true;

        }else {
            //rock ,paper
            userWin = compChoice === "rock" ? false:true;

        }
        showWinner(userWin , userChoice ,compChoice);
    }
};
 
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
    //    console.log("choice was clicked" ,userChoice) ;
       playGame(userChoice);
    });
});
