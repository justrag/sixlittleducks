import React from 'react';
import { connect } from 'react-redux';
import { startGame, startHelp } from '../actions/';

const BeginScreen = ({ startGameAction, startHelpAction }) => (<div>
  <h1>Six Little Ducks</h1>
  <button onClick={() => startHelpAction()}>How to play?</button>
  <button onClick={() => startGameAction()}>Start game</button>
  </div>
  );
BeginScreen.propTypes = {
  startGameAction: React.PropTypes.func.isRequired,
};
/*
const mapStateToProps = (state) => ({
  bulba: getBulba(state),
});
*/
export default connect(null, {
  startGameAction: startGame,
  startHelpAction: startHelp,
})(BeginScreen);
