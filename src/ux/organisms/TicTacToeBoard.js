import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TicTacToeCell } from '../molecules';

const TicTacToeBoard = ({ board, playerTurn, generateHandleClick }) => (
  <MainDiv>
    {
        board.map((row, y) => (
          <RowDiv key={y}>
            {
              row.map(((player, x) => (
                <TicTacToeCell
                  key={x}
                  onClick={generateHandleClick(x, y, playerTurn)}
                  player={player}
                  playerTurn={playerTurn}
                />
              )))
            }
          </RowDiv>
        ))
      }
  </MainDiv>
);

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowDiv = styled.div`
  display: flex;
`;

TicTacToeBoard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  board: PropTypes.array.isRequired,
  generateHandleClick: PropTypes.func.isRequired,
  playerTurn: PropTypes.number.isRequired,
};

export default TicTacToeBoard;
