import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { forfeitGame, continueGame, startHelp } from '../actions/';

const PauseScreen = ({
  forfeitGameAction,
  continueGameAction,
  startHelpAction
}) =>
  <div>
    <h1>Pause</h1>
    <button onClick={continueGameAction}>Continue the game</button>
    <button onClick={forfeitGameAction}>Forfeit the game</button>
    <button onClick={startHelpAction}>How to play?</button>
  </div>;
PauseScreen.propTypes = {
  forfeitGameAction: PropTypes.func.isRequired,
  continueGameAction: PropTypes.func.isRequired,
  startHelpAction: PropTypes.func.isRequired
};
export default connect(null, {
  forfeitGameAction: forfeitGame,
  startHelpAction: startHelp,
  continueGameAction: continueGame
})(PauseScreen);
