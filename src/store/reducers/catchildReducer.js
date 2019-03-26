import { createReducer } from 'redux-act';

import { setCatChildAction } from '../actions';

const initialState = {
  catchild: [],
};

export default createReducer({
  [setCatChildAction]: (state, data) => ({
    ...state,
    catchild: data,
  }),
}, initialState);
