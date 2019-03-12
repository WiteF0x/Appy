import { createStore, combineReducers, applyMiddleware } from 'redux';
import { navigationReducer } from '../navigation';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import sagas from './sagas';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    nav: navigationReducer,
    articles: placesReducer,
    recipes: placesReducer,
    categories: placesReducer,
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
