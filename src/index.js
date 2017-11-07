import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import soundsMiddleware from 'redux-sounds';
import './styles.css';
import ScreenContainer from './containers/Screen';
import reducer from './reducers';

const soundsData = {
  duck1: 'animal_bird_duck_quack_001.mp3',
  duck2: 'animal_bird_duck_quack_002.mp3',
  duck3: 'animal_bird_duck_quack_003.mp3',
  duck4: 'cartoon_duck_quack_whistle_single_001.mp3',
  duck5: 'cartoon_duck_quack_whistle_single_002.mp3',
  duck6: 'cartoon_duck_quack_whistle_single_003.mp3',
  failure: 'cartoon_fail_trumpet_001.mp3',
  success: 'cartoon_success_fanfair.mp3',
  start: 'dustyroom_multimedia_point_awarded_fanfare.mp3'
};

const loadedSoundsMiddleware = soundsMiddleware(soundsData);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(autoRehydrate(), applyMiddleware(loadedSoundsMiddleware))
);
persistStore(store);

const App = () =>
  <Provider store={store}>
    <ScreenContainer />
  </Provider>;

ReactDOM.render(<App />, document.getElementById('root'));
