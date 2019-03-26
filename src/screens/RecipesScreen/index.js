import React, { Component } from 'react';

import { connect } from 'react-redux';

import App from './Recipe';

import {
  getRecipesAction,
  getCategoriesAction,
} from '../../store/actions';

@connect(
  state => ({
    recipes: state.recipes.recipes,
    categories: state.categories.categories,
  }),
  ({
    onGetCategories: getCategoriesAction,
    onGetRecipes: getRecipesAction,
  }),
)
class Recipes extends Component {
  componentDidMount() {
    this.props.onGetCategories();
    this.props.onGetRecipes();
  }

  render() {
    return (
            <App
                categories={this.props.categories}
                recipes={this.props.recipes}
                onGetRecipes={this.props.onGetRecipes}
            />
    );
  }
}

export default Recipes;
