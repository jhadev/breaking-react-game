import React, { Component } from "react";
import GameCard from "./components/GameCard";
import GameModal from "./components/GameModal";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Row from "./components/Row";
import Col from "./components/Col";
import Heading from "./components/Heading";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import choices from "./choices.json";
import "./App.css";

//Durstenfield shuffle

const randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  //state object takes in our game choices, score, high score, and empty picked array

  state = {
    choices,
    score: 0,
    highScore: 0,
    picked: [],
    modal: false,
  };

  //modal toggle method for reactstrap

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  /*toggleGameModal = () => {
    this.setState({
      gameModal: !this.state.gameModal
    });
  }*/

  //method to check picks, takes in id.

  handlePicked = id => {
    //indexOf method returns -1 if value in an array never occurs.
    //Will use this to determine if selection has been picked already.
    //If the selection hasn't been picked already we will run handleIncrement method
    //set the state using the concat() method to merge copied arrays.
    //If the selection has been chosen already we will run the handleReset() method.

    if (this.state.picked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ picked: this.state.picked.concat(id) });
      console.log(this.state);
    } else {
      console.log(this.state);
      this.toggle()
    }
  };

  //handleReset method will set the state object back to original, retain the high score, and run the handleRandomize method
  //toggle method sets the state of the modal

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      picked: []
    });
    this.toggle()
    this.handleRandomize();
  };

  //handleRandomize method runs the randomize function and takes in our choices array.
  //Then sets the state with our randomized array.

  handleRandomize = () => {
    let randomizedChoices = randomize(choices);
    this.setState({ choices: randomizedChoices });
  };

  //method to handle score increment
  handleIncrement = () => {
    //increments the score property by one and stores it in the currentScore constant.
    //Then runs the setState method to update the state object.

    const currentScore = this.state.score + 1;
    this.setState({
      score: currentScore
    });

    //If the currentScore is greater than or equal to the high score in the state object
    //then set the state of the high score to the current score.

    if (currentScore >= this.state.highScore) {
      this.setState({ highScore: currentScore });
    }

    //and if the currentScore is equal to the length of the choices array alert the user they have won.
    if (currentScore === 10) {
      //this.toggleGameModal();
      this.toggle();
    }

    //run the randomize method

    this.handleRandomize();
  };

modalMessages = () => {
  const finalScore = this.state.score
  switch(finalScore) {
    case 1:
      return <p>You should watch Breaking Bad.</p>;
    case 2:
      return <p>"You are not the guy. You’re not capable of being the guy. I had a guy, but now I don’t. You are not the guy.” - Mike Ehrmantraut</p>;
    case 3:
      return <p>"Darth Vader had responsibilities. He was responsible for the Death Star." - Badger</p>;
    case 4:
      return <p>"I'm a blowfish, yo!" - Jesse Pinkman</p>;
    case 5:
      return <p>"They’re minerals, Marie! Jesus!"" - Hank Schrader</p>
    case 6:
      return <p>"You know I, I just think, that things have a way of working themselves out" - Walter White</p>
    case 7:
      return <p>"Scientists love lasers." - Saul Goodman</p>
    case 8:
      return <p>"Name one thing in this world that is not negotiable" - Walter White</p>
    case 9:
      return <p>"I am the one who knocks." - Walter White</p>
    case 10:
      return <p>"I am not the danger. I am the danger" - Walter White</p>
    default:
      return <p>hello</p>;
  }
}

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Heading />
        <div className="content">
          <Row>
            {this.state.choices.map(choice => (
              <Col key={choice.id}>
                <GameCard
                  key={choice.id}
                  id={choice.id}
                  image={choice.image}
                  handlePicked={this.handlePicked}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleRandomize={this.handleRandomize}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div>
         <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            backdrop={'static'}
            centered={true}
          >
            <ModalHeader className="modalHeader" toggle={this.toggle}>
              {this.state.score === 10 ? "CONGRATULATIONS!" : "GOOD TRY"}
            </ModalHeader>
            <ModalBody className="modalBody">
            {this.modalMessages()}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleReset}>
                Close
              </Button>
              <Button color="success" onClick=
              {this.handleReset} >
                Play Again
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Wrapper>
    );
  }
}

export default App;
