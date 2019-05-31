import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import isNull from 'lodash/isNull';
import games, { indexes } from '../../const/games';
import H1 from '../atoms/H1';
import colors from '../../const/colors';

const config = games[indexes.ticTacToe];

const TicTacToeCell = ({ player, onClick, playerTurn }) => (
  <MainDiv onClick={isNull(player) ? onClick : null} player={player} playerTurn={playerTurn}>
    { player !== null && <Text color={colors.players[player]}>{config.playerSymbols[player]}</Text>}
  </MainDiv>
);

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${colors.secondary};
  width: 100px;
  height: 100px;
  cursor: pointer;
  :hover {
    border-color: ${props => colors.players[props.playerTurn]};
  }
`;

const Text = styled(H1)`
  color: ${props => props.color};
`;

TicTacToeCell.propTypes = {
  onClick: PropTypes.func.isRequired,
  player: PropTypes.number,
  playerTurn: PropTypes.number.isRequired,
};

TicTacToeCell.defaultProps = { player: null };

export default TicTacToeCell;
