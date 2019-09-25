dealerHand=[];
playerHand=[];

document.getElementById("deal-button").addEventListener("deal-button", dealCards);
function dealCards(){
    document.getElementById("dealer-hand").innerHTML='<img src="images/7_of_spades.png" alt=cards><img src="images/6_of_clubs.png" alt=cards>'
    document.getElementById("player-hand").innerHTML='<img src="images/5_of_hearts.png" alt=cards><img src="images/queen_of_diamonds.png" alt=cards>'
};

document.getElementById("hit-button").addEventListener("hit-button", hitMe);
function hitMe(){
    document.getElementById("player-hand").innerHTML='<img src="images/5_of_hearts.png" alt=cards><img src="images/queen_of_diamonds.png" alt=cards><img src="images/ace_of_diamonds.png" alt=cards>'
};

/*
var newDeck={}
var suits=["club","spade","heart","diamond"]
var values=[1,2,3,4,5,6,7,8,9,10,J,Q,K,A]

function newDeck(suit,value){
for (let suit of suits){
    for(let value of values){
        this.newDeck.push(newDeck(suit,value));
    }
}}
return this.newDeck;
*/
var aceOfClubs = { point: 1, suit: 'clubs' };var aceOfSpades={point:1,suit:"spades"};var aceOfHearts={point:1,suit:"hearts"};var aceOfDiamonds={point:1,suit:"diamonds"};
var twoOfClubs = { point: 2, suit: 'clubs' };var twoOfSpades={point:2,suit:"spades"};var twoOfHearts={point:2,suit:"hearts"};var twoOfDiamonds={point:2,suit:"diamonds"};
var threeOfClubs = { point: 3, suit: 'clubs' };var threeOfSpades={point:3,suit:"spades"};var threeOfHearts={point:3,suit:"hearts"};var threeOfDiamonds={point:3,suit:"diamonds"};
var fourOfClubs= { point: 4, suit: 'clubs' };var fourOfSpades={point:4,suit:"spades"};var fourOfHearts={point:4,suit:"hearts"};var fourOfDiamonds={point:4,suit:"diamonds"};
var fiveOfClubs = { point: 5, suit: 'clubs' };var fiveOfSpades={point:5,suit:"spades"};var fiveOfHearts={point:5,suit:"hearts"};var fiveOfDiamonds={point:5,suit:"diamonds"};
var sixOfClubs = { point: 6, suit: 'clubs' };var sixOfSpades={point:6,suit:"spades"};var sixOfHearts={point:6,suit:"hearts"};var sixOfDiamonds={point:6,suit:"diamonds"};
var sevenOfClubs = { point: 7, suit: 'clubs' };var sevenOfSpades={point:7,suit:"spades"};var sevenOfHearts={point:7,suit:"hearts"};var sevenOfDiamonds={point:7,suit:"diamonds"};
var eightOfClubs = { point: 8, suit: 'clubs' };var eightOfSpades={point:8,suit:"spades"};var eightOfHearts={point:8,suit:"hearts"};var eightOfDiamonds={point:8,suit:"diamonds"};
var nineOfClubs = { point: 9, suit: 'clubs' };var nineOfSpades={point:9,suit:"spades"};var nineOfHearts={point:9,suit:"hearts"};var nineOfDiamonds={point:9,suit:"diamonds"};
var tenOfClubs = { point: 10, suit: 'clubs' };var tenOfSpades={point:10,suit:"spades"};var tenOfHearts={point:10,suit:"hearts"};var tenOfDiamonds={point:10,suit:"diamonds"};
var jackOfClubs = { point: 11, suit: 'clubs' };var jackOfSpades={point:11,suit:"spades"};var jackOfHearts={point:11,suit:"hearts"};var jckOfDiamonds={point:11,suit:"diamonds"};
var queenOfClubs = { point: 12, suit: 'clubs' };var queenOfSpades={point:12,suit:"spades"};var queenOfHearts={point:12,suit:"hearts"};var queenOfDiamonds={point:12,suit:"diamonds"};
var kingOfClubs = { point: 13, suit: 'clubs' };var kingOfSpades={point:13,suit:"spades"};var kingOfHearts={point:13,suit:"hearts"};var kingOfDiamonds={point:13,suit:"diamonds"};


var deck = [ { point: 1, suit: 'clubs' },{ point: 2, suit: 'clubs' },{ point: 3, suit: 'clubs' },{ point: 4, suit: 'clubs' },{ point: 5, suit: 'clubs' },
{ point: 6, suit: 'clubs' },{ point: 7, suit: 'clubs' },{ point: 8, suit: 'clubs' },{ point: 9, suit: 'clubs' },{ point: 10, suit: 'clubs' },
{ point: 11, suit: 'clubs' },{ point: 12, suit: 'clubs' },{ point: 13, suit: 'clubs' },{ point: 1, suit: 'spades' },{ point: 2, suit: 'spades' },{ point: 3, suit: 'spades' },{ point: 4, suit: 'spades' },{ point: 5, suit: 'spades' },
{ point: 6, suit: 'spades' },{ point: 7, suit: 'spades' },{ point: 8, suit: 'spades' },{ point: 9, suit: 'spades' },{ point: 10, suit: 'spades' },
{ point: 11, suit: 'spades' },{ point: 12, suit: 'spades' },{ point: 13, suit: 'spades' },{ point: 1, suit: 'hearts' },{ point: 2, suit: 'hearts' },{ point: 3, suit: 'hearts' },{ point: 4, suit: 'hearts' },{ point: 5, suit: 'hearts' },
{ point: 6, suit: 'hearts' },{ point: 7, suit: 'hearts' },{ point: 8, suit: 'hearts' },{ point: 9, suit: 'hearts' },{ point: 10, suit: 'hearts' },
{ point: 11, suit: 'hearts' },{ point: 12, suit: 'hearts' },{ point: 13, suit: 'hearts' },{ point: 1, suit: 'diamonds' },{ point: 2, suit: 'diamonds' },{ point: 3, suit: 'diamonds' },{ point: 4, suit: 'diamonds' },{ point: 5, suit: 'diamonds' },
{ point: 6, suit: 'clubs' },{ point: 7, suit: 'clubs' },{ point: 8, suit: 'clubs' },{ point: 9, suit: 'clubs' },{ point: 10, suit: 'clubs' },
{ point: 11, suit: 'diamonds' },{ point: 12, suit: 'diamonds' },{ point: 13, suit: 'diamonds'}];

function randomDeck(deck){
    return deck[Math.floor(Math.random()*deck.length)];
    }
console.log(randomDeck(deck));

function images(card){
    var cardName;
    if (card.point === 1) {
      cardName = 'ace';
    } else if (card.point === 11) {
      cardName = 'jack';
    } else if (card.point === 12) {
      cardName = 'queen';
    } else if (card.point === 13) {
      cardName = 'king';
    } else {
      cardName = card.point;
    }
    return 'images/' + cardName + '_of_' + card.suit + '.png';
  }

  