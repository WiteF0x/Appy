import React, { Component } from 'react';

import {connect} from 'react-redux';

import { 
  getChildrenOfCategoryAction,
  getCategoriesAction,
} from '../../store/actions';

import Children from './CategoryChildren';

@connect(
  state => ({
    childcategories: state.childcategories.childcategories,
    categories: state.categories.categories,
  }),
  ({
    onGetChildren: getChildrenOfCategoryAction,
    onGetCategories: getCategoriesAction,
  })
)
class CategoryChildren extends Component {
  state = {
    gotTitle: null,
    id: null,
  };
  
    componentDidMount() {
      console.log('_____________________DID MOUNT________________________________');
      const currentTitle = this.props.navigation.getParam('title');
      const currentId = this.props.navigation.getParam('id');

      this.setState({
          gotTitle: currentTitle, 
          id: currentId,
      },() => console.log(this.state.id));
      this.props.onGetCategories();
      console.log('_____________________PLEASE SHOW ME STATE_________________');
      console.log(this.state.id);
    };

    render() {
        return(
          <Children 
            children={this.props.categories}
            myParent={this.state.id}  
          />
        );
    }
}

export default CategoryChildren;
