var playerChoice = 0;
var computerChoice = 0;
var Winner = -1;

function play(choice) {
  playerChoice = choice;
  computerChoice = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

  if (playerChoice === computerChoice) {
    Winner = 0;
  } else if (playerChoice == 2 && computerChoice == 1) {
    Winner = 1;
  } else if (computerChoice == 2 && playerChoice == 1) {
    Winner = 2;
  } else if (playerChoice == 1 && computerChoice == 4) {
    Winner = 1;
  } else if (computerChoice == 1 && playerChoice == 4) {
    Winner = 2;
  } else if (playerChoice == 4 && computerChoice == 5) {
    Winner = 1;
  } else if (computerChoice == 4 && playerChoice == 5) {
    Winner = 2;
  } else if (playerChoice == 5 && computerChoice == 3) {
    Winner = 1;
  } else if (computerChoice == 5 && playerChoice == 3) {
    Winner = 2;
  } else if (playerChoice == 3 && computerChoice == 4) {
    Winner = 1;
  } else if (computerChoice == 3 && playerChoice == 4) {
    Winner = 2;
  } else if (playerChoice == 4 && computerChoice == 2) {
    Winner = 1;
  } else if (computerChoice == 4 && playerChoice == 2) {
    Winner = 2;
  } else if (playerChoice == 5 && computerChoice == 1) {
    Winner = 1;
  } else if (computerChoice == 5 && playerChoice == 1) {
    Winner = 2;
  } else if (playerChoice == 2 && computerChoice == 5) {
    Winner = 1;
  } else if (computerChoice == 2 && playerChoice == 5) {
    Winner = 2;
  } else if (playerChoice == 3 && computerChoice == 2) {
    Winner = 1;
  } else if (computerChoice == 3 && playerChoice == 2) {
    Winner = 2;
  } else if (playerChoice == 1 && computerChoice == 3) {
    Winner = 1;
  } else if (computerChoice == 1 && playerChoice == 3) {
    Winner = 2;
  }

  for (var index = 1; index < 6; index++) {
    document
      .getElementById(`choice-player-${index}`)
      .classList.remove("selected");
    document
      .getElementById(`choice-computer-${index}`)
      .classList.remove("selected");
  }

  document
    .getElementById(`choice-player-${playerChoice}`)
    .classList.add("selected");

  document
    .getElementById(`choice-computer-${computerChoice}`)
    .classList.add("selected");

  if (Winner == 0) {
    document.getElementById("Messages").innerHTML = "EMPATOU";
  } else if (Winner == 1) {
    document.getElementById("Messages").innerHTML = "JOGADOR GANHOU";
  } else if (Winner == 2) {
    document.getElementById("Messages").innerHTML = "COMPUTADOR GANHOU";
  }
}

/*
Legenda:
  1-Pedra
  2-Papel
  3-Tesoura
  4-Lagarto
  5-Spock

//Papel cobre pedra
//Pedra esmaga lagarto
//Lagarto envenena Spock
//Spock esmaga (ou derrete) tesoura
//Tesoura decapita lagarto
//Lagarto come papel
//Spock vaporiza pedra
//Papel refuta Spock
//Tesoura corta papel
//Pedra quebra tesoura
  */