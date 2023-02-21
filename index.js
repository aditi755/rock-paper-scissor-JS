const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent=  `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkwinner();
}))


function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) +1;

    switch(randNum){
        case 1:
            computer ="Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;        
    }
}
function checkwinner(){
    if(player == computer){
        return "Draw";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "you win!" : "you lose"
    }
    else if(computer =="Paper"){
        return (player =="Scissors") ? "you win!" : "you lose"
    }
    else if(computer =="Scissors"){
        return (player =="Rock") ? "you win!" : "you lose"
    }
}