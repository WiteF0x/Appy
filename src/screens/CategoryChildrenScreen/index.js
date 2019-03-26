import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  getChildrenOfCategoryAction,
  getCategoriesAction,
  getCatChildAction,
  setMenuItemAction,
  deletePartMenuAction,
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
    onSetMenuItem: setMenuItemAction,
    onDeleteAfter: deletePartMenuAction,
  }),
)
class CategoryChildren extends Component {
  state = {
    gotTitle: null,
    id: null,
    children: null,
    testobj: {},
    childmas: [],
    menu: [],
  };

  componentDidMount() {
    this.setUpScreen();
  }

    goToFull2 = (title, id, children) => {
      currentTitle = null;
      currentId = null;
      currentChildren = null;

      this.props.navigation.navigate('ChildCategories', {
        title,
        id,
        children,
      });

      this.setState({
        gotTitle: null,
        id: null,
        children: null,
        testobj: null,
        childmas: null,
      }, () => {
        this.setUpScreen();
      });
    };

    setUpScreen() {
      const currentTitle = this.props.navigation.getParam('title');
      const currentId = this.props.navigation.getParam('id');
      const currentChildren = this.props.navigation.getParam('children');

      this.props.onSetMenuItem({
        title: currentTitle,
        id: currentId,
        children: currentChildren,
      });

      this.setState({
        gotTitle: currentTitle,
        id: currentId,
        children: currentChildren,
        testobj: this.props.allobj,
        childmas: [],
      }, () => {
        for (let i = 0; i < currentChildren.mymassiv.length; i++) {
          this.state.childmas.push(this.state.testobj[currentChildren.mymassiv[i]]);
        }
      });
    }

    render() {
      return (
          <Children
            onDeleteAfter={this.props.onDeleteAfter}
            goToFull={this.goToFull2}
            childmas={this.state.childmas}
          />
      );
    }
}

export default CategoryChildren;
