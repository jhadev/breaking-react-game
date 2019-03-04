import React from "react";

const Col = props => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-2 col-3"> {props.children} </div>
  );
};

export default Col;
