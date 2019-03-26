import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { navigationReducer } from '../navigation';
import sagas from './sagas';
import articleReducer from './reducers/articleReducer';
import recipeReducer from './reducers/recipeReducer';
import categoryReducer from './reducers/categoryReducer';
import childReducer from './reducers/childReducer';
import catchildReducer from './reducers/catchildReducer';
import objCatChildReducer from './reducers/objCategoryRecuder';
import menuReducer from './reducers/menuReducer';

const rootReducer = combineReducers({
  nav: navigationReducer,
  articles: articleReducer,
  recipes: recipeReducer,
  categories: categoryReducer,
  childcategories: childReducer,
  catchild: catchildReducer,
  objcat: objCatChildReducer,
  menu: menuReducer,
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
