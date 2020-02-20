var cardContainer = document.querySelector('.b-cards');
const allBCards = document.querySelectorAll('.b-card');
var winScreen = document.querySelector('.win-screen');
var mainScreen = document.querySelector('main');

function flipCard() {
  this.classList.toggle('flip');

}

allBCards.forEach(bCard => bCard.addEventListener('click', flipCard))

window.onload = function hideWinPage() {
  winScreen.classList.add('hidden');
}


// sample event to add back in win page

// cardContainer.addEventListener('click', switchScreens)
//
// function switchScreens() {
//   winScreen.classList.remove('hidden');
//   mainScreen.classList.add('hidden');
// }

var card1 = new Card ("ballet-bey")
 
var card2= new Card ("ballet-bey")

var card3 = new Card ("earrings-bey")
  
var card4 = new Card ("earrings-bey")

var card5 = new Card ("hat-bey")

var card6 = new Card ("hat-bey")

var card7 = new Card ("kissy-bey")

var card8 = new Card ("kissy-bey")

var card9 = new Card ("braids-bey")

var card10 = new Card ("braids-bey")
 
var cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

var deck = new Deck (cards);

  function displayCards() {
    for (var i = 0; i < deck.cards.length; i++) {
     console.log(deck.cards[i]);
     cardContainer.innerHTML+=`
     <div class="b-card one" data-image=${deck.cards[i].matchInfo}>
        <div class="front-card">B</div>
        <img class="back-card" src="assets/bey-0.jpg" alt="Ballet Bey">
      </div>
     `
      // deck.cards[i] gives us the current element
    }

  }
  displayCards();