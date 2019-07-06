import React from 'react';
import isNull from 'lodash/isNull';
import styled from 'styled-components';
import { Button } from '../atoms';
import MatchmakingModalContainer from '../../features/MatchmakingModalContainer';
import { colors, games } from '../../const';
import { indexes } from '../../const/games';

const TicTacToeInfo = ({ onClick, winner }) => (
  <InfoDiv>
    <Button onClick={onClick}>{isNull(winner) ? 'RESET' : 'REPLAY'}</Button>
    <WinnerDiv>
      <WinnerText>Winner is:</WinnerText>
      <WinnerNameText winner={winner}>
        { `Player ${winner + 1}` }
      </WinnerNameText>
    </WinnerDiv>
    <MatchmakingModalContainer idGame={games[indexes.ticTacToe].id} />
  </InfoDiv>
);

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
  margin: 5px 0;
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

export default TicTacToeInfo;
