import React, { Component, Fragment } from 'react';
import { Modal, Button as ModalButton, Steps } from 'antd';
import Button from '../../ux/atoms/Button';
import Step1 from './Step1';
import MMSockets from '../../api/sockets/MatchmakingSockets';
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
      Step1,
    ];

    this.mmSocket = new MMSockets();
  }

  toggleModal = () => this.setState(({ isOpen }) => {
    const newIsOpen = !isOpen;

    if (newIsOpen) {
      this.mmSocket.connect(server.url);
      this.mmSocket.join(1);
    } else {
      this.mmSocket.close();
    }
    return { isOpen: newIsOpen };
  });

  handleCancel = () => this.toggleModal();

  render() {
    const { isOpen, step } = this.state;
    const StepBody = this.steps[step];

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
          <StepBody />
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

export default MatchmakingModalContainer;
