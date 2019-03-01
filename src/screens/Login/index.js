import React, { Component } from 'react';
import LoginScreen from './LoginScreen';

class Login extends Component {
    goToHome = () => this.props.navigation.navigate('Home');

    render() {
        return(
            <LoginScreen goToHome={this.goToHome} />
        );
    }
}

export default Login;
