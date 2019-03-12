import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import CategoryList from '../../components/CategoryList/CategoryList';
import RecipeInput from '../../components/RecipeInput/RecipeInput';
import CategoryDeleteModal from '../../components/CategoryDeleteModal/CategoryDeleteModal';


import styles from './style';

class Admin extends Component {
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
                <Text style={styles.screenTitle}>Create Recipe</Text>
                <RecipeInput />
                <CategoryList 
                    categories={this.props.categories}
                    selectItem={this.selectItem}    
                />            
            </View>
        );
    }
}

export default Admin;
