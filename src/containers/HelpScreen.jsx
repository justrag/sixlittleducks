import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/';

const HelpScreen = ({ startGameAction }) => (<div>
  <h1>How to play?</h1>
  <blockquote>
    <p>Six Little Ducks came out one day</p>
    <p>Over the hills and far away</p>
    <p>Mother Duck said: "Quack quack quack quack"</p>
    <p>But none of the little ducks came back</p>
  </blockquote>
  <p>Every turn you're gonna roll the die and choose which duck moves.
  When no duck can move (because the roll result is too big for them to move without overshooting),
  you'll have to send one duck back to pond #6 to find all the lost brothers and sisters.</p>
  <p>You win when you get all the ducks safely home.</p>
  <p>You lose when all the ducks get stuck.</p>
  <button onClick={() => startGameAction()}>Now start the game</button>
  </div>
  );
HelpScreen.propTypes = {
  startGameAction: React.PropTypes.func.isRequired,
};
/*
const mapStateToProps = (state) => ({
  bulba: getBulba(state),
});
*/
export default connect(null, {
  startGameAction: startGame,
})(HelpScreen);
