let suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
let value = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
class Deck{
    constructor(){
        // this.cards =[];
        this.resetDeck(); //must say this.then call on the function, becuase this is private and saying this makes that function available
    }
    showDeck() {
        for(let card in this.cards){
            console.log(this.cards[card]);
        }
    }
    shuffleDeck() {   //not creeating a new deck, but altering the one we already having
        for (let card in this.cards) {
            let index = Math.floor(Math.random() * 52) + 1;
            var temp = this.cards[card]; //this 3 step process is taking the card at that specific index and swamping it with a random index in the array
            this.cards[card] = this.cards[index];
            this.cards[index] = temp;
            console.log(this.cards[index]);
        }
    }
    resetDeck() {
        this.cards = []; //this is the array that the list of cards will sit in
        for(let face in suit){
            for(let num in value){
                let card = `${value[num]} + ${suit[face]}`;
                this.cards.push(card);
                console.log(card);
            }
        }
    }
    dealDeck() {
        let dealt_card = this.cards[0];
        this.cards.splice(0,1);
        return dealt_card;
    }
}
const deck1 = new Deck();
// deck1.showDeck();
// deck1.shuffleDeck();
// deck1.showDeck();

class Player{
    constructor(name){
        this.name = name;
        this.hand = []
    }
    takeCard(deck1){
        this.hand.push(deck1.dealDeck())
    }
    printCard(){
        console.log(`${this.name} has this hand:`)
        for(let hands in this.hand){
            console.log("==================")
            console.log(this.hand[hands]);
            console.log("==================")
        }
    }
}
const player1 = new Player("Billy");
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.takeCard(deck1);
player1.printCard();