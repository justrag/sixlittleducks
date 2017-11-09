import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGame, startHelp } from '../actions/';

const BeginScreen = ({ startGameAction, startHelpAction }) =>
  <div>
    <h1>Six Little Ducks</h1>
    <button onClick={startHelpAction}>How to play?</button>
    <button onClick={startGameAction}>Start game</button>
  </div>;
BeginScreen.propTypes = {
  startGameAction: PropTypes.func.isRequired,
  startHelpAction: PropTypes.func.isRequired
};
export default connect(null, {
  startGameAction: startGame,
  startHelpAction: startHelp
})(BeginScreen);
