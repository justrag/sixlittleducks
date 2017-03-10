import { createReducer } from 'redux-act';
import { startGame, endGame, startHelp } from '../actions/';

export const Screens = {
  Begin: 'BEGINSCREEN',
  Help: 'HELPSCREEN',
  Game: 'GAMESCREEN',
  End: 'ENDSCREEN'
};

const screen = createReducer({
  [startGame]: () => Screens.Game,
  [startHelp]: () => Screens.Help,  
  [endGame]: () => Screens.End,
}, Screens.Begin
  );

export default screen;
