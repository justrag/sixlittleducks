import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { endGame } from '../actions/';
import { getBulba } from '../reducers/';

const GameScreen = ({ bulba, endGameAction }) => (
  <RaisedButton onClick={() => endGameAction()} label="END GAME" fullWidth={true} />
  );
GameScreen.propTypes = {
  endGameAction: React.PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  bulba: getBulba(state),
});
export default connect(mapStateToProps, {
  endGameAction: endGame,
})(GameScreen);
