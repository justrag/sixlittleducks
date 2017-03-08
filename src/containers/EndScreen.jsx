import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/';
import { isPermanentlyBlocked, isWon } from '../reducers/';

const EndScreen = ({ lost, won, startGameAction }) => (
  <div className="top">
    <h1>The game ended!</h1>
    { lost && <h1>You lost!</h1> }
    { won && <h1>You won!</h1> }
      <button onClick={() => startGameAction()}>Start another game</button>
  </div>
  );
EndScreen.propTypes = {
  startGameAction: React.PropTypes.func.isRequired,
  lost: React.PropTypes.bool.isRequired,
  won: React.PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  lost: isPermanentlyBlocked(state),
  won: isWon(state),
});
export default connect(mapStateToProps, {
  startGameAction: startGame,
})(EndScreen);
