var cardContainer = document.querySelector('.b-cards');
var allBCards = document.querySelectorAll('.b-card');
var winScreen = document.querySelector('.win-screen');
var mainScreen = document.querySelector('main');
// var firstCard;
// var secondCard;

cardContainer.addEventListener('click', flipCard);

function flipCard() {
  if (event.target.classList.contains('b-card')) {
    event.target.classList.toggle('flip');
  }
  console.log('i was clicked');
  console.log(event.target);
}








// cardContainer.addEventListener('click', firstCard)
//
// var firstCard = function() {
//   console.log('hiiii');
//   return event.target;
// }



// cardContainer.addEventListener('click', checkForMatch)
//
// function checkForMatch(event) {
//
//   if(event.target.dataset.image == event.target.dataset.image)
//   console.log('heyyyy');
// }


window.onload = function hideWinPage() {
  winScreen.classList.add('hidden');
}

var card1 = new Card ("ballet-bey", "Ballet Bey")
var card2= new Card ("ballet-bey", "Ballet Bey")
var card3 = new Card ("earrings-bey", "Earrings Bey")
var card4 = new Card ("earrings-bey", "Earring Bey")
var card5 = new Card ("hat-bey", "Hat Bey")
var card6 = new Card ("hat-bey", "Hat Bey")
var card7 = new Card ("kissy-bey", "Kissy Bey")
var card8 = new Card ("kissy-bey", "Kissy Bey")
var card9 = new Card ("braids-bey", "Braids Bey")
var card10 = new Card ("braids-bey", "Braids Bey")
var cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
var deck = new Deck (cards);

  function displayCards() {
    for (var i = 0; i < deck.cards.length; i++) {
     console.log(deck.cards[i]);
     cardContainer.innerHTML+=`
     <div class="b-card" data-image=${deck.cards[i].matchInfo}>
        <div class="front-card">B</div>
        <img class="back-card" src="assets/${deck.cards[i].matchInfo}.jpg" alt="${deck.cards[i].altInfo}">
      </div>
     `
      // deck.cards[i] gives us the current element
    }
  }
  displayCards();


  // sample event to add back in win page

  // cardContainer.addEventListener('click', switchScreens)
  //
  // function switchScreens() {
  //   winScreen.classList.remove('hidden');
  //   mainScreen.classList.add('hidden');
  // }
