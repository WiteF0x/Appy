import React, { Component } from 'react';
import { 
    Modal,
    View,
    Text,
} from 'react-native';

import SelectList from '../SelectList/SelectList';

import styles from './style';

class MyModal extends Component{

    render() {
        return (
        <Modal visible={this.props.Mvis} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
            <Text style={styles.text}>Please, select category you need</Text>
                <SelectList 
                    categories={this.props.categories}
                    closeMy={this.props.closeMy}
                    selectItem={this.props.selectItem}
                />
            </View>
        </Modal>
        );  
    };
};

export default MyModal;
