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

// Perhaps this way? :
// https://gist.github.com/davidgilbertson/b7c9b4a9f99e7fc301687e151540de6b#file-page-jsx
/*
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import UserPage from './UserPage.jsx';
import FourOhFourPage from './FourOhFourPage.jsx';

const PAGES = {
  home: HomePage,
  about: AboutPage,
  user: UserPage,
};

const Page = (props) => {
  const Handler = PAGES[props.page] || FourOhFourPage;
  
  return <Handler {...props} />
};

Page.propTypes = {
    page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};
*/
