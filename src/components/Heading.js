import React from 'react';
import { Jumbotron } from 'reactstrap';


const allStyles = {
  textAlign: 'center',
  margin: 20
}

const jumboStyles = {
  padding: 20,
  marginBottom: 5
}

const Heading = (props) => {
  return (
    <div>
      <Jumbotron style={jumboStyles}>
          <h2 style={allStyles} className="display-6">While this is a simple memory game, you don't want to pick the same character twice. Tread lightly...</h2>
          <p className="lead text-center">The characters will shuffle after every choice. Get 10 points and Heisenberg will spare you.</p>
      </Jumbotron>
    </div>
  );
};

export default Heading;

