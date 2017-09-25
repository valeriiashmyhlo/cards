import { getCards, createCard } from "../lib/cardServices";

const initState = {
  cards: [],
  currentCard: ""
};

const CURRENT_UPDATE = "CURRENT_UPDATE";
const ADD_CARD = "ADD_CARD";
const CARDS_LOAD = "CARDSS_LOAD";

export const loadCards = cards => ({ type: CARDS_LOAD, payload: cards });
export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const addCard = card => ({ type: ADD_CARD, payload: card });
export const fetchCards = ({ page, limit, name }) => {
  return dispatch => {
    getCards({ page, limit, name }).then(cards => dispatch(loadCards(cards)));
  };
};

export const saveCard = values => {
  return dispatch => {
    createCard(values).then(client => dispatch(addCard(client)));
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case CARDS_LOAD:
      return { ...state, cards: action.payload };
    case CURRENT_UPDATE:
      return { ...state, currentCard: action.payload };
    case ADD_CARD:
      return {
        ...state,
        currentCard: "",
        cards: state.cards.concat(action.payload)
      };
    default:
      return state;
  }
  return state;
};
