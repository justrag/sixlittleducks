import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { startGame } from '../actions/';
import { getBulba } from '../reducers/';

const BeginScreen = ({ bulba, startGameAction }) => (<div>
  <h1>{bulba}</h1>
  <RaisedButton onClick={() => startGameAction()} label="START GAME" fullWidth={true} />
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
