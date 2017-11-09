import { dieRoll } from '../utils/game';
const roll = ({ getState, dispatch }) => next => action => {
	if (action.meta && action.meta.roll) {
		action.payload.newRoll = dieRoll();
	}
	return next(action);
};

export default roll;
