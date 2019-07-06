import {
  CURRENT_GAME_WINNER,
  CURRENT_GAME_START,
} from './actions';

const defaultState = {
  gameId: null,
  winner: null,
  playerNbr: null,
};

const reducer = (state = defaultState, { type, ...action }) => {
  switch (type) {
    case CURRENT_GAME_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CURRENT_GAME_START:
    {
      console.log('[GAME_START]', action);
      return {
        ...defaultState,
        gameId: action.gameId,
      };
    }
    default:
      return state;
  }
};

export default reducer;
