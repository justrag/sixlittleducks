import { createReducer } from 'redux-act';
import { startGame, chooseDuck, unblock} from '../actions/';

const turn = createReducer({
  [startGame]: () => 1,
  [chooseDuck]: (state) => state + 1,
  [unblock]: (state) => state + 1,
}, 0
  );

export default turn;
