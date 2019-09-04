import React from "react";

const Button = ({ text, handleAllPanelsButton }) => {
  return (
    <button className="button-primary" onClick={handleAllPanelsButton}>
      {text}
    </button>
  );
};

export default Button;
