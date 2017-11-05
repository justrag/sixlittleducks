import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Roller from '../components/Roller';
import DuckIcon from '../components/DuckIcon';
import { chooseDuck, unblock, endGame, pause } from '../actions/';
import {
  getDucks,
  getTurn,
  getRoll,
  isTemporarilyBlocked,
  isPermanentlyBlocked,
  isWon
} from '../reducers/';

const duckColors = {
  1: '#5E91AB',
  2: '#C94E3C',
  3: '#6CAE3F',
  4: '#C04E86',
  5: '#EAE448',
  6: '#EDB639'
};

const duckClass = (position, roll, blocked) => {
  if (blocked) {
    if (position === 0) return 'unblock';
    else return 'inactive';
  } else {
    if (position >= roll) return 'active';
    else return 'inactive';
  }
};

const handleClick = (duck, roll, blocked, choose, unblock) => {
  const dState = duckClass(duck.position, roll, blocked);
  if (dState === 'active') choose(duck.id, roll);
  else if (dState === 'unblock') unblock(duck.id);
};

const ponds = [0, 1, 2, 3, 4, 5, 6];

const GameScreen = ({
  ducks,
  turn,
  roll,
  displayBlocked,
  displayDefeat,
  displayVictory,
  gameWonAction,
  gameLostAction,
  chooseDuckAction,
  unblockAction,
  pauseAction
}) =>
  <div>
    <div className="top">
      <h1 onClick={pauseAction}>
        {'\u23f8'}
      </h1>
      <h1>Six Little Ducks</h1>
      <Roller roll={roll} />
      <h2>
        Turn: {turn}
      </h2>
    </div>
    <div className="container">
      {ducks.map(d =>
        <div
          key={`duck${d.id}`}
          style={{
            zIndex: d.id + 10,
            transform: `translate(${4 +
              d.seq % 2 * 5 +
              d.position * 14}vw, ${Math.floor(d.seq / 2) * 5}vw)`
          }}
          onClick={() =>
            handleClick(
              d,
              roll,
              displayBlocked,
              chooseDuckAction,
              unblockAction
            )}
          className={classNames(
            'duck',
            duckClass(d.position, roll, displayBlocked)
          )}
        >
          <DuckIcon fill={duckColors[d.id]} />
        </div>
      )}
      {ponds.map(p =>
        <div
          key={`pond${p}`}
          className={classNames('pond', p === 0 ? 'homepond' : '')}
          style={{ transform: `translate(${2 + p * 14}vw)` }}
        >
          <h1 style={{ color: 'orange' }}>
            {p === 0 ? 'Home' : p}
          </h1>
        </div>
      )}
    </div>
    <div className="bottom">
      {displayBlocked &&
        <h2>No duck can move! One of the returned has to go back.</h2>}
      {displayDefeat &&
        <h3>
          <button onClick={gameLostAction}>You lost!</button>
        </h3>}
      {displayVictory &&
        <h3>
          <button onClick={gameWonAction}>You won!</button>
        </h3>}
    </div>
  </div>;
GameScreen.propTypes = {
  turn: React.PropTypes.number.isRequired,
  roll: React.PropTypes.number.isRequired,
  ducks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  displayBlocked: React.PropTypes.bool.isRequired,
  displayDefeat: React.PropTypes.bool.isRequired,
  displayVictory: React.PropTypes.bool.isRequired,
  gameLostAction: React.PropTypes.func.isRequired,
  gameWonAction: React.PropTypes.func.isRequired,
  chooseDuckAction: React.PropTypes.func.isRequired,
  pauseAction: React.PropTypes.func.isRequired,
  unblockAction: React.PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  ducks: getDucks(state),
  turn: getTurn(state),
  roll: getRoll(state),
  displayBlocked: isTemporarilyBlocked(state),
  displayDefeat: isPermanentlyBlocked(state),
  displayVictory: isWon(state)
});
export default connect(mapStateToProps, {
  chooseDuckAction: chooseDuck,
  pauseAction: pause,
  gameWonAction: () => endGame(1),
  gameLostAction: () => endGame(0),
  unblockAction: unblock
})(GameScreen);
