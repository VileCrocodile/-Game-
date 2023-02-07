const deck = [];
const discard = [];
const foundations = [[], [], [], []];
const tableau = [[], [], [], [], [], [], []];
const suits = ["hearts", "diams", "spades", "clubs"];
const stacks = document.querySelectorAll(".stack");
const card = document.getElementById("card");
const front = document.getElementById("front");
const back = document.getElementById("back");




// Create deck of cards
for (let suit of ['&spades;', '&clubs;', '&diams;', '&hearts;']) {
  for (let value of ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) {
    deck.push({ suit, value });
  }
}

// Shuffle deck
for (let i = deck.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
}

// Deal cards to tableau
for (let i = 0; i < 7; i++) {
  for (let j = 0; j <= i; j++) {
    tableau[i].push(deck.pop());
  }
}


// Render board
const board = document.getElementById('board');
for (let i = 0; i < 7; i++) {
  const stack = document.createElement('div');
  stack.classList.add('stack');
  stack.id = `tableau${i + 1}`;
  for (let j = 0; j < tableau[i].length; j++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `${tableau[i][j].value}<br>${tableau[i][j].suit}`;
    stack.appendChild(card);
  }
  board.appendChild(stack);
}

// Populate the deck array with cards
for (let suit of suits) {
  for (let value = 1; value <= 13; value++) {
    deck.push({ suit, value });
  }
}

// Deal the cards to the stacks
for (let i = 0; i < deck.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("back");
  stacks[i % 7].appendChild(card);

  // Add a click event listener to toggle the back class
  card.addEventListener("click", function() {
    this.classList.toggle("back");
  });
}
let isDiscarded = false;

card.addEventListener("click", function() {
  isDiscarded = !isDiscarded;
  if (isDiscarded) {
    front.style.display = "none";
    back.style.display = "block";
  } else {
    front.style.display = "block";
    back.style.display = "none";
  }
});

ImageArray = new Array();
    image[0] = 'ace_clubs.png';
    image[1] = 'ace_diamonds.png';
    image[2] = 'ace_hearts.png';
    image[3] = 'ace_spades.png';
    image[4] = 'two_clubs.png';
    image[5] = 'two_diamonds.png';
    image[6] = 'two_hearts.png';
    image[7] = 'two_spades.png';
    image[8] = 'three_clubs.png';
    image[9] = 'three_diamonds.png';
    image[10] = 'three_hearts.png';
    image[11] = 'three_spades.png';
    image[12] = 'four_clubs.png';
    image[13] = 'four_hearts.png';
    image[14] = 'four_diamonds.png';
    image[15] = 'four_spades.png';
    image[16] = 'five_clubs.png';
    image[17] = 'five_diamonds.png';
    image[18] = 'five_hearts.png';
    image[19] = 'five_spades.png';
    image[20] = 'six_clubs.png';
    image[21] = 'six_diamonds.png';
    image[22] = 'six_hearts.png';
    image[23] = 'six_spades.png';
    image[24] = 'seven_clubs.png';
    image[25] = 'seven_diamonds.png';
    image[26] = 'seven_hearts.png';
    image[27] = 'seven_spades.png';
    image[28] = 'eight_clubs.png';
    image[29] = 'eight_diamonds.png';
    image[30] = 'eight_hearts.png';
    image[31] = 'eight_spades.png';
    image[32] = 'nine_clubs.png';
    image[33] = 'nine_diamonds.png';
    image[34] = 'nine_hearts.png';
    image[35] = 'nine_spades.png';
    image[36] = 'ten_clubs.png';
    image[37] = 'ten_diamonds.png';
    image[38] = 'ten_hearts.png';
    image[39] = 'ten_spades.png';
    image[40] = 'jack_clubs.png';
    image[41] = 'jack_diamonds.png';
    image[42] = 'jack_hearts.png';
    image[43] = 'jack_spades.png';
    image[44] = 'queen_clubs.png';
    image[45] = 'queen_diamonds.png';
    image[46] = 'queen_hearts.png';
    image[47] = 'queen_spades.png';
    image[48] = 'king_clubs.png';
    image[49] = 'king_diamonds.png';
    image[50] = 'king_hearts.png';
    image[51] = 'king_spades.png';


function getRandomImage() {
    var num = Math.floor( Math.random() * 11);
    var img = ImageArray[num];
    document.getElementById("randImage").textContent = ('<img src="' + 'images/random/' + img + '" width="250px">')

}

