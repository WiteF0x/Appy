import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import Header from '../../components/BackHeader/backHeader';

import styles from './styles';

class FullArticleScreen extends Component {
    render() {
        return(
            <View style={styles.mainCont}>
                <Header goBack={this.props.goBack}/>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.text}>{this.props.text}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}

export default FullArticleScreen;
