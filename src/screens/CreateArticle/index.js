import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateArticle from './CreateArticle';

import { getCategoriesAction } from '../../store/actions';


@connect(
  state => ({ categories: state.categories.categories }),
  ({ onGetCategories: getCategoriesAction }),
)
class CreateArticleScreen extends Component {
  componentDidMount() {
    this.props.onGetCategories();
  }

    goToAdmin = () => this.props.navigation.navigate('MainAdmin');

    render() {
      return (
            <CreateArticle
              categories={this.props.categories}
              goToAdmin={this.goToAdmin}
            />
      );
    }
}

export default CreateArticleScreen;
