import React, { Component } from 'react';

import { 
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import styles from './style';

class Header extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.goBack()}>
                    <Icon
                        style={styles.icon} 
                        name='ios-arrow-round-back' 
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.goBack()}>
                    <Text style={styles.text}>Back</Text>
                </TouchableOpacity>

            </View>
        );
    };
}

export default Header;
    