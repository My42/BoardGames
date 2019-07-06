import {
  CURRENT_GAME_START,
  CURRENT_GAME_WINNER,
} from './actions';

export const start = gameId => ({ type: CURRENT_GAME_START, gameId });

export const winner = winner => ({ type: CURRENT_GAME_WINNER, winner });
