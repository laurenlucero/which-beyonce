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
    // console.log(event.target.getAttribute('data-image'));
    // console.log(this.selectedCards);
    this.selectedCards = this.selectedCards.push(clickedCard);
    if (this.selectedCards[0] === this.selectedCards[1]) {
    this.matchedCards.push(this.selectedCards)
  }
  console.table(this.matchedCards)
  }
  // moves matched pairs to display in aside.
  moveToMatched() {

  }
}
