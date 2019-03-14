import { createReducer } from 'redux-act';

import { setRecipesAction } from '../actions';

const initialState = {
    recipes: [],
};

export default createReducer({
    [setRecipesAction]: (state, data) => ({
        ...state,
        recipes: data,
    }),
}, initialState);
