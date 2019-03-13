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
        console.log(this.props.categories);
    };
    goToAdmin = () => this.props.navigation.navigate('MainAdmin');

    goToFull = (title,id) => this.props.navigation.navigate('ChildCategories', {
      title: title,
      id: id,
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
