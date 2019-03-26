import { createReducer } from 'redux-act';

import {
  setMenuItemAction,
  cleanMenuAction,
  deletePartMenuAction,
} from '../actions';

const initialState = {
  menu: [],
};

export default createReducer({
  [setMenuItemAction]: (state, data) => {
    const mymenu = [];
    if (state.length != null) {
      for (let i = 0; i < state.length; i++) {
        mymenu.push(state[i]);
      }
    }
    mymenu.push({
      id: data.id,
      title: data.title,
      children: data.children,
    });
    return (
      menu = mymenu
    );
  },

  [deletePartMenuAction]: (state, data) => {
    const pure = [];
    for (let i = 0; i < data; i++) {
      pure.push(state[i]);
    }
    state = [];
    for (let i = 0; i < pure.length; i++) {
      state.push(pure[i]);
    }

    return (
      menu = state
    );
  },

  [cleanMenuAction]: (state) => {
    state = [];
    return (
      menu = state
    );
  },
}, initialState);
