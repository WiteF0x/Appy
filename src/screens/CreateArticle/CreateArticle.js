import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ArticleInput from '../../components/ArticleInput/ArticleInput';
import CategoryDeleteModal from '../../components/CategoryDeleteModal/CategoryDeleteModal';

import Header from '../../components/BackHeader/backHeader';

import styles from './style';

class CreateArticle extends Component {
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

    closeModal = () => this.setState({ ModalVisible: false });

    render() {
      return (
                <View style={[styles.container, styles.containerView]}>
                    <CategoryDeleteModal
                        Mvisible={this.state.ModalVisible}
                        closeModal={this.closeModal}
                        idToDelete={this.state.idToDelete}
                    />
                    <Header goBack={this.props.goToAdmin} />
                    <Text style={styles.screenTitle}>Create Article</Text>
                    <ArticleInput
                        categories={this.props.categories}
                    />
                </View>
      );
    }
}

export default CreateArticle;
