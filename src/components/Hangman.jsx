import React from "react";

const Hangman = ({ attemptsLeft }) => {
  return (
    <div className="hangman">
      <p>Attempts Left: {attemptsLeft}</p>
    </div>
  );
};

export default Hangman;
