const handOptions = {
    "rock": "/assets/rock.png",
    "paper": "/assets/paper.png",
    "scissor": "/assets/scissor.png"
  }
  let userscore = Number(window.localStorage.getItem("user"));
  let compscore = Number(window.localStorage.getItem("comp"));
  document.querySelector(".userscore h1").innerText = window.localStorage.getItem("user")?? "0";
  document.querySelector(".compscore h1").innerText = window.localStorage.getItem("comp")?? "0";


  const pickUserHand = (hand) => {
    document.querySelector(".userhand").style.display = "block";
    document.querySelector(".computerhand").style.display = "block"; 
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    
    //set user image
    document.getElementById("userPickImage").src = handOptions[hand];
    console.log(handOptions[hand]);
    pickComputerHand(hand);
    
  }
  
  const pickComputerHand = (hand) => {
    
      let hands = ["rock", "paper", "scissor"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
      // set computer image 
      document.getElementById("computerPickImage").src = handOptions[cpHand]
      
      referee(hand, cpHand);
  };
  
  const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissor") {
      setDecision("YOU LOSE");
      incScore('C');
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN");
      incScore('U');
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("TIE UP");
    }
    if (userHand == "rock" && cpHand == "scissor") {
      setDecision("YOU WIN");
      incScore('U');
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE");
      incScore('C');
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "scissor") {
      setDecision("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "rock") {
      setDecision("YOU LOSE");
      incScore('C')
    }
    if (userHand == "scissor" && cpHand == "paper") {
      setDecision("YOU WIN");
      incScore('U');
    }
  };
  
  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    document.querySelector(".trophy").style.display = "none";
    document.querySelector(".scoreboard").style.display = "block";
    document.querySelector(".hands").style.display = "flex";
 }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
    if(decision == "TIE UP"){
        document.querySelector(".decision h2").innerText = "";
        document.querySelector(".newGame").innerText = "Replay";
    }
    else{
        document.querySelector(".newGame").innerText = "PLAY AGAIN";
        document.querySelector(".decision h2").innerText = "AGAINST PC";
    }
   
  }
  //Winner page
  const showWinnerPage = () => {
    document.querySelector(".decision h1").innerText = userscore >= 15 ? "HURRAY!!":"OOPS!!";
    document.querySelector(".decision h2").innerText = userscore >= 15 ? "YOU WON THE GAME":"BETTER LUCK NEXT TIME";
    document.querySelector(".newGame").innerText = "PLAY AGAIN";
    document.querySelector(".trophy").style.display = "block";
    document.querySelector(".scoreboard").style.display = "none";
    document.querySelector(".hands").style.display = "none";
    document.querySelector(".userhand").style.display = "none";
    document.querySelector(".computerhand").style.display = "none";
    window.localStorage.clear();
    userscore = 0;
    compscore = 0;
    document.querySelector(".userscore h1").innerText = window.localStorage.getItem("user")?? "0";
    document.querySelector(".compscore h1").innerText = window.localStorage.getItem("comp")?? "0";
  
}


  
  const incScore = (player) => {
    if(userscore >= 15 || compscore >= 15){
        showWinnerPage();
    }
    else{
    if(player == 'C'){
    compscore+=1;
   }
   else{
    userscore +=1;
   }
   window.localStorage.setItem("user", userscore);
   window.localStorage.setItem("comp", compscore);
    
    document.querySelector(".userscore h1").innerText = userscore;
    document.querySelector(".compscore h1").innerText = compscore;
  }
}
