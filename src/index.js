import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { getAppNavigationWithState } from './navigation';
import store from './store';

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
