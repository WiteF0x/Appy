import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { material } from 'react-native-typography'

import { INTERACTIVE_TIMER_DURATION } from '../../constants/login';

import styles from './styles';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.goToHomeTimer = setTimeout(() => this.props.goToMain(), INTERACTIVE_TIMER_DURATION);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={material.display2}>Welcome</Text>
            </View>
        );
    }
}

export default LoginScreen;
