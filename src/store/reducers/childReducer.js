import { createReducer } from 'redux-act';

import { setChildrenOfCategoryAction } from '../actions';

const initialState = {
    articles: [],
    categories: [],
    recipes: [],
    childcategories: [],
};

export default createReducer({
    [setChildrenOfCategoryAction]: (state, data) => ({
        ...state,
        childcategories: data,
    })

}, initialState);
