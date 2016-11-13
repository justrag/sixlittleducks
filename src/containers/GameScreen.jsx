import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import DuckIcon from '../components/DuckIcon';
import { chooseDuck, unblock, endGame } from '../actions/';
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
const duckStates = {
  Active: 'ACTIVE',
  Unblock: 'UNBLOCK',
  Inactive: 'INACTIVE',
};

const duckStyle = {
[duckStates.Active]: {cursor: 'move'},
[duckStates.Unblock]: {cursor: 'crosshair'},
[duckStates.Inactive]: {pointerEvents: 'none', opacity: 0.5, cursor: 'default'},
};


const duckState = (duck, roll, blocked) => {
  const {id, position} = duck;
  if (blocked) {
    if (position === 0) return duckStates.Unblock;
      else return duckStates.Inactive;
  } else {
    if (position >= roll) return duckStates.Active;
      else return duckStates.Inactive;
  }
};

const handleClick = (duck, roll, blocked, choose, unblock) => {
  const dState = duckState(duck, roll, blocked);
  if (dState === duckStates.Active) choose(duck.id, roll)
    else if (dState === duckStates.Unblock) unblock(duck.id);
}

const GameScreen = ({ ponds, turn, roll,
    displayBlocked, displayDefeat, displayVictory,
  endGameAction, chooseDuckAction, unblockAction }) => (<div>
  <AppBar
    title={<span>Six Little Ducks</span>}
    iconElementLeft={<span>Roll: {roll}</span>}
    iconElementRight={<span>Turn: {turn}</span>}
  />
<div style={{display: 'flex'}}>
{ponds.map(p=>
  <Paper key={`pond${p.id}`} zDepth={3} style={{flex: 1, backgroundColor: 'navy', margin: '3px'}}>
  <h1>{p.id}</h1>
  <div>
{p.ducks.map(d => 
  <DuckIcon
  key={`duck${d.id}`}
  style={duckStyle[duckState(d, roll, displayBlocked)]}
  onClick={() => handleClick(d, roll, displayBlocked, chooseDuckAction, unblockAction)}
  color={duckColors[d.id]}
  />
  )}
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
  chooseDuckAction: React.PropTypes.func.isRequired,
  unblockAction: React.PropTypes.func.isRequired,
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
  unblockAction: unblock,
})(GameScreen);
