import React from 'react';
import styled from 'styled-components';
import GameCard from '../features/GameCardContainer';
import games from '../const/games';

const IndexPage = () => (
    <MainDiv>
        <h1>BoardGames.io</h1>
        <GameCardsDiv>
            { games.map(({ name, Img, link }) => <GameCard name={name} Img={Img} redirectTo={link} />) }
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
