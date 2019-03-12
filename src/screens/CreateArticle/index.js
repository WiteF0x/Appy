import React, { Component } from 'react';
import CreateArticle from './CreateArticle';

import { getCategoriesAction } from '../../store/actions';

import { connect } from 'react-redux';

@connect(
  state => ({categories: state.categories.categories}),
  ({onGetCategories: getCategoriesAction})
)

class CreateArticleScreen extends Component {
    componentDidMount() {
        this.props.onGetCategories();
        console.log(this.props.categories);
    };

    goToAdmin = () => this.props.navigation.navigate('MainAdmin');

    render() {
        return(
            <CreateArticle 
              categories={this.props.categories}
              goToAdmin={this.goToAdmin}  
            />
        );
    }
}

export default CreateArticleScreen
