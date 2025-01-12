import React, { useState, useEffect } from "react";
import "./index.css";


function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);
  const [gameProgress, setGameProgress] = useState(0);  // Pour la barre de progression

  // Fonction pour calculer le gagnant
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return line;
      }
    }
    return null;
  };



  // Fonction pour gérer le clic sur une case
  const handleClick = (index) => {
    if (board[index] || winningLine) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    // Calculer la progression du jeu
    setGameProgress((prev) => Math.min(prev + 11.11, 100));  // 100% pour 9 cases

  };

  // Fonction pour réinitialiser la partie
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
    setGameProgress(0);  // Réinitialiser la barre de progression
  };

  // Calcul du gagnant et de la ligne gagnante
  useEffect(() => {
    const winnerLine = calculateWinner(board);
    setWinningLine(winnerLine);

    // Si un gagnant est trouvé, jouer le son de victoire
    if (winnerLine) {
    }
  }, [board]);

  const winner = winningLine ? board[winningLine[0]] : null;
  const status = winner
    ? `Winner: ${winner}`
    : board.every((cell) => cell)
    ? "Lose !"
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="Container">
      <div className="tic-tac-toe">
        {/* Barre de progression */}
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${gameProgress}%` }}
            aria-label={`Progression du jeu: ${Math.round(gameProgress)}%`}
          />
        </div>
        <div className="status" aria-live="polite">
          {status}
        </div>
        {/* Table de jeu avec role grid pour une meilleure sémantique */}
        <div role="grid" className="board" aria-labelledby="game-board">
          {board.map((cell, index) => (
            <button
              key={index}
              role="gridcell"  // Définir chaque case comme un élément de grille
              aria-pressed={cell ? true : false}  // Déclare si la cellule est occupée
              className={`cell ${cell ? cell.toLowerCase() : ""} ${winningLine && winningLine.includes(index) ? "winner" : ""} ${isXNext ? "x-player" : "o-player"}`}
              onClick={() => handleClick(index)}
              aria-label={`Cellule ${index + 1} ${cell ? `occupée par ${cell}` : ''}`} // Ajout d'une description dynamique de chaque cellule
            >
              {cell}
            </button>
          ))}
        </div>

        {/* Bouton pour réinitialiser la partie */}
        <button 
          className="reset" 
          onClick={resetGame} 
          aria-label="Redémarrer la partie"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
