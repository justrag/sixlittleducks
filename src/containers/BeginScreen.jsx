import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { startGame } from '../actions/';
import { getBulba } from '../reducers/';

const BeginScreen = ({ bulba, startGameAction }) => (
  <RaisedButton onClick={() => startGameAction()} label="START GAME" fullWidth={true} />
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
