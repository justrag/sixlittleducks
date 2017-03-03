import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "./styles.css";
import ScreenContainer from './containers/Screen';
import reducer from './reducers';

// const store = createStore(reducer);
const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

const App = () => (
  <Provider store={store}>
      <ScreenContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
