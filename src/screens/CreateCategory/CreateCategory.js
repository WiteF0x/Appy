import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import CategoryList from '../../components/CategoryList/CategoryList';
import CategoryInput from '../../components/CategoryInput/CategoryInput';
import CategoryDeleteModal from '../../components/CategoryDeleteModal/CategoryDeleteModal';
import Header from '../../components/BackHeader/backHeader';


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
                <Header goBack={this.props.goToAdmin} />       
                <Text style={styles.screenTitle}>Create Category</Text>
                <CategoryInput />
                <CategoryList
                    goToFull={this.props.goToFull} 
                    categories={this.props.categories}
                    selectItem={this.selectItem}    
                />
            </View>
        );
    }
}

export default CreateCategory;
