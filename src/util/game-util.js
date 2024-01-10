import { CARD_STATUS } from "../constants";
import cardJSON from "../assets/StarTrek.json";

const stringified = JSON.stringify(cardJSON);
const cardData = JSON.parse(stringified);

export const createPlayDeck = (deck, playDeckSize) => {
  let newDeck = [];
  const halfDeck = playDeckSize / 2;
  for (let key in deck) {
    if (key < halfDeck) {
      if (Object.prototype.hasOwnProperty.call(deck, key)) {
        newDeck.push({
          id: key,
          label: deck[key].label,
          image: deck[key].image,
          status: CARD_STATUS.HIDDEN,
        });
      }
    }
  }
  for (let i = 0; i < halfDeck; i++) {
    newDeck.push(newDeck[i]);
  }
  newDeck.sort(() => Math.random() - 0.5);
  return newDeck;
};

export const CardData = () => {
  return cardData;
};

export const CardQuantity = () => {
  return cardData.length;
};

export const PlayDeckSize = () => {
  return cardData.length * 2;
};
