import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import ChildrenList from '../../components/ChildrenList/CategoryList';

import styles from './style';

class Children extends Component {  
    render() {
        return (
            <View>
            <Text>Hello</Text>
            <ChildrenList children={this.props.children} 
            myParent={this.props.myParent} 
            />
            </View>
        );
    }
}

export default Children;
