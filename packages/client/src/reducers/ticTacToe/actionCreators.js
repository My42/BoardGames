import {
  TIC_TAC_TOE_PLAY,
  TIC_TAC_TOE_END,
  TIC_TAC_TOE_BEGIN,
} from './actions';

export function play(player) {
  return { type: TIC_TAC_TOE_PLAY, player };
}

export function end(winner) {
  return { type: TIC_TAC_TOE_END, winner };
}

export function begin() {
  return { type: TIC_TAC_TOE_BEGIN };
}
