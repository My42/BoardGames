import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../const'
import H1 from '../atoms/H1';

const GameCard = ({ name, Img, onClick }) => (
    <MainDiv onClick={onClick}>
        <GameImg src={Img} alt={`name`} />
        <NameDiv>
            <GameName>{name}</GameName>
        </NameDiv>
    </MainDiv>
);

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    border-radius: 10px;
    background-color: ${colors.secondary};
    cursor: pointer;
`;

const NameDiv = styled.div`
    border-radius: 0 0 10px 10px;
    background-color: ${colors.third};
`;

const GameImg = styled.img`
    max-width: 200px;
    max-height: 200px;
`;

const GameName = styled(H1)`
    margin: 0;
`;

GameCard.propTypes = {
    name: PropTypes.string.isRequired,
    Img: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default GameCard;
