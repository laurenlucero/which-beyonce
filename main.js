var cardContainer = document.querySelector('.b-cards');
var winScreen = document.querySelector('.win-screen');
var mainScreen = document.querySelector('main');
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
var cardObjects = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
var deck = new Deck (cardObjects);

cardContainer.addEventListener('click', flipCard);

function flipCard() {
  if (event.target.classList.contains('b-card')) {
    event.target.classList.toggle('flip');
  }
  var clickedCard = event.target;
  deck.checkSelectedCards(clickedCard);
  changeToMatched(cardObjects);
  limitFlips();
}

function changeToMatched(cardObjects) {
  for (var i = 0; i < cardObjects.length; i++) {
    cardObjects[i].match();
  }
}

// can still click more than two cards
// matched cards not pushing into matchedCards array BC matched is not changing to true when cards match
function limitFlips() {
    if (deck.selectedCards.length === 2 && deck.selectedCards[0] !== deck.selectedCards[1]) {
      setTimeout(() => {
      deck.selectedCards[0].classList.remove('flip');
      deck.selectedCards[1].classList.remove('flip');
      deck.selectedCards.pop();
      deck.selectedCards.pop();
}, 1500);
  }
}

window.onload = function hideWinPage() {
  winScreen.classList.add('hidden');
  displayCards();
}

  function displayCards() {
    deck.shuffle();
    for (var i = 0; i < deck.cards.length; i++) {
     cardContainer.innerHTML+=`
     <div class="b-card" data-image=${deck.cards[i].matchInfo}>
        <div class="front-card">B</div>
        <img class="back-card" src="assets/${deck.cards[i].matchInfo}.jpg"
        alt="${deck.cards[i].altInfo}">
      </div>`
    }
  }

  // sample event to add back in win page

  // cardContainer.addEventListener('click', switchScreens)
  //
  // function switchScreens() {
  //   winScreen.classList.remove('hidden');
  //   mainScreen.classList.add('hidden');
  // }
