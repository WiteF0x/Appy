import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import { 
  getChildrenOfCategoryAction,
  getCategoriesAction,
  getCatChildAction,
} from '../../store/actions';

import ChildrenList from '../../components/ChildrenList/CategoryList';

import styles from './style';

class Children extends Component {  
    componentDidMount() {
        console.log('Children Component');
        console.log(`Children: ${this.props.childmas[1]}`)
    }
    render() {
        return (
            <View>
            <Text style={styles.title}>Child Categories</Text>
            <ChildrenList
                goToFull={this.props.goToFull}
                onGetCatChild={this.props.onGetCatChild} 
                // testobj={this.props.testobj} 
                childmas={this.props.childmas}
            />
            </View>
        );
    }
}

export default Children;
