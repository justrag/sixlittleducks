import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { endGame } from '../actions/';
import { getPonds, getTurn, getRoll,
    isTemporarilyBlocked, isPermanentlyBlocked, isWon } from '../reducers/';

const GameScreen = ({ ponds, turn, roll,
    displayBlocked, displayDefeat, displayVictory,
  endGameAction }) => (<div>
  <AppBar
    title={<span>Six Little Ducks</span>}
    iconElementLeft={<span>Roll: {roll}</span>}
    iconElementRight={<span>Turn: {turn}</span>}
  />
{ponds.map(p=> <div key={p.id}>{p.id}</div>)}
      { displayBlocked && <div>YOU'RE BLOCKED!</div> }
      { displayDefeat && <RaisedButton onClick={() => endGameAction()} label="YOU LOST!" fullWidth={true} /> }
      { displayVictory && <RaisedButton onClick={() => endGameAction()} label="YOU WON!" fullWidth={true} /> }
  </div>);
GameScreen.propTypes = {
  turn: React.PropTypes.number.isRequired,
  roll: React.PropTypes.number.isRequired,
  ponds: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  displayBlocked: React.PropTypes.bool.isRequired,
  displayDefeat: React.PropTypes.bool.isRequired,
  displayVictory: React.PropTypes.bool.isRequired,
  endGameAction: React.PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  ponds: getPonds(state),
  turn: getTurn(state),
  roll: getRoll(state),
  displayBlocked: isTemporarilyBlocked(state),
  displayDefeat: isPermanentlyBlocked(state),
  displayVictory: isWon(state),
});
export default connect(mapStateToProps, {
  endGameAction: endGame,
})(GameScreen);
