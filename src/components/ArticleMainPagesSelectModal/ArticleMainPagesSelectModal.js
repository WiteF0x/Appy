import React, { Component } from 'react';
import { 
    Modal,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import ArticleCatSmallList from '../SmallCategoryList/SmallCategoryList';


import styles from './style';

class SelectModal extends Component{

    render() {
        return (
        <Modal visible={this.props.Mvis} animationType="fade" transparent={false}>
            <View style={styles.modalContainer}>
                <Text style={styles.text}>Please, select category you need</Text>
                <ArticleCatSmallList
                    categories={this.props.categories}
                    closeSelectModal={this.props.closeSelectModal}
                    selectCategory={this.props.selectCategory}
                />
            </View>
        </Modal>
        );  
    };
};

export default SelectModal;
