import React from "react";

const DifficultySelector = ({ setDifficulty, resetGame }) => {
  const handleChange = (event) => {
    setDifficulty(event.target.value);
    resetGame();
  };

  return (
    <div className="difficulty-selector">
      <label htmlFor="difficulty">Select Difficulty:</label>
      <select id="difficulty" onChange={handleChange}>
        <option value="easy">Easy (10 attempts)</option>
        <option value="medium">Medium (7 attempts)</option>
        <option value="hard">Hard (5 attempts)</option>
      </select>
    </div>
  );
};

export default DifficultySelector;
