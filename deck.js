class Deck {
  constructor(cardObjects) {
    this.cards = cardObjects;
    this.matchedCards = [];
    this.selectedCards = [];
  }

  //method that controls the card shuffle
  shuffle() {
    var i = this.cards.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
      return this.cards;
    }

  //method that checks if selected cards match
  checkSelectedCards(clickedCard) {
    this.selectedCards.push(clickedCard);
    if (this.selectedCards[0] === this.selectedCards[1]) {
      this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
      // this.selectedCards.pop();
      // this.selectedCards.pop();
    }
    console.log(this.selectedCards);
    console.log(this.matchedCards);
    console.log(cardObjects);
  }

  // moves matched pairs to display in aside.
  moveToMatched() {

  }
}
