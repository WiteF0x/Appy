import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { getAppNavigationWithState } from './navigation';
import store from './store';

console.disableYellowBox = true;
const AppNavigationWithState = getAppNavigationWithState();

class App extends Component {
  render() {
    return (
            <Provider store={store}>
                <AppNavigationWithState />
            </Provider>
    );
  }
}

export default App;
