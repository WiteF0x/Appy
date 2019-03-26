import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { INTERACTIVE_TIMER_DURATION } from '../../constants/login';

import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.goToHomeTimer = setTimeout(() => this.props.goToMain(), INTERACTIVE_TIMER_DURATION);
  }

  render() {
    return (
            <View style={styles.container}>
                <Icon
                  name='logo-octocat'
                  color='black'
                  size={100}
                />
            </View>
    );
  }
}

export default LoginScreen;
