import React, { Component, Fragment } from 'react';
import { Modal, Button as ModalButton, Steps } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../ux/atoms/Button';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { MatchmakingSocket as MMSocket, GameSocket } from '../../api/sockets';
import server from '../../const/server';

const { Step } = Steps;

class MatchmakingModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      step: 0,
    };

    this.steps = [
      <Step1 />,
      <Step2 onClick={this.onReady} />,
      <Step3 />,
    ];

    this.mmSocket = new MMSocket();
    this.gameSocket = new GameSocket();
  }


  onMatched = (lobbyId) => {
    this.gameSocket.connect(lobbyId);
    // this.gameSocket.onJoinSucceeded(() => this.setState({ step: 2 }));
    this.gameSocket.onGameCanceled(() => this._handleGameCanceled());
    this.setState({ step: 1, lobbyId });
  };

  onReady = () => {
    const { lobbyId } = this.state;
  };

  toggleModal = () => this.setState(({ isOpen }) => {
    const newIsOpen = !isOpen;

    if (newIsOpen) {
      this._connectToMMSocket();
    } else {
      this._closeAllSocket();
    }
    return { isOpen: newIsOpen, step: 0 };
  });

  _connectToMMSocket = () => {
    const { idGame } = this.props;

    this.mmSocket.connect(server.url);
    this.mmSocket.onMatched(this.onMatched);
    this.mmSocket.join(idGame);
  };

  _closeAllSocket = () => {
    this.mmSocket.close();
    this.gameSocket.close();
  };

  _handleGameCanceled = () => {
    this._closeAllSocket();
    this._connectToMMSocket();
    this.setState({ step: 0 });
  };

  handleCancel = () => this.toggleModal();

  render() {
    const { isOpen, step } = this.state;

    return (
      <Fragment>
        <Button onClick={this.toggleModal}>SEARCH PLAYER</Button>
        <Modal
          footer={[<ModalButton onClick={this.handleCancel}>Cancel</ModalButton>]}
          onCancel={this.toggleModal}
          title="Looking for someone..."
          visible={isOpen}
          width={700}
        >
          <BodyDiv>
            { this.steps[step] }
          </BodyDiv>
          <Steps current={step}>
            <Step description="Looking for someone" title="Matching" />
            <Step description={'Press the button "Ready" whenever you are'} title="Ready" />
            <Step description="Waiting for the other player(s)" title="Waiting" />
          </Steps>
        </Modal>
      </Fragment>
    );
  }
}

const BodyDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5em;
`;

MatchmakingModalContainer.propTypes = { idGame: PropTypes.number.isRequired };

export default MatchmakingModalContainer;
