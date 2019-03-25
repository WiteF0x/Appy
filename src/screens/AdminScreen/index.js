import React, { Component } from 'react';

import Admin from './Admin';

import {connect} from 'react-redux';

import { getCategoriesAction } from '../../store/actions';

@connect(
    state => ({categories:state.categories.categories}),
    ({onGetCategories: getCategoriesAction}),
)
class AdminScreen extends Component {
    componentDidMount() {
        this.props.onGetCategories();
    }

    goToArticle = () => this.props.navigation.navigate('CreateArticle');
    goToRecipe = () => this.props.navigation.navigate('CreateRecipe');
    goToCategory = () => this.props.navigation.navigate('CreateCategory');

    render() {
        return(
            <Admin 
                categories={this.props.categories}
                goToArticle={this.goToArticle}
                goToRecipe={this.goToRecipe}
                goToCategory={this.goToCategory}
            />
        );
    }
}

export default AdminScreen
