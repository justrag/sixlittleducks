import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGame, continueGame, stage } from '../actions/';
import { getHelpStage, getTurn } from '../reducers/';

const stages = [
  <blockquote>
    <p>Six Little Ducks came out one day</p>
    <p>Over the hills and far away</p>
    <p>Mother Duck said: "Quack quack quack quack"</p>
    <p>But none of the little ducks came back</p>
  </blockquote>,
  <div>
    <p>Every turn you're gonna roll the die and choose which duck moves.</p>
    <p>When no duck can move</p>
    <p>
      (because the roll result is too big for them to move without
      overshooting),
    </p>
    <p>
      you'll have to send one duck back to pond #6 to find all the lost brothers
      and sisters.
    </p>
  </div>,
  <div>
    <p>You win when you get all the ducks safely home.</p>
    <p>You lose when all the ducks get stuck.</p>
  </div>
];
const stagesLength = stages.length;
const HelpScreen = ({
  startGameAction,
  continueGameAction,
  stageAction,
  stage,
  turn
}) =>
  <div>
    <h1>How to play?</h1>
    {stages[stage]}
    {stage < stagesLength - 1 &&
      <button onClick={stageAction}>
        Continue {'\u2b95'}
      </button>}
    {stage === stagesLength - 1 &&
      turn === 1 &&
      <button onClick={startGameAction}>Now start the game</button>}
    {stage === stagesLength - 1 &&
      turn > 1 &&
      <button onClick={continueGameAction}>Continue the game</button>}
  </div>;
HelpScreen.propTypes = {
  startGameAction: PropTypes.func.isRequired,
  continueGameAction: PropTypes.func.isRequired,
  stageAction: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  stage: getHelpStage(state),
  turn: getTurn(state)
});
export default connect(mapStateToProps, {
  startGameAction: startGame,
  continueGameAction: continueGame,
  stageAction: stage
})(HelpScreen);
