import { fork } from 'redux-saga/effects';
import homeSaga from './articleSaga';

export default function* rootSaga() {
  yield fork(homeSaga);
}
