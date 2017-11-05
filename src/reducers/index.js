import { combineReducers } from 'redux';
import screen, * as fromScreen from './screen';
import turn from './turn';
import ducks, * as fromDucks from './ducks';
import roll from './roll';
import games from './games';
import victories from './victories';
import helpStage from './helpStage';

export const Screens = fromScreen.Screens;
export const getScreen = state => state.screen;
export const getDucks = state => fromDucks.getDucks(state.ducks);
export const getTurn = state => state.turn;
export const getRoll = state => state.roll;
export const getGames = state => state.games;
export const getVictories = state => state.victories;
export const getDefeats = state => getGames(state) - getVictories(state);
export const getHelpStage = state => state.helpStage;

export const isWon = state => fromDucks.isWon(state.ducks);
const isBlocked = state =>
	fromDucks.getDucks(state.ducks).filter(d => d.position >= getRoll(state))
		.length === 0;
const isFirstPondEmpty = state => fromDucks.isFirstPondEmpty(state.ducks);
export const isTemporarilyBlocked = state =>
	!isWon(state) && isBlocked(state) && !isFirstPondEmpty(state);
export const isPermanentlyBlocked = state =>
	isBlocked(state) && isFirstPondEmpty(state);

const reducer = combineReducers({
	//  bulba,
	screen,
	turn,
	ducks,
	roll,
	games,
	victories,
	helpStage
});

export default reducer;
