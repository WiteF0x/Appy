import React, { Component } from 'react';
import CreateCategory from './CreateCategory';

import {connect} from 'react-redux';

import { getCategoriesAction } from '../../store/actions';

@connect(
  state => ({categories: state.categories.categories}),
  ({onGetCategories: getCategoriesAction})
)

class CreateCategoryScreen extends Component {
    componentDidMount() {
        this.props.onGetCategories();
    };
    goToAdmin = () => this.props.navigation.navigate('MainAdmin');

    goToFull = (title,id,children) => this.props.navigation.navigate('ChildCategories', {
      title: title,
      id: id,
      children: children,
    });

    render() {
        return(
            <CreateCategory 
              categories={this.props.categories}
              goToAdmin={this.goToAdmin}
              goToFull={this.goToFull}  
            />
        );
    }
}

export default CreateCategoryScreen;
