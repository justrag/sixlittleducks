import { createReducer } from 'redux-act';
import { stage, startHelp } from '../actions/';

const helpStage = createReducer(
	{
		[stage]: state => state + 1,
		[startHelp]: () => 0
	},
	0
);
export default helpStage;
