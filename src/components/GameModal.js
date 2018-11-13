import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const GameModal = props => {
  return (
    <Modal
      isOpen={this.state.modal}
      toggle={this.toggle}
      className={this.props.className}
    >
      <ModalHeader className="modalHeader" toggle={this.toggle}>
        {this.state.score === 10 ? "CONGRATULATIONS!" : "NOT THIS TIME."}
      </ModalHeader>
      <ModalBody className="modalBody">
        {this.state.score === 10 ? (
          <p>You won. You are the danger</p>
        ) : (
          <p>Better Call Saul and try again.</p>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={this.toggle}>
          Close
        </Button>
        <Button color="success" onClick={this.handleReset}>
          Play Again
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default GameModal;
