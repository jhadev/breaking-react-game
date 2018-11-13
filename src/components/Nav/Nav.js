import React from "react";
import "./Nav.css";

const Nav = props => (

    <ul className="nav background text-light d-flex bd-highlight">
      <li className="mr-auto p-2 bd-highlight nav-item title">
      Breaking Bad Memory Game
      </li>
      <li className="nav-item score p-2 bd-highlight">
          Your Score: {props.score}
      </li>
      <li className="nav-item high-score p-2 bd-highlight">
          High Score: {props.highScore}
      </li>
    </ul>

);

export default Nav;
