import { combineReducers } from 'redux';
import ticTacToe from './ticTacToe/reducer';
import currentGame from './currentGame/reducer';

export default combineReducers({ ticTacToe, currentGame });
