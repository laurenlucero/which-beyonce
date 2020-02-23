class Card {
  constructor(matchInfo, altInfo) {
    this.matchInfo = matchInfo;
    this.matched = false;
    this.altInfo = altInfo;
  }
  match() {
    for (var i = 0; i < deck.matchedCards.length; i++) {
    if (deck.matchedCards[i].includes(this.matchInfo)) {
      this.matched = true;
    }
    }
  }
  }
