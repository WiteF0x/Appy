import React, { Component } from 'react';
import LoginScreen from './Login';

class Login extends Component {
    goToMain = () => this.props.navigation.navigate('MainContent');
    
    render() {
        return(
            <LoginScreen goToMain={this.goToMain} />
        );
    }
}

export default Login;
