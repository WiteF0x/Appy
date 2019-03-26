import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
} from 'react-native';

import RecipeCatSmallList from "../RecipeCatSmallList/SmallCategoryList";

import styles from './styles';

class SelectModal extends Component {
  render() {
    return (
        <Modal visible={this.props.Mvis} animationType="fade" transparent={false}>
            <View style={styles.modalContainer}>
                <Text style={styles.text}>Please, select category you need</Text>
                <RecipeCatSmallList
                    categories={this.props.categories}
                    closeSelectModal={this.props.closeSelectModal}
                    selectCategory={this.props.selectCategory}
                />
            </View>
        </Modal>
    );
  }
};

export default SelectModal;
