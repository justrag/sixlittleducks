import { createReducer } from 'redux-act';
import R from 'ramda';
import { startGame, chooseDuck, unblock } from '../actions/';

const duckIds = R.range(1, 7); //[1, 2, 3, 4, 5, 6]

const pondIds = R.range(0, 7); // [0, 1, 2, 3, 4, 5, 6]

//export const getDucks = (state) => duckIds.map(id => state[id]);
export const getDucks = state =>
  duckIds.map(id => ({
    ...state[id],
    seq: duckIds.filter(d => state[d].position === state[id].position && id > d)
      .length
  }));
export const getPonds = state =>
  pondIds.map(id => ({
    id,
    ducks: getDucks(state).filter(d => d.position === id)
  }));
export const isWon = state =>
  getDucks(state).filter(d => d.position === 0).length === 6;
export const isFirstPondEmpty = state =>
  getDucks(state).filter(d => d.position === 0).length === 0;

// 1: {id: 1, position: 6},
// 2: {id: 2, position: 6},
// ...
// 6: {id: 6, position: 6},
const startingDucksReducer = () =>
  R.indexBy(R.prop('id'), R.map(id => ({ id, position: 6 }), duckIds));

const moveDuckToPosition = (ducks, duckId, position) =>
  R.assocPath([duckId, 'position'], position, ducks);

const chooseDuckReducer = (state, { duckId, roll }) =>
  moveDuckToPosition(state, duckId, state[duckId].position - roll);

const unblockReducer = (state, { duckId }) =>
  moveDuckToPosition(state, duckId, 6);

const ducks = createReducer(
  {
    [startGame]: startingDucksReducer,
    [chooseDuck]: chooseDuckReducer,
    [unblock]: unblockReducer
  },
  {}
);

export default ducks;
