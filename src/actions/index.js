import { createAction } from 'redux-act';

// metas for middleware
// 'sound' for redux-sounds
// 'roll' for roll

export const startGame = createAction('START_GAME', null, () => ({
  sound: `start`,
  roll: true
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
  duckId => ({ sound: `duck${duckId}`, roll: true })
);
export const unblock = createAction(
  'UNBLOCK',
  duckId => ({ duckId }),
  () => ({
    sound: `duck3`,
    roll: true
  })
);
export const pause = createAction('PAUSE', null, () => ({ sound: `duck3` }));
export const stage = createAction('STAGE', null, () => ({ sound: `duck1` }));

export const continueGame = createAction('CONTINUE_GAME', null, () => ({
  sound: `duck3`
}));
export const forfeitGame = createAction('FORFEIT_GAME', null, payload => ({
  sound: 'failure'
}));
