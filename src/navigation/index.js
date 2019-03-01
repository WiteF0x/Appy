import { createStackNavigator } from 'react-navigation';
import { createNavigationReducer, reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

//screens
import Login from '../screens/Login';
import Home from '../screens/Home';


const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    },
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
});

export const navigationReducer = createNavigationReducer(AppNavigator);

export const getAppNavigationWithState = () => {
    const App = reduxifyNavigator(AppNavigator, 'root');
    const mapStateToProps = state => ({ state: state.nav });
    const AppWithNavigationState = connect(mapStateToProps)(App);
    return AppWithNavigationState;
}

export default AppNavigator;