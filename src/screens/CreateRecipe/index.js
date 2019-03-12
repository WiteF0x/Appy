import React, { Component } from 'react';
import CreateRecipe from './CreateRecipe';

import { getCategoriesAction } from '../../store/actions';

import {connect} from 'react-redux';

@connect(
  state => ({categories: state.categories.categories}),
  ({onGetCategories: getCategoriesAction})
)

class CreateRecipeScreen extends Component {
    componentDidMount() {
        this.props.onGetCategories();
    };
    goToAdmin = () => this.props.navigation.navigate('MainAdmin');

    render() {
        return(
            <CreateRecipe 
              categories={this.props.categories} 
              goToAdmin={this.goToAdmin}  
            />
        );
    }
}

export default CreateRecipeScreen
