import { createAction } from 'redux-act';

export const startGame = createAction('START_GAME');
export const endGame = createAction('END_GAME');
export const chooseDuck = createAction('CHOOSE_DUCK', (duckId, roll) => ({ duckId, roll }));
export const unblock = createAction('UNBLOCK');
