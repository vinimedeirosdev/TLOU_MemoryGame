import React, { Fragment } from "react";

function GameOver(props) {
  return ( props.show ?
    <div id="gameOver">
      <div>Congratulations, you've completed the game!</div>

      <button id="restart" onClick={props.handleRestart}>Restart</button>
    </div> : <Fragment />
  );
}

export default GameOver;
