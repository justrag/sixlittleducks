import React from 'react';
import { connect } from 'react-redux';
import classNames from "classnames";
import Roller from '../components/Roller';
import DuckIcon from '../components/DuckIcon';
import { chooseDuck, unblock, endGame } from '../actions/';
import { getDucks, getTurn, getRoll,
    isTemporarilyBlocked, isPermanentlyBlocked, isWon } from '../reducers/';

const duckColors = {
  1: '#5E91AB',
  2: '#C94E3C',
  3: '#6CAE3F',
  4: '#C04E86',
  5: '#EAE448',
  6: '#EDB639',
};

const duckClass = (position, roll, blocked) => {
  if (blocked) {
    if (position === 0) return "unblock";
      else return "inactive";
  } else {
    if (position >= roll) return "active";
      else return "inactive";
  }
};

const handleClick = (duck, roll, blocked, choose, unblock) => {
  const dState = duckClass(duck.position, roll, blocked);
  if (dState === "active") choose(duck.id, roll)
    else if (dState === "unblock") unblock(duck.id);
}

const ponds = [0, 1, 2, 3, 4, 5, 6];

const GameScreen = ({ ducks, turn, roll,
    displayBlocked, displayDefeat, displayVictory,
  endGameAction, chooseDuckAction, unblockAction }) => (<div>
  <div>
    <div>Six Little Ducks</div>
    <Roller roll={roll} />
    <div>Turn: {turn}</div>
  </div>
<div className="container">
 {ducks.map(d => (
  <div
    key={`duck${d.id}`}
    style={{zIndex: d.id+10, transform: `translate(${4 + (d.seq % 2) * 5 + d.position * 14}vw, ${Math.floor(d.seq / 2) * 5}vw)`}}
    onClick={() => handleClick(d, roll, displayBlocked, chooseDuckAction, unblockAction)}
    className={classNames("duck", duckClass(d.position, roll, displayBlocked))}
    >
    <DuckIcon fill={duckColors[d.id]} />
   </div>
   ))}
 {ponds.map(p=> (
  <div key={`pond${p}`} className="pond" style={{transform: `translate(${2 + p * 14}vw)`}}>
  <h1 style={{color: 'orange'}}>{p}</h1>
  </div>
  ))}
 </div>
      { displayBlocked && <div>YOU'RE BLOCKED!</div> }
      { displayDefeat && <button onClick={() => endGameAction()}>YOU LOST!</button> }
      { displayVictory && <button onClick={() => endGameAction()}>YOU WON!</button> }
  </div>);
GameScreen.propTypes = {
  turn: React.PropTypes.number.isRequired,
  roll: React.PropTypes.number.isRequired,
  ducks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  displayBlocked: React.PropTypes.bool.isRequired,
  displayDefeat: React.PropTypes.bool.isRequired,
  displayVictory: React.PropTypes.bool.isRequired,
  endGameAction: React.PropTypes.func.isRequired,
  chooseDuckAction: React.PropTypes.func.isRequired,
  unblockAction: React.PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  ducks: getDucks(state),
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
