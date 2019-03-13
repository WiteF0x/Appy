import { createReducer } from 'redux-act';

import { setArticlesAction, setCategoriesAction, setRecipesAction, setChildrenOfCategoryAction } from '../actions';

const initialState = {
    articles: [],
    categories: [],
    recipes: [],
};

export default createReducer({
    [setArticlesAction]: (state, data) => ({
        ...state,
        articles: data,
    }),
    [setCategoriesAction]: (state, data) => ({
        ...state,
        categories: data,
    }),
    [setRecipesAction]: (state, data) => ({
        ...state,
        recipes: data,
    }),
    [setCategoriesAction]: (state, data) => ({
        ...state,
        categories: data,
    }),
    [setChildrenOfCategoryAction]: (state, data) => ({
        ...state,
        childcategories: data,
    })

}, initialState);
