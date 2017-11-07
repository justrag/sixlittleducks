import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGame, continueGame, startHelp } from '../actions/';

const PauseScreen = ({
  startGameAction,
  continueGameAction,
  startHelpAction
}) =>
  <div>
    <h1>Pause</h1>
    <button onClick={continueGameAction}>Continue the game</button>
    <button onClick={startGameAction}>Forfeit the game</button>
    <button onClick={startHelpAction}>How to play?</button>
  </div>;
PauseScreen.propTypes = {
  startGameAction: PropTypes.func.isRequired,
  continueGameAction: PropTypes.func.isRequired,
  startHelpAction: PropTypes.func.isRequired
};
export default connect(null, {
  startGameAction: startGame,
  startHelpAction: startHelp,
  continueGameAction: continueGame
})(PauseScreen);
