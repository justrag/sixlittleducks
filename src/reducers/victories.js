import { createReducer } from 'redux-act';
import { endGame } from '../actions/';

const victories = createReducer({
  // payload -> 1 if won, 0 if lost
  [endGame]: (state, payload) => state + payload,
}, 0
  );

export default victories;
