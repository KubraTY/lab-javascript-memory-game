class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here

    if(!this.cards.length){
      return undefined
    }
   
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked = this.pairsClicked + 1;

    if (card1.getAttribute("data-card-name") === card2.getAttribute("data-card-name")) {
      this.pairsGuessed += 1;
      console.log("paired")
      return true;
      
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here

    if(this.pairsGuessed === this.cards.length/2){
      return true
    }

    return false

  }
}
