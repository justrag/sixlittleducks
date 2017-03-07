import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/';
import { isPermanentlyBlocked, isWon } from '../reducers/';

const EndScreen = ({ lost, won, startGameAction }) => (
  <div className="top">
    <h1>THE GAME ENDED!</h1>
    { lost && <h1>YOU LOST!</h1> }
    { won && <h1>YOU WON!</h1> }
      <button onClick={() => startGameAction()}>START ANOTHER GAME</button>
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
