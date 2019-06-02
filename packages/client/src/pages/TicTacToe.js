import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import flatten from 'lodash/flatten';
import isNull from 'lodash/isNull';
import { TicTacToeBoard } from '../ux/organisms';
import { Button } from '../ux/atoms';
import colors from '../const/colors';

class TicTacToe extends Component {
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

  getDefaultState = () => ({
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    playerTurn: 0,
    winner: null,
  });

  handleClick = (x, y, player) => () => this.setState(({ playerTurn, winner, ...state }) => {
    if (!isNull(winner)) return;
    const { board } = state;
    board[y][x] = player;
    return {
      board,
      playerTurn: (playerTurn + 1) % 2,
      winner: this.hasWon(board) ? playerTurn : null,
    };
  });

  handleReset = () => this.setState(this.getDefaultState());

  hasWon = (board) => {
    const { winner } = this.state;
    const boardFlattened = flatten(board);
    // eslint-disable-next-line max-len
    if (boardFlattened.filter(i => !isNull(i)).length < 5) return; // < 5 can't win, not enough symbols

    return (this.posToCheck.find(pos => boardFlattened[pos[0]] === boardFlattened[pos[1]]
        && boardFlattened[pos[0]] === boardFlattened[pos[2]] && !isNull(boardFlattened[pos[0]]))
      && isNull(winner));
  };

  render() {
    const { board, playerTurn, winner } = this.state;

    return (
      <MainDiv>
        <TicTacToeBoard
          board={board}
          generateHandleClick={this.handleClick}
          playerTurn={playerTurn}
        />
        <InfoDiv>
          <Button onClick={this.handleReset}>{isNull(winner) ? 'RESET' : 'REPLAY'}</Button>
          <WinnerDiv>
            <WinnerText>Winner is:</WinnerText>
            <WinnerNameText winner={winner}>
              { `Player ${winner + 1}` }
            </WinnerNameText>
          </WinnerDiv>
        </InfoDiv>
      </MainDiv>
    );
  }
}

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin-left: 5px;
`;

const WinnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${colors.secondary}
  height: 100px
  margin-top: 5px;
`;

const WinnerText = styled.span`
  color: ${colors.fourth};
  font-size: 15px;
  font-style: italic;
`;

const WinnerNameText = styled.span`
  color: ${colors.fourth};
  font-size: 35px;
  visibility: ${props => (!isNull(props.winner) ? 'visible' : 'hidden')};
  color: ${props => colors.players[props.winner || 0]}
`;

export default connect()(TicTacToe);
