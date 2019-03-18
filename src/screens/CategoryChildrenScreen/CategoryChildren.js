import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import ChildrenList from '../../components/ChildrenList/CategoryList';

import styles from './style';

class Children extends Component {  
    render() {
        return (
            <View>
            <Text style={styles.title}>Child Categories</Text>
            <ChildrenList
                goToFull={this.props.goToFull}
                childmas={this.props.childmas}
            />
            </View>
        );
    }
}

export default Children;
