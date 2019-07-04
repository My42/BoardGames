import React from 'react';
import { connect } from 'react-redux';
import TicTacToeContainer from '../features/TicTacToe/TicTacToeContainer';

const TicTacToe = () => <TicTacToeContainer />;

export default connect()(TicTacToe);
