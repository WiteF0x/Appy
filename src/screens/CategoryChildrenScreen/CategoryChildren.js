import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import {connect} from 'react-redux';

import ChildrenList from '../../components/ChildrenList/CategoryList';
import MenuNav from '../../components/MenuNav/MenuNav';

import deletePartMenuAction from '../../store/actions';

import styles from './style';
@connect(
    state => ({
        newmenu:state.menu,
    }),
    ({
        onDeletePartMenu: deletePartMenuAction,
    })
)
class Children extends Component {  
    render() {
        return (
            <View>
                <Text style={styles.title}>Child Categories</Text>
                <MenuNav 
                    onDeleteAfter={this.props.onDeleteAfter}
                    menu={this.props.newmenu}
                    goToFull={this.props.goToFull}
                />
                <ChildrenList
                    goToFull={this.props.goToFull}
                    childmas={this.props.childmas}
                />
            </View>
        );
    }
}

export default Children;
