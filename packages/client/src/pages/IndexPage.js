import React from 'react';
import styled from 'styled-components';
import GameCard from '../features/GameCardContainer';
import games from '../const/games';
import H1 from '../ux/atoms/H1';

const IndexPage = () => (
  <MainDiv>
    <H1>BoardGames.io</H1>
    <GameCardsDiv>
      {
        games.map(({ name, Img, link }, index) => (
          <GameCard Img={Img} key={index} name={name} redirectTo={link} />
        ))
      }
    </GameCardsDiv>
  </MainDiv>
);

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const GameCardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default IndexPage;
