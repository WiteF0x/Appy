import React from 'react';

import { connect } from 'react-redux';

import { createStackNavigator } from 'react-navigation';
import { createNavigationReducer, reduxifyNavigator } from 'react-navigation-redux-helpers';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

// screens
import Login from '../screens/LoginScreen';
import Recipes from '../screens/RecipesScreen';
import AdminScreen from '../screens/AdminScreen';
import Articles from '../screens/ArticleScreen';
import CreateArticleScreen from '../screens/CreateArticle';
import CreateRecipeScreen from '../screens/CreateRecipe';
import CreateCategoryScreen from '../screens/CreateCategory';
import FullArticleScreen from '../screens/FullArticleScreen';
import ChildCategories from '../screens/CategoryChildrenScreen';

const CreateCategoryNavigation = createStackNavigator({
  MainCategory: {
    screen: CreateCategoryScreen,
  },
  ChildCategories: {
    screen: ChildCategories,
  },
}, {
  initialRouteName: 'MainCategory',
  headerMode: 'none',
});

const AdminNavigation = createStackNavigator({
  MainAdmin: {
    screen: AdminScreen,
  },
  CreateArticle: {
    screen: CreateArticleScreen,
  },
  CreateRecipe: {
    screen: CreateRecipeScreen,
  },
  CreateCategory: {
    screen: CreateCategoryNavigation,
  },
}, {
  initialRouteName: 'MainAdmin',
  headerMode: 'none',
});

const ArticleNavigation = createStackNavigator({
  MainArticle: {
    screen: Articles,
  },
  FullArticle: {
    screen: FullArticleScreen,
  },
}, {
  initialRouteName: 'MainArticle',
  headerMode: 'none',
},);

const mainNavigation = createMaterialBottomTabNavigator({
  Recipes: {
    screen: Recipes,
    navigationOptions: {
      tabBarLabel: 'Recipes',
      tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-paper" color={tintColor} size={24} />
      ),
    },
  },
  Articles: {
    screen: ArticleNavigation,
    navigationOptions: {
      tabBarLabel: 'Articles',
      tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-apps" color={tintColor} size={24} />
      ),
    },
  },
  Admin: {
    screen: AdminNavigation,
    navigationOptions: {
      tabBarLabel: 'Info Control',
      tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={24} />
      ),
    },
  },
}, {
  initialRouteName: 'Recipes',
  order: ['Recipes', 'Articles', 'Admin'],
  activeTintColor: 'orange',
});


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  MainContent: {
    screen: mainNavigation,
  },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});

export const navigationReducer = createNavigationReducer(AppNavigator);

export const getAppNavigationWithState = () => {
  const App = reduxifyNavigator(AppNavigator, 'root');
  const mapStateToProps = state => ({ state: state.nav });
  const AppWithNavigationState = connect(mapStateToProps)(App);
  return AppWithNavigationState;
};

export default AppNavigator;
