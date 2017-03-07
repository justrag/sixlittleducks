import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/';
import { getBulba } from '../reducers/';

const BeginScreen = ({ bulba, startGameAction }) => (<div className="top">
  <button onClick={() => startGameAction()}>START GAME</button>
  </div>
  );
BeginScreen.propTypes = {
  startGameAction: React.PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  bulba: getBulba(state),
});
export default connect(mapStateToProps, {
  startGameAction: startGame,
})(BeginScreen);
