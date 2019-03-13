import api from '../../utils/axios';
import {
  put,
  all,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { 
  setArticlesAction,
  getArticlesAction,
  setRecipesAction,
  getRecipesAction,
  getDeleteArticleAction,
  getDeleteRecipeAction,
  getCategoriesAction,
  setCategoriesAction,
  getCreateCategoryAction,
  deleteCategoryAction,
  createRecipeAction,
  createArticleAction,
  getRecipesByCategoryAction,
  getArticlesByCategoryAction,
  getChildrenOfCategoryAction,
  setChildrenOfCategoryAction,
} from '../actions';


function* getAllArticles() {
  try {
    const { data } = yield call(api.get, 'v1/article/all');
    yield put(setArticlesAction(data));
  } catch (error) {
      console.log(error);
      yield put(getArticleFail());
  }
};

function* getAllRecipes() {
  try {
    console.log('________getAllRecipes_________');
    const { data } = yield call(api.get, `v1/recipe/all`);
    yield put(setRecipesAction(data));
  } catch (error) {
      console.log(error);
  }
};

function* deleteArticle({ payload }) {
  try {
    yield call(api.delete, `v1/article/${payload}`);
    const { data } = yield call(api.get, 'v1/article/all');
    yield put(setArticlesAction(data));
  } catch (error) {
      console.log(error);
  }
};

function* deleteRecipe({ payload }) {
  try {
    yield call(api.delete, `v1/recipe/${payload}`);
    const { data } = yield call(api.get, `v1/recipe/all`);
    yield put(setRecipesAction(data));
  } catch (error) {
      console.log(error);
  }
};

function* getAllCategories() {
  try {
    const { data } = yield call(api.get, 'v1/category/all');
    yield put(setCategoriesAction(data));
  } catch (error) {
    console.log(error);
  }
}

function* createCategory({payload}) {
  try {
    yield call(api.post, `v1/category/create`,{'title': `${payload}`});
    const { data } = yield call(api.get, 'v1/category/all');
    yield put(setCategoriesAction(data));
  } catch (error){
      console.log(error);
  }
}

function* deleteCategory({payload}) {
  try {
    yield call(api.delete, `v1/category/${payload}`);
    const { data } = yield call(api.get, 'v1/category/all');
    yield put(setCategoriesAction(data));
  }catch (error) {
    console.log(error);
  }
}

function* createRecipe({payload}) {
  try {
    yield call(api.post, `v1/recipe/create`, {
      'title': `${payload.title}`,
      'text': `${payload.text}`,
      'categoryId': `${payload.category}`,
  })
  const { data } = yield call(api.get, 'v1/recipe/all');
  yield put(setRecipesAction(data));
  }catch (error) {
    console.log(error)
  }
};

function* createArticle({payload}) {
  try {
    yield call(api.post, `v1/article/create`, {
      'title': payload.title,
      'description': payload.description,
      'text': payload.text,
      'categoryId': payload.category,
    })
    const { data } = yield call(api.get, 'v1/article/all');
    yield put(setArticlesAction(data));
  }catch (error){
    console.log(error);
  }
}

function* getRecipesByCategory({payload}) {
  try {
    console.log(payload);
    const { data } = yield call(api.get, `v1/recipe/byCategory/${payload}`);
    yield put(setRecipesAction(data));
    console.log(data);
  }catch (error){
    console.log(error);
  }
}

function* getArticlesByCategory({payload}) {
  try {
    const { data } = yield call(api.get, `v1/article/byCategory/${payload}`);
    yield put(setArticlesAction(data));
  }catch (error) {
    console.log(error);
  }
}

function* getChildCategories({payload}) {
  try {
    const { data } = yield call(api.get, `v1/category/categoryList/${payload}`);
    yield put(setChildrenOfCategoryAction(data));
  }catch (error){
    console.log(error)
  }
}

export default function* homeSaga() {
  console.log('fort get articles');
  yield all([
    takeLatest(getArticlesAction, getAllArticles),
    takeLatest(getRecipesAction, getAllRecipes),
    takeLatest(getDeleteArticleAction, deleteArticle),
    takeLatest(getDeleteRecipeAction, deleteRecipe),
    takeLatest(getCategoriesAction, getAllCategories),
    takeLatest(getCreateCategoryAction, createCategory),
    takeLatest(deleteCategoryAction, deleteCategory),
    takeLatest(createRecipeAction, createRecipe),
    takeLatest(createArticleAction, createArticle),
    takeLatest(getRecipesByCategoryAction, getRecipesByCategory),
    takeLatest(getArticlesByCategoryAction, getArticlesByCategory),
    takeLatest(getChildrenOfCategoryAction, getChildCategories),
  ]);
}
