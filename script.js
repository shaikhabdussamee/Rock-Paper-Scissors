
let userScore = 0;
let pcScore = 0;

const options = { //key-value pairs for the options
    "rock": "/assets/rock.png",
    "paper": "/assets/paper.png",
    "scissor": "/assets/scissor.png"
}

const userHand = (hand) => {

    //If user click on any image it should get hide
    let game = document.querySelector(".game");
    game.style.display = "none";

    //we have to display the user picked image after clicking on any image
    let pick = document.querySelector(".pick");
    pick.style.display = "flex";


    //Now we have to display the correct image on user picked side
    document.getElementById("userSelect").src = options[hand];
    let pcHands = pcPickHand();
    refreeHand(userHand,pcPickHand);
}

// Function for PC picking random hands
const pcPickHand = () => {
    let hands = ["rock", "paper", "scissor"];
    let pcHands = hands[Math.floor(Math.random() * 3)];
    document.getElementById("pcSelect").src = options[pcHands];
    return pcHands;
}

//refree function
const refreeHand = (userHand,pcHands) => {
    if (userHand == "paper" && pcPickHand == "scissors") {
        setDecision("YOU LOSE");
        setScore(pcScore + 1);
      }
      if (userHand == "paper" && pcPickHand == "rock") {
        setDecision("YOU WIN");
        setScore(userScore + 1);
      }
      if (userHand == "paper" && pcPickHand == "paper") {
        setDecision("TIE UP");
      }
      if (userHand == "rock" && pcPickHand == "scissors") {
        setDecision("YOU WIN");
        setScore(userScore + 1);
      }
      if (userHand == "rock" && pcPickHand == "paper") {
        setDecision("YOU LOSE");
        setScore(pcScore + 1);
      }
      if (userHand == "rock" && pcPickHand == "rock") {
        setDecision("TIE UP");
      }
      if (userHand == "scissors" && pcPickHand == "scissors") {
        setDecision("TIE UP");
      }
      if (userHand == "scissors" && pcPickHand == "rock") {
        setDecision("YOU LOSE");
        setScore(pcScore + 1);
      }
      if (userHand == "scissors" && pcPickHand == "paper") {
        setDecision("YOU WIN");
        setScore(userScore + 1);
      }

}

const gameDecision = (decision) => {
    document.querySelector(".decision h1").innerHTML = decision;
}

const setScore = (score) => {
    console.log(score);
}

