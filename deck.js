class Deck {
  constructor(cardObjects) {
    this.cards = cardObjects;
    this.matchedCards = [];
    this.selectedCards = [];
  }
  //method that controls the card shuffle
  shuffle() {
    // var randomPos = Math.floor(Math.random() * 10);
    // for (var i = 0; i < this.cards.length; i++) {
    // this.cards.style.order = randomPos;
    var i = this.cards.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
      console.log(this.cards);
      return this.cards;
    }


  //method that checks if selected cards match
  checkSelectedCards(clickedCard) {
    this.selectedCards.push(clickedCard);
    if (this.selectedCards[0] === this.selectedCards[1]) {
      this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
      this.selectedCards.pop();
      this.selectedCards.pop();
    } else if (this.selectedCards.length === 2 && this.selectedCards[0] !== this.selectedCards[1]) {
      this.selectedCards.pop();
      this.selectedCards.pop();
      // where/when we need to flip cards back over
    }
    console.log(this.matchedCards);
    console.log(this.selectedCards);
  }
  // moves matched pairs to display in aside.
  moveToMatched() {

  }
}
