import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
import H1 from '../atoms/H1';
import redirectTo from '../../utils/redirectTo';

const Navbar = ({ history }) => (
  <MainDiv>
    <TitleDiv onClick={() => redirectTo('/', history)}>
      <LogoImg alt="boardgame_logo" src={Logo} />
      <H1>Boardgames.io</H1>
    </TitleDiv>
  </MainDiv>
);

const MainDiv = styled.div`
  display: flex;
  max-height: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  :hover {
    transform: scale(1.1, 1.1);
  }
`;

const LogoImg = styled.img`
  max-width: 64px;
  max-height: 64px;
`;

Navbar.propTypes = { history: PropTypes.shape().isRequired };

export default Navbar;
