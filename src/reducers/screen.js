import { createReducer } from 'redux-act';
import {
	startGame,
	endGame,
	startHelp,
	pause,
	continueGame,
	forfeitGame
} from '../actions/';

export const Screens = {
	Begin: 'BEGINSCREEN',
	Help: 'HELPSCREEN',
	Game: 'GAMESCREEN',
	Pause: 'PAUSESCREEN',
	End: 'ENDSCREEN'
};

const screen = createReducer(
	{
		[startGame]: () => Screens.Game,
		[continueGame]: () => Screens.Game,
		[forfeitGame]: () => Screens.Begin,
		[startHelp]: () => Screens.Help,
		[endGame]: () => Screens.End,
		[pause]: () => Screens.Pause
	},
	Screens.Begin
);

export default screen;
