import React from "react";

const Keyboard = ({ handleGuess }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button key={letter} onClick={() => handleGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
