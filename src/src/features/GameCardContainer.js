import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import GameCard from '../ux/molecules/GameCard';

class GameCardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { hasToRedirect: false  };
    }

    handleClick = () => this.setState({ hasToRedirect: true });

    render() {
        const { hasToRedirect } = this.state;
        const { redirectTo, Img, name } = this.props;

        if (hasToRedirect) return <Redirect push to={redirectTo} />;
        return  <GameCard Img={Img} name={name} onClick={this.handleClick}/>;
    }
}

GameCardContainer.propTypes = {
    redirectTo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    Img: PropTypes.node.isRequired,
};

export default GameCardContainer;
