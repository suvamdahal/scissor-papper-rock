let userScore =0;
let compScore =0;
let index = 1;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner =(userWin ,compChoice,userChoice)=>{
    if(userWin){
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=(`you lose ${compChoice} beats ${userChoice}`);
        msg.style.backgroundColor = "red";
    }else{
        userScore++;
        userScorePara.innerText =userScore;
        console.log("you win");
        msg.innerText=(`you win ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor ="green";
}};

//for the logic of the computer choice
const genCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const randIx =Math.floor(Math.random()*3);
    return options[randIx];
};


//for the draw game
const drawGame =()=>{
    console.log("The game is Draw");
    msg.innerText=("The game is draw");
    msg.style.backgroundColor= "green";
};


const playGame = (userChoice) =>{
    console.log("user choice=",userChoice);//for user choice
    const compChoice = genCompChoice();//for comp choice
    console.log("comp choice =",compChoice);

    if ( userChoice===compChoice){
        //draw game
        drawGame();
    } else{
        let userWin;
        if ( userChoice === "rock"){
            userWin =compChoice==="paper";
        }else if (userChoice==="paper"){
            userWin = compChoice==="scissors";
        }else if (userChoice==="scissors"){
            userWin = compChoice==="rock";
        }
        showWinner(userWin ,compChoice,userChoice);
    }
};


//for the choice of the user and to click on the rock paper and scissors
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});