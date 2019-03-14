import { createStore, combineReducers, applyMiddleware } from 'redux';
import { navigationReducer } from '../navigation';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import sagas from './sagas';
import articleReducer from './reducers/articleReducer';
import recipeReducer from './reducers/recipeReducer';
import categoryReducer from './reducers/categoryReducer';
import childReducer from './reducers/childReducer';
import catchildReducer from './reducers/catchildReducer';
import objCatChildReducer from './reducers/objCategoryRecuder';

const rootReducer = combineReducers({
    nav: navigationReducer,
    articles: articleReducer,
    recipes: recipeReducer,
    categories: categoryReducer,
    childcategories: childReducer,
    catchild: catchildReducer,
    objcat: objCatChildReducer,
});

const sagaMiddleware = createSagaMiddleware();
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.navigation);

const middlewares = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(navigationMiddleware),
);

const store = createStore(
    rootReducer,
    middlewares,
);

sagaMiddleware.run(sagas);

export default store;
