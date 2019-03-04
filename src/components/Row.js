import React from "react";

const Row = props => (
  <div className={`row${props.fluid ? "-fluid" : ""} justify-content-center`}>
    {" "}
    {props.children}{" "}
  </div>
);

export default Row;
