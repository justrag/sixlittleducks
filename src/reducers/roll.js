const roll = (state = 0, action) => {
	if (action.payload && action.payload.newRoll) {
		return action.payload.newRoll;
	} else {
		return state;
	}
};
export default roll;

//import { createReducer } from 'redux-act';
//import { startGame, chooseDuck, unblock } from '../actions/';
//import { dieRoll } from '../utils/game';

/*
const roll = createReducer(
	{
		[startGame]: () => dieRoll(),
		[chooseDuck]: () => dieRoll(),
		[unblock]: () => dieRoll()
	},
	0
);
*/
