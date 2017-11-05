import React from 'react';
import { connect } from 'react-redux';
import { startGame, continueGame } from '../actions/';

const PauseScreen = ({ startGameAction, continueGameAction }) =>
  <div>
    <h1>Pause</h1>
    <button onClick={continueGameAction}>Continue the game</button>
    <button onClick={startGameAction}>Forfeit the game</button>
  </div>;
PauseScreen.propTypes = {
  startGameAction: React.PropTypes.func.isRequired,
  continueGameAction: React.PropTypes.func.isRequired
};
export default connect(null, {
  startGameAction: startGame,
  continueGameAction: continueGame
})(PauseScreen);
