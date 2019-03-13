import React, { Component } from 'react';
import Article from './Article';

import {connect} from 'react-redux';

import { 
    getArticlesAction,
    getCategoriesAction,
} from '../../store/actions';

@connect(
  state => ({
    articles: state.articles.articles,
    categories: state.categories.categories,
  }),
  ({
    onGetCategories: getCategoriesAction,
    onGetArticles: getArticlesAction,
  })
)

class ArticleScreen extends Component {
    componentDidMount() {
        this.props.onGetCategories();
        this.props.onGetArticles();
    }

    goToFull = (title,text,description) => this.props.navigation.navigate('FullArticle', {
      title: title,
      text: text,
      description: description,
    });

    render() {
        return(
            <Article
              goToFull={this.goToFull} 
              articles={this.props.articles}
              categories={this.props.categories}
              onGetArticles={this.props.onGetArticles}
            />
        );
    }
}

export default ArticleScreen;