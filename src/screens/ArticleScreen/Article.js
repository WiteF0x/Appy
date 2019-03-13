import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import {ARTICLE_BACKGROUND}  from '../../constants/images';

import ArticleList from '../../components/ArticleList/ArticleList';
import SmallCategoryList from '../../components/SmallCategoryList/SmallCategoryList';
import ArticleDeleteModal from '../../components/ArticleDeleteModal/ArticleDeleteModal';

import styles from './styles';

class Article extends Component {  
    state = {
       ModalVisible: false,
       idToDelete: null,
       visibleContent: false,
    };

    selectItem = (id) => {
      this.setState({
        ModalVisible: true,
        idtoDelete: id,
      });
    };

    closeModal = () => this.setState({ModalVisible: false});

    // switchContent = (visible) => {
    //   this.setState({visibleContent: !visible})
    //   console.log(this.state.visibleContent);
    // };

    render() {
        return (
            <ImageBackground source={require('../../assets/articleBg.jpg')} style={styles.background} >
                <View style={styles.container}>
                  <ArticleDeleteModal 
                    Mvisible={this.state.ModalVisible}
                    closeModal={this.closeModal}
                    idToDelete={this.state.idToDelete}
                  />
                  <TouchableOpacity onPress={()=>this.props.onGetArticles()}>
                    <Text style={styles.screenTitle}>
                      Articles
                    </Text>
                  </TouchableOpacity>
                  <SmallCategoryList
                    categories={this.props.categories}
                  />
                  <ArticleList
                    // visibleContent={this.state.visibleContent}
                    // switchContent={this.switchContent}
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
