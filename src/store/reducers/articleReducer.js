import { createReducer } from 'redux-act';

import { setArticlesAction, setCategoriesAction, setRecipesAction, setChildrenOfCategoryAction } from '../actions';

const initialState = {
    articles: [],
};

export default createReducer({
    [setArticlesAction]: (state, data) => ({
        ...state,
        articles: data,
    }),
}, initialState);
