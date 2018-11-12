import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const GameModal = props => {
    return (
      <div>
        <Button color="danger" onClick={this.toggleGameModal}>{this.props.buttonLabel}MODAL</Button>
        <Modal isOpen={this.state.gameModal} toggle={this.toggleGameModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleGameModal}>Your Score: {props.score}</ModalHeader>
          <ModalBody>
          You Win!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleGameModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }


export default GameModal;