import { createReducer } from 'redux-act';
import R from 'ramda';
import { startGame, chooseDuck, unblock } from '../actions/';

const allIds = [1, 2, 3, 4, 5, 6];

const allPondIds = [0, 1, 2, 3, 4, 5, 6];

export const allDucks = (state) => allIds.map(id => state[id]);

export const getPonds = (state) => allPondIds.map(id => ({id, ducks: allDucks(state).filter(d => (d.position === id))}));
export const isWon = (state) => allDucks(state).filter(d => (d.position === 0)).length === 6;
export const isFirstPondEmpty = (state) => (allDucks(state).filter(d => (d.position === 0)).length === 0);

// 1: {id: 1, position: 6},
// 2: {id: 2, position: 6},
// ...
// 6: {id: 6, position: 6},
// const startingDucks = () =>
//    allIds.reduce(
//     (prev, curr) => ({ ...prev, [curr]: { id: curr, position: 6 } })
//     , {});

const startingDucksReducer = () => R.indexBy(R.prop('id'), R.map(id => ({id, position: 6}), R.range(1,7)));

const moveDuckToPosition = (ducks, duckId, position) => R.assocPath([duckId, 'position'], position, ducks);

const chooseDuckReducer = (state, { duckId, roll } ) => moveDuckToPosition(state, duckId, state[duckId].position - roll);

//const findFirstRescuedDuck = (state) => allDucks(state).find(d => (d.position === 0));
//const unblockReducer = (state) => moveDuckToPosition(state, findFirstRescuedDuck(state).id, 6);
const unblockReducer = (state, duckId) => moveDuckToPosition(state, duckId, 6);

const ducks = createReducer({
  [startGame]: startingDucksReducer,
  [chooseDuck]: chooseDuckReducer,
  [unblock]: unblockReducer,
}, {}
  );

export default ducks;