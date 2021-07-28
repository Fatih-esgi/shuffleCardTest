// Write TypeScript code!
/// To test your code you can use the playground below
/// TypeScript playground: https://www.typescriptlang.org/play

// 1. With the 2 arrays named 'suit' and 'cards' you should initialize a deck with the initializeDeck function
// 2. The result must be: [1,H,2,H,3,H,....,Q,S,K,S]
// 3. You have to shuffle the deck, you can write your own algo in shuffleDeck and swapCard functions

const suit: Array<string> = ['H', 'C', 'D', 'S']; // Heart, Clubs, Diamond, Spades
const cards: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; // 1,2,....Queen, King

function start() {
  // Will contain cards as an array of numbers+letters  [1,H,2,H,3,H,....,Q,S,K,S]
  let deckOfCard = new Array<string>(103);

  // Initialize the Deck with valid cards
  initializeDeck(deckOfCard);
  console.log('Init Done');
  printDeck(deckOfCard);

  // Suffle the cards in the deck
  shuffleDeck(deckOfCard);
  console.log('After Shuffle');
  printDeck(deckOfCard);
}

// Create a fully intialiezed deck ready to be used
function initializeDeck(theDeck: Array<string>) {
  // assign card to 0-51th and suit to 52-103th elements of array
  for (let i = 0; i <= 52; i++) {
    if (i <= 12) {
      theDeck[i] = cards[i];
      theDeck[52 + i] = suit[0];
    }
    if (i > 12 && i <= 25) {
      theDeck[i] = cards[i - 13]; //i-13 to have the right position in cards array
      theDeck[52 + i] = suit[1];
    }
    if (i > 25 && i <= 38) {
      theDeck[i] = cards[i - 26]; //i-26 to have the right position in cards array
      theDeck[52 + i] = suit[2];
    }
    if (i > 38 && i <= 51) {
      theDeck[i] = cards[i - 39]; //i-39 to have the right position in cards array
      theDeck[52 + i] = suit[3];
    }
  }

  // move the suit element to match the right array position
  let newPos: number = 1; //array position of first suit

  for (let i = 52; i <= 103; i++) {
    theDeck.splice(newPos, 0, theDeck.splice(i, 1)[0]);
    newPos += 2; //icrement new pos by 2 to match the right position
  }
  return theDeck;
}

// Swap two cards in the deck
function swapCard(theDeck: Array<string>, card1: number, card2: number) {
  let theResult1 = ` carte1 : ${theDeck[card1]} of ${theDeck[card1 + 1]}`;
  let theResult2 = ` carte2 : ${theDeck[card2]} of ${theDeck[card2 + 1]}`;
  document.write(`<h1>votre tirage<h1><br>${theResult1}<br>${theResult2}`);
}

// Will shuffle a deck of card making sure the order is random
function shuffleDeck(theDeck: Array<string>) {
  // create temp array [[1,h],[2,h]] to shuffle
  let tempArray = new Array();
  for (let i = 0; i <= 103; i += 2) {
    tempArray.push([theDeck[i], theDeck[i + 1]]);
  }
  //shuffle the temp array
  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = tempArray[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = temp;
  }

  theDeck = [].concat.apply([], tempArray);
  swapCard(theDeck, 0, 10);
}

// Print Out a Deck
function printDeck(theDeck: Array<string>) {
  for (let i = 0; i < 52; i++) {
    console.log('print', theDeck[2 * i] + theDeck[2 * i + 1] + ',');
  }
}

start();

// note personelle

//  J'ai suivi durant cet exercice les demandes et le code déja présent. Cependant, si j'avais du réaliser cet
//  exercice, je ne serais pas parti sur  un array aussi destructuré que cela. Le fait de grouper
//   l'array principal comme l'array *tempArray* que j'ai crée aurait grandement simplifier les chose.
//  il y a cependant un petit bug que je n'ai pas pris le temps de résoudre quand au dernier printDeck qui affiche
//  l'array non mélangé.

//Fatih
