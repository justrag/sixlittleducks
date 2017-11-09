import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGame } from '../actions/';
import {
  isPermanentlyBlocked,
  isWon,
  getGames,
  getVictories,
  getDefeats
} from '../reducers/';

const EndScreen = ({ lost, won, games, victories, defeats, startGameAction }) =>
  <div>
    <h1>
      The game #{games} ended!
    </h1>
    {lost &&
      <div>
        <h1>You lost!</h1>
        <h2>
          It's your #{defeats} lost game.
        </h2>
      </div>}
    {won &&
      <div>
        <h1>You won!</h1>
        <h2>
          It's your #{victories} won game.
        </h2>
      </div>}
    <button onClick={startGameAction}>Start another game</button>
  </div>;
EndScreen.propTypes = {
  startGameAction: PropTypes.func.isRequired,
  lost: PropTypes.bool.isRequired,
  won: PropTypes.bool.isRequired,
  games: PropTypes.number.isRequired,
  victories: PropTypes.number.isRequired,
  defeats: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  lost: isPermanentlyBlocked(state),
  won: isWon(state),
  games: getGames(state),
  victories: getVictories(state),
  defeats: getDefeats(state)
});
export default connect(mapStateToProps, {
  startGameAction: startGame
})(EndScreen);
