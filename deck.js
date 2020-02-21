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
    console.log(event.target.getAttribute('data-image'));
    this.selectedCards = this.selectedCards.push(clickedCard);
    // console.log(this.selectedCards);
  }
  // moves matched pairs to display in aside.
  moveToMatched() {

  }
}
