import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const GameModal = props => {
  return (
    <div>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader className="modalHeader" toggle={this.toggle}>
          {this.state.score === 10 ? "CONGRATULATIONS" : "NOT THIS TIME"}
        </ModalHeader>
        <ModalBody className="modalBody">
          {this.state.score === 10
            ? "You won. You are the danger."
            : "Better Call Saul. Try again."}
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
    </div>
  );
};

export default GameModal;
