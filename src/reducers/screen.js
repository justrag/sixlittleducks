import { createReducer } from 'redux-act';
import { startGame, endGame } from '../actions/';

export const Screens = {
  Begin: 'BEGINSCREEN',
  Game: 'GAMESCREEN',
  End: 'ENDSCREEN'
};

const screen = createReducer({
  [startGame]: () => Screens.Game,
  [endGame]: () => Screens.End,
}, Screens.Begin
  );

export default screen;
