import React, { Component } from 'react';

import {
  Animated,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { INTERACTIVE_TIMER_DURATION } from '../../constants/login';

import styles from './styles';

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.goToHomeTimer = setTimeout(() => this.props.goToMain(), INTERACTIVE_TIMER_DURATION);
  }

  render() {
    return (
      <View style={styles.main}>
        <FadeInView >
          <Icon
            name='logo-octocat'
            color='orange'
            size={100}
          />
        </FadeInView>
      </View>
    );
  }
}

export default LoginScreen;
