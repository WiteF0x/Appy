import React, { Component } from 'react';

import {connect} from 'react-redux';

import { 
  getChildrenOfCategoryAction,
  getCategoriesAction,
  getCatChildAction,
} from '../../store/actions';

import Children from './CategoryChildren';

@connect(
  state => ({
    childcategories: state.childcategories.childcategories,
    categories: state.categories.categories,
    catchild: state.catchild.catchild,
    allobj: state.objcat.objcat,
  }),
  ({
    onGetChildren: getChildrenOfCategoryAction,
    onGetCategories: getCategoriesAction,
    onGetCatChild: getCatChildAction,
  })
)
class CategoryChildren extends Component {
  state = {
    gotTitle: null,
    id: null,
    children: null,
    testobj: {},
    childmas: [],
  };
  
    componentDidMount() {
      const currentTitle = this.props.navigation.getParam('title');
      const currentId = this.props.navigation.getParam('id');
      const currentChildren = this.props.navigation.getParam('children');

      this.setState({
          gotTitle: currentTitle, 
          id: currentId,
          children: currentChildren,
          testobj: this.props.allobj,
      },() => {
        for(var i=0; i<currentChildren.mymassiv.length;i++){
          this.state.childmas.push(this.state.testobj[currentChildren.mymassiv[i]])
        }
      });
        
    };

    render() {
        return(
          <Children 
            onGetCatChild={this.props.onGetCatChild}
            testobj={this.state.testobj}
            children={this.state.children}
            childmas={this.state.childmas}
          />
        );
    }
}

export default CategoryChildren;
