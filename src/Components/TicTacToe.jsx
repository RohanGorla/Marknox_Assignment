import React from "react";
import "../styles/TicTacToe.css";
import TTT_1 from "../assets/Tic_Tac_Toe_Starting.png";
import TTT_2 from "../assets/X_Win_Case.png";
import TTT_3 from "../assets/O_Win_Case.png";
import TTT_4 from "../assets/Draw_Case.png";

function TicTacToe() {
  return (
    <div className="Tic_Main">
      <div className="Tic_Header">
        <h1>TIC TAC TOE GAME</h1>
      </div>
      <div className="Code_Button">
        <button
          onClick={() => {
            window.open("https://github.com/RohanGorla/TIC_TAC_TOE", "_blank");
          }}
        >
          View code
        </button>
      </div>
      <div className="Tic_Section">
        <p className="Tic_Desc">
          I developed a Tic-Tac-Toe game using React.js, focusing on
          function-based components to maintain a modern and clean code
          structure. The game implements key features that enhance both
          functionality and user experience. One of the core aspects is the use
          of the useState hook to manage and track player turns, allowing for
          smooth state transitions as players make their moves.
        </p>
        <div className="Tic_Image">
          <img src={TTT_1}></img>
        </div>
      </div>
      <div className="Tic_Section">
        <p className="Tic_Desc">
          Each time a player makes a move, the game dynamically checks for a
          winner by evaluating the current state of the board. This is achieved
          through a function that iterates over possible winning combinations,
          determining if a player has won or if the game should continue. If a
          player wins, the game displays the winner, bringing a satisfying
          conclusion to the match. In the case of a draw, where all cells are
          filled without a winner, the game declares the outcome as a tie.
        </p>
        <div className="Tic_Image">
          <img src={TTT_2}></img>
        </div>
      </div>
      <div className="Tic_Section">
        <p className="Tic_Desc">
          To further enhance the user experience, I incorporated a replay
          functionality. This feature allows players to reset the game and start
          a new round without refreshing the page. By simply clicking a button,
          the game state resets, and players can enjoy another round seamlessly.
          This addition not only makes the game more engaging but also
          demonstrates an understanding of how to manage and reset application
          state effectively.
        </p>
        <div className="Tic_Image">
          <img src={TTT_3}></img>
        </div>
      </div>
      <div className="Tic_Section">
        <p className="Tic_Desc">
          Overall, the project showcases a solid understanding of React.js,
          particularly in the use of function-based components and hooks. It
          also highlights the ability to implement essential game mechanics and
          enhance user interaction through thoughtful design and functionality.
        </p>
        <div className="Tic_Image">
          <img src={TTT_4}></img>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
