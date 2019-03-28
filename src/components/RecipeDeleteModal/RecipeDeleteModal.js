import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

import { getDeleteRecipeAction } from '../../store/actions';

import styles from './styles';

const DeleteModal = (props) => {
  let modalContent = null;

  if (props.Mvisible) {
    modalContent = (
            <View style={styles.textCont}>
                <Text style={styles.text}>Are you sure?</Text>
            </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.Mvisible}
      animationType="slide"
    >
        <View style={styles.modalContainer}>
            {modalContent}
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.but}
                        onPress={() => {
                          props.onDeleteRecipe(props.idToDelete);
                          props.closeModal();
                        }}
                    >
                        <Icon
                          size={68}
                          name="ios-checkmark"
                          color="green"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.but}
                        onPress={() => props.closeModal()}
                    >
                        <Icon
                          size={68}
                          name="ios-close"
                          color="red"
                        />
                    </TouchableOpacity>
                </View>
        </View>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteRecipe: id => dispatch(getDeleteRecipeAction(id)),
});

export default connect(null, mapDispatchToProps)(DeleteModal);
