console.log("Script started")

let guesses = 0;
let firstCardId = "";
let secondCardId = "";

 function flipCard(cardId) {
  // Print click to console to work
  console.log("click");
  // Get the card by its id and store it =
  let card = document.getElementById(cardId);
  // Changes color to reveal text
  card.style.color = "orange";
  card.style.backgroundColor = "black";

  // Store first card id 
  if (firstCardId == "") {
    // Store first card id
    firstCardId = cardId;
 }
 else {
    // Store second card id
    secondCardId = cardId;


// Check form a match
setTimeout(checkForMatch, 750);
 }


}

function checkForMatch() {
  // Get card divs to check
  let card1 = document.getElementById(firstCardId);
  let card2 = document.getElementById(secondCardId);
  console.log(card1);
  console.log(card2);
  if (card1.innerText == card2.innerText) {
    console.log("Match");
    card1.style.backgroundColor ="darkgreen";
    card2.style.backgroundColor ="darkgreen";
  }
  else {
    card1.style.color = "white";
    card1.style.backgroundColor = "white";
    card2.style.color = "white";
    card2.style.backgroundColor = "white";
  }

  firstCardId = "";
  secondCardId = "";
}