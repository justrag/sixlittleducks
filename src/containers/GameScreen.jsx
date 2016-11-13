import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import DuckIcon from '../components/DuckIcon';
import { chooseDuck, endGame } from '../actions/';
import { getPonds, getTurn, getRoll,
    isTemporarilyBlocked, isPermanentlyBlocked, isWon } from '../reducers/';


const duckColors = {
  1: '#5E91AB',
  2: '#C94E3C',
  3: '#6CAE3F',
  4: '#C04E86',
  5: '#EAE448',
  6: '#EDB639',
};

const GameScreen = ({ ponds, turn, roll,
    displayBlocked, displayDefeat, displayVictory,
  endGameAction, chooseDuckAction }) => (<div>
  <AppBar
    title={<span>Six Little Ducks</span>}
    iconElementLeft={<span>Roll: {roll}</span>}
    iconElementRight={<span>Turn: {turn}</span>}
  />
<div style={{display: 'flex'}}>
{ponds.map(p=>
  <Paper key={`pond${p.id}`} zDepth={3} circle={true} style={{flex: 1, backgroundColor: 'navy', margin: '3px'}}>
  <h1>{p.id}</h1>
  <div>
{p.ducks.map(d => <DuckIcon key={`duck${d.id}`} onClick={() => chooseDuckAction(d.id, roll)} color={duckColors[d.id]} />)}
  </div>
  </Paper>
  )
}
</div>
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
  chooseDuckAction: chooseDuck,
  endGameAction: endGame,
})(GameScreen);
