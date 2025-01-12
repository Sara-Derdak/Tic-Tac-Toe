import React from "react";
// import TicTacToe from "./tictactoe";
import TicTacToe from "./tictactoe";
import "./index.css"

function App() {
  return (
    <div className="Container">
      <TicTacToe/>
      <footer className="footer">
        <p>&copy; 2024 Tic Tac Toe . Created by <a href="https://github.com/Sara-Derdak">Sara DERDAK</a></p>
      </footer>
    </div>
  );
}

export default App;
