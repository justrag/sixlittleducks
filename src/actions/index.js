import { createAction } from 'redux-act';

export const startGame = createAction('START_GAME', null, () => ({
	sound: `start`
}));
export const startHelp = createAction('START_HELP', null, () => ({
	sound: `start`
}));
export const endGame = createAction('END_GAME', null, payload => ({
	sound: payload ? 'success' : 'failure'
}));
export const chooseDuck = createAction(
	'CHOOSE_DUCK',
	(duckId, roll) => ({ duckId, roll }),
	duckId => ({ sound: `duck${duckId}` })
);
export const unblock = createAction('UNBLOCK', null, () => ({
	sound: `duck3`
}));
export const pause = createAction('PAUSE', null, () => ({ sound: `duck3` }));
export const stage = createAction('STAGE', null, () => ({ sound: `duck1` }));

export const continueGame = createAction('CONTINUE_GAME', null, () => ({
	sound: `duck3`
}));
