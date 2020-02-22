class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
  }
  //method that controls the card shuffle
  shuffle() {

  }
  //method that checks if selected cards match
  checkSelectedCards(clickedCard) {
    this.selectedCards.push(clickedCard);
    // for (var i = 0; i > this.selectedCards.length; i++)
    if (this.selectedCards[0] === this.selectedCards[1]) {
      this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
      this.selectedCards.pop();
      this.selectedCards.pop();
    } else if (this.selectedCards.length === 2 && this.selectedCards[0] !== this.selectedCards[1]) {
      this.selectedCards.pop();
      this.selectedCards.pop();
    }
    console.log(this.matchedCards);
    console.log(this.selectedCards);
  }
  // moves matched pairs to display in aside.
  moveToMatched() {

  }
}
