import { createAction } from 'redux-act';

export const startGame = createAction('START_GAME');
export const endGame = createAction('END_GAME');
export const chooseDuck = createAction('CHOOSE_DUCK', (duckIndex, roll) => ({ duckIndex, roll }));
export const unblock = createAction('UNBLOCK');
