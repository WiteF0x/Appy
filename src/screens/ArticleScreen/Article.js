import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArticleList from '../../components/ArticleList/ArticleList';
import ArticleDeleteModal from '../../components/ArticleDeleteModal/ArticleDeleteModal';
import ArticleSelectCategoryModal from '../../components/ArticleMainPagesSelectModal/ArticleMainPagesSelectModal';

import styles from './styles';

class Article extends Component {
    state = {
      ModalVisible: false,
      idToDelete: '',
      visibleContent: false,

      SelectVisible: false,
      currentCategoryName: 'All',
      category: '',
    };

    selectItem = (id) => {
      this.setState({
        ModalVisible: true,
        idToDelete: id,
      });
    };

    selectCategory = (id, name) => {
      this.setState({
        ModVis: false,
        category: id,
        currentCategoryName: name,
      });
    };

    openSelectModal = () => this.setState({ SelectVisible: true });

    closeModal = () => this.setState({ ModalVisible: false });

    closeSelectModal = () => this.setState({ SelectVisible: false });

    render() {
      return (
            <ImageBackground source={require('../../assets/sweets2.jpg')} style={styles.background} >
                <View style={styles.container}>
                  <ArticleDeleteModal
                    Mvisible={this.state.ModalVisible}
                    closeModal={this.closeModal}
                    idToDelete={this.state.idToDelete}
                  />
                    <Text style={styles.screenTitle}>
                      Articles
                    </Text>
                  <View style={styles.categoryConteiner}>
                  <TouchableOpacity
                onPress={() => {
                  this.props.onGetArticles();
                  this.setState({ currentCategoryName: 'All' });
                }}>
                <Icon
                  name='ios-refresh'
                  color='white'
                  size={18}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Icon
                  name='ios-funnel'
                  color='white'
                  size={15}
                  style={styles.iconfunnel}
                />
                  <TouchableOpacity
                    onPress={() => this.openSelectModal()}
                    style={styles.touch}
                  >
                    <Text style={styles.categoryText}>Category: </Text>
                  </TouchableOpacity>
                  <Text style={styles.currentCategory}>
                    {this.state.currentCategoryName}
                  </Text>
                  </View>
                  <ArticleSelectCategoryModal
                    categories={this.props.categories}
                    Mvis={this.state.SelectVisible}
                    closeSelectModal={this.closeSelectModal}
                    selectCategory={this.selectCategory}
                  />
                  <ArticleList
                    goToFull={this.props.goToFull}
                    selectItem={this.selectItem}
                    articles={this.props.articles}
                  />
                </View>
            </ImageBackground>
      );
    }
}

export default Article;
