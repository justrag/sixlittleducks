import { combineReducers } from 'redux';
import bulba from './bulba';
import screen, * as fromScreen from './screen';
import turn from './turn';
import ducks from './ducks';
import roll from './roll';

export const Screens = fromScreen.Screens;
export const getScreen = (state) => state.screen;
export const getBulba = (state) => state.bulba;

const reducer = combineReducers({
  bulba,
  screen,
  turn,
  ducks,
  roll,
});

export default reducer;
