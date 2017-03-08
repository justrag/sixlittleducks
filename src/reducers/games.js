import { createReducer } from 'redux-act';
import { endGame } from '../actions/';

const games = createReducer({
  [endGame]: (state) => state + 1,
}, 0
  );

export default games;
