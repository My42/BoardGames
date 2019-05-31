import {
  TIC_TAC_TOE_BEGIN,
  TIC_TAC_TOE_END,
  TIC_TAC_TOE_PLAY,
} from './actions';

const defaultState = {
  playerTurn: 0,
  winner: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TIC_TAC_TOE_BEGIN:
      return defaultState;
    case TIC_TAC_TOE_END:
      return { ...defaultState, winner: action.winner };
    case TIC_TAC_TOE_PLAY:
      return { ...defaultState, playerTurn: (state.playerTurn + 1) % 2 };
    default:
      return state;
  }
};

export default reducer;
