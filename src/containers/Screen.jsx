import React from 'react';
import { connect } from 'react-redux';
import BeginScreen from './BeginScreen';
import GameScreen from './GameScreen';
import EndScreen from './EndScreen';
import { getScreen, Screens } from '../reducers/';

const Screen = ({ screen }) => (
  <div>
    {(screen === Screens.Begin) && <BeginScreen /> }
    {(screen === Screens.Game) && <GameScreen /> }
    {(screen === Screens.End) && <EndScreen /> }
  </div>
  );
Screen.propTypes = {
  screen: React.PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  screen: getScreen(state),
});
export default connect(mapStateToProps)(Screen);
