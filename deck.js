class Deck {
  constructor(cardObjects) {
    this.cards = cardObjects;
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
    var i = this.cards.length,
      j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
    return this.cards;
  }

  checkSelectedCards(clickedCard) {
    this.selectedCards.push(clickedCard);
    this.moveToMatched();
  }

  moveToMatched() {
    if (this.selectedCards.length >= 2 &&
      this.selectedCards[0].dataset.image ===
      this.selectedCards[1].dataset.image) {
      this.matchedCards.push(this.selectedCards[0],
        this.selectedCards[1]);
      this.selectedCards.pop();
      this.selectedCards.pop();
    }
  }
}