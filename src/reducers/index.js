import { combineReducers } from 'redux';
// import bulba from './bulba';
import screen, * as fromScreen from './screen';
import turn from './turn';
import ducks, * as fromDucks from './ducks';
import roll from './roll';

export const Screens = fromScreen.Screens;
export const getScreen = (state) => state.screen;
export const getBulba = (state) => state.bulba;
export const getDucks = (state) => fromDucks.getDucks(state.ducks);
export const getTurn = (state) => state.turn;
export const getRoll = (state) => state.roll;

export const isWon = (state) => fromDucks.isWon(state.ducks);
const isBlocked = (state) => fromDucks.getDucks(state.ducks).filter(d => d.position >= getRoll(state)).length === 0;
const isFirstPondEmpty = (state) => fromDucks.isFirstPondEmpty(state.ducks);
export const isTemporarilyBlocked = (state) => !isWon(state) && isBlocked(state) && !isFirstPondEmpty(state);
export const isPermanentlyBlocked = (state) => isBlocked(state) && isFirstPondEmpty(state);

const reducer = combineReducers({
//  bulba,
  screen,
  turn,
  ducks,
  roll,
});

export default reducer;
