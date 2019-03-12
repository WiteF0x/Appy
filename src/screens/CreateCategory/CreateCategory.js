import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryInput from '../../components/CategoryInput/CategoryInput';
import CategoryDeleteModal from '../../components/CategoryDeleteModal/CategoryDeleteModal';

import styles from './style';

class CreateCategory extends Component {
    state = {
        ModalVisible: false,
        idToDelete: null,
    };

    selectItem = (id) => {
        this.setState({
            ModalVisible: true,
            idToDelete: id,
        });
    };
    closeModal = () => this.setState({ModalVisible: false});

    render() {
        return(
            <View style={[styles.container, styles.containerView]}>
                <CategoryDeleteModal
                    Mvisible={this.state.ModalVisible}
                    closeModal={this.closeModal}
                    idToDelete={this.state.idToDelete}
                />
                <TouchableOpacity 
                    style={styles.back}
                    onPress={()=>this.props.goToAdmin()}
                >
                    <Text>back</Text>
                </TouchableOpacity>
                <Text style={styles.screenTitle}>Create Category</Text>
                <CategoryInput />
                <CategoryList 
                    categories={this.props.categories}
                    selectItem={this.selectItem}    
                />
            </View>
        );
    }
}

export default CreateCategory;
