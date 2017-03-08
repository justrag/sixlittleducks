import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/';

const BeginScreen = ({ startGameAction }) => (<div className="top">
  <button onClick={() => startGameAction()}>Start game</button>
  </div>
  );
BeginScreen.propTypes = {
  startGameAction: React.PropTypes.func.isRequired,
};
/*
const mapStateToProps = (state) => ({
  bulba: getBulba(state),
});
*/
export default connect(null, {
  startGameAction: startGame,
})(BeginScreen);
