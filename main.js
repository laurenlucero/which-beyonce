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
var lockBoard = false;
var matchCount = document.querySelector('.matched-count');
var startTime;
var endTime;
var winTime;
var winTimeDisplay = document.querySelector('.win-time')
var playAgainBtn = document.querySelector('.play-again-btn')
var completedPairs = document.querySelector('.completed-pairs');
var highScores = [];
var orderedList = document.querySelector('ol');

cardContainer.addEventListener('click', flipCard);
playAgainBtn.addEventListener('click', hideWinPage);

function flipCard() {
  if (lockBoard) return;
  var clickedCard = event.target;
  if (event.target.classList.contains('b-card')) {
    event.target.classList.toggle('flip');
    //focus on disabling the event lsitener
    deck.checkSelectedCards(clickedCard);
    changeToMatched(cardObjects);
    showPairs();
    unflipCards();
  }
}

function changeToMatched(cardObjects) {
  for (var i = 0; i < cardObjects.length; i++) {
    cardObjects[i].match();
  }
  hideMatchedCards(deck.matchedCards);
}

function unflipCards() {
    if (deck.selectedCards.length === 2 &&
      deck.selectedCards[0] !== deck.selectedCards[1]) {
      lockBoard = true;
      setTimeout(() => {
      deck.selectedCards[0].classList.remove('flip');
      deck.selectedCards[1].classList.remove('flip');
      deck.selectedCards.pop();
      deck.selectedCards.pop();
      lockBoard = false;
}, 1500);
  }
}

window.onload = hideWinPage();
window.onload = getHighScores();

function hideWinPage() {
  winScreen.classList.add('hidden');
  mainScreen.classList.remove('hidden');
  deck.matchedCards = [];
  matchCount.innerText = 0;
  displayCards();
  startTime = Date.now();
  completedPairs.innerHTML = ``;
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

  function hideMatchedCards(matchedCards) {
    //eventually add delay?
    for (var i = 0; i < matchedCards.length; i++) {
      matchedCards[i].classList.add('hidden');
    }
    updateCounter();
  }

  function updateCounter() {
    matchCount.innerText = (deck.matchedCards.length) / 2;
    getWinTime();
  }

  function getWinTime() {
    if (deck.matchedCards.length === 10) {
      endTime = Date.now();
      console.log(endTime);
      winTime = Math.floor((endTime - startTime) / 1000);
      storeHighScores();
      showWinScreen();
    }
  }

  function showWinScreen() {
      winScreen.classList.remove('hidden');
      mainScreen.classList.add('hidden');
      winTimeDisplay.innerHTML = `${winTime} seconds`;
  }

  function showPairs() {
    if (deck.matchedCards.length >= 2) {
          completedPairs.innerHTML = `<div class="completed-pair"><img src="assets/${deck.matchedCards[0].dataset.image}.jpg"
          alt="${deck.matchedCards[0].dataset.image}"></div>`
    }
    if (deck.matchedCards.length >= 4) {
          completedPairs.innerHTML += `<div class="completed-pair"><img src="assets/${deck.matchedCards[2].dataset.image}.jpg"
          alt="${deck.matchedCards[2].dataset.image}"></div>`
    }
    if (deck.matchedCards.length >= 6) {
          completedPairs.innerHTML += `<div class="completed-pair"><img src="assets/${deck.matchedCards[4].dataset.image}.jpg"
          alt="${deck.matchedCards[4].dataset.image}"></div>`
    }
    if (deck.matchedCards.length >= 8) {
          completedPairs.innerHTML += `<div class="completed-pair"><img src="assets/${deck.matchedCards[6].dataset.image}.jpg"
          alt="${deck.matchedCards[6].dataset.image}"></div>`
    }
    if (deck.matchedCards.length >= 10) {
          completedPairs.innerHTML += `<div class="completed-pair"><img src="assets/${deck.matchedCards[8].dataset.image}.jpg"
          alt="${deck.matchedCards[8].dataset.image}"></div>`
    }
}

function storeHighScores() {
  highScores.push(winTime);
  if (highScores.length > 3) {
    highScores.sort((a,b) => a-b);
    highScores.pop();
  }
  console.log(highScores);
  localStorage.setItem('highScores', JSON.stringify(highScores));
}

function getHighScores() {
  var stringifiedScores = localStorage.getItem('highScores') || '[]';
  var parsedHighScores = JSON.parse(stringifiedScores);
  highScores = parsedHighScores;
  displayHighScores();
}

function displayHighScores() {
  orderedList.innerHTML = '';
  for (var i = 0; i < highScores.length; i++) {
    orderedList.innerHTML += `<li>${highScores[i]}</li>`;
  }
}
