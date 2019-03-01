import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class LoginScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Welcome</Text>
                <View style={styles.iconnext}>
                    <TouchableOpacity onPress={() => this.props.goToHome()}>
                        <Icon size={64} name="ios-arrow-round-forward" color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;
