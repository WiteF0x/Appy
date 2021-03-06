import { createAction } from 'redux-act';

export const setArticlesAction = createAction('Set Articles Action');
export const getArticlesAction = createAction('Get Articles Action');
export const getArticleFailAction = createAction('Get Article Fail Action');
export const getDeleteArticleAction = createAction('Get Delete Article Action');

export const setRecipesAction = createAction('Set Recipes Action');
export const getRecipesAction = createAction('Get Recipes Action');
export const getDeleteRecipeAction = createAction('Get Delete Recipe Action');

export const getCategoriesAction = createAction('Get Categories Action');
export const setCategoriesAction = createAction('Set Categories Action');
export const getCreateCategoryAction = createAction('Create Category Action');
export const deleteCategoryAction = createAction('Delete Category Action');

export const createRecipeAction = createAction('Create Recipe Action');

export const createArticleAction = createAction('Create Article Action');
export const getRecipesByCategoryAction = createAction('Get Recipes By Category Action');
export const getArticlesByCategoryAction = createAction('Get Articles By Category Action');

export const getChildrenOfCategoryAction = createAction('Get Children Of Category Action');
export const setChildrenOfCategoryAction = createAction('Set Children Of Category Action');

export const getCatChildAction = createAction('Get Cat Child Action');
export const setCatChildAction = createAction('Set Cat Child Action');

export const setMenuItemAction = createAction('Get Menu Item Action');
export const cleanMenuAction = createAction('Clean Menu Action');
export const deletePartMenuAction = createAction('Delete Part Menu Action');
