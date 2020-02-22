class Card {
  constructor(matchInfo, altInfo) {
    this.matchInfo = matchInfo;
    this.matched = false;
    this.altInfo = altInfo;
    
  }

  match() {
    // We will want to match our values
    for (var i = 0; i < deck.matchedCards.length; i++) {
    if (this.matchInfo === deck.matchedCards[i]) {
      this.matched = true;
    }
  }
  }
}
