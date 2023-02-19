/**
 * 
 * 
 */
import Card from './Card.js';
import VARS from '../utils/Vars.js';
const Deck = {
    build: function () {
        let { allVisualAssets } = VARS;
        const { suits, ranks } = VARS.build;
        let value = 1;
        suits.forEach( (suit, i) => {
            ranks.forEach( (rank, j) => {
                let card = Card().build(rank, suit, value, j * 50, i * 100);
                allVisualAssets.push(card);
                value ++;
            })
        })
    
    },
    shuffle: function(arr) {
        let currentIndex = arr.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
         
          [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    },
    layOutInGrid () {
        let cardCounter = 0;
        for (let i = 0; i < 4; i ++) {
            for (let j = 0; j < 13; j ++) {
                let card = VARS.deck[cardCounter]
                card.setPosition({x: j * 50, y: i * 160})
                card.addToGameBoard(VARS.gameBoard);
                
                cardCounter++;
            }
        }
    }

}
export default Deck;