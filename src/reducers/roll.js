import { createReducer } from 'redux-act';
import { startGame, chooseDuck, unblock } from '../actions/';
import { dieRoll } from '../utils/game';

const roll = createReducer({
  [startGame]: () => dieRoll(),
  [chooseDuck]: () => dieRoll(),
  [unblock]: () => dieRoll(),
}, 0
  );

export default roll;

