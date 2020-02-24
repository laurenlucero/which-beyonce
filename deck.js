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
    // added this extra parameter of greater than two because it was throwing an
    // error of undefined when it was less bc it couldn't find a dataset
    // rather than using include(), dot notation with dataset.[whatever is after the dash] works
    if (this.selectedCards.length >= 2 && this.selectedCards[0].dataset.image === this.selectedCards[1].dataset.image) {
      this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
      this.selectedCards.pop();
      this.selectedCards.pop();
    }
    console.log(this.selectedCards);
    console.log(this.matchedCards);
    console.log(cardObjects);
    console.log(event.target);
  }

  // moves matched pairs to display in aside.
  moveToMatched() {

  }
}
