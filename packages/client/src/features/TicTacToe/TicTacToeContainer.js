import React, { Component } from 'react';
import isNull from 'lodash/isNull';
import flatten from 'lodash/flatten';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TicTacToeBoard } from '../../ux/organisms';
import { TicTacToeInfo } from '../../ux/molecules';
import {
  winner as setWinner,
  start as startGame,
} from '../../reducers/currentGame/actionCreators';
import games, { indexes } from '../../const/games';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.posToCheck = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    this.state = this.getDefaultState();
  }

  componentWillMount() {
    const { startGame } = this.props;

    startGame();
  }

  getDefaultState = () => ({
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    playerTurn: 0,
    winner: null,
  });

  handleClick = (x, y, player) => () => this.setState(({ playerTurn, ...state }) => {
    const { winner } = this.props;
    if (!isNull(winner)) return;
    const { board } = state;
    board[y][x] = player;
    this.hasWon(board);
    return {
      board,
      playerTurn: (playerTurn + 1) % 2,
    };
  });

  handleReset = () => {
    const { setWinner } = this.props;
    setWinner(null);
    this.setState(this.getDefaultState());
  };

  hasWon = (board) => {
    const { playerTurn } = this.state;
    const { setWinner, winner } = this.props;

    const boardFlattened = flatten(board);
    // eslint-disable-next-line max-len
    if (boardFlattened.filter(i => !isNull(i)).length < 5) return; // < 5 can't win, not enough symbols

    if ((this.posToCheck.find(pos => boardFlattened[pos[0]] === boardFlattened[pos[1]]
      && boardFlattened[pos[0]] === boardFlattened[pos[2]] && !isNull(boardFlattened[pos[0]]))
      && isNull(winner))) {
      setWinner(playerTurn);
    }
  };

  render() {
    const { board, playerTurn } = this.state;
    const { winner } = this.props;

    return (
      <MainDiv>
        <TicTacToeBoard
          board={board}
          generateHandleClick={this.handleClick}
          playerTurn={playerTurn}
        />
        <TicTacToeInfo onClick={this.handleReset} winner={winner} />
      </MainDiv>
    );
  }
}

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const mapStateToProps = ({ currentGame }) => ({ winner: currentGame.winner });

const mapDispatchToProps = dispatch => ({
  setWinner: winner => dispatch(setWinner(winner)),
  startGame: () => dispatch(startGame(games[indexes.ticTacToe].id)),
});

TicTacToeContainer.propTypes = {
  setWinner: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  winner: PropTypes.number,
};

TicTacToeContainer.defaultProps = { winner: null };

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeContainer);
