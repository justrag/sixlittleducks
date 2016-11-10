import { createReducer } from 'redux-act';
import { startGame, chooseDuck, unblock } from '../actions/';

const allIds = [1, 2, 3, 4, 5, 6];

const allDucks = (state) => allIds.map(id => state[id]);

const findFirstRescuedDuck = (state) => allDucks(state).find(d => (d.position === 0));

// 1: {id: 1, position: 6},
// 2: {id: 2, position: 6},
// ...
// 6: {id: 6, position: 6},
const startingCounters = () =>
   allIds.reduce(
    (prev, curr) => ({ ...prev, [curr]: { id: curr, position: 6 } })
    , {});

const moveDuckToPosition = (ducks, duckId, position) => ({...ducks,
 [duckId]: {...ducks[duckId], position: position }}
);

const chooseDuckReducer = (state, { duckId, roll } ) => moveDuckToPosition(state, duckId, state[duckId].position - roll);

const unblockReducer = (state) => moveDuckToPosition(state, findFirstRescuedDuck(state).id, 6);

const ducks = createReducer({
  [startGame]: startingCounters,
  [chooseDuck]: chooseDuckReducer,
  [unblock]: unblockReducer,
}, {}
  );

export default ducks;