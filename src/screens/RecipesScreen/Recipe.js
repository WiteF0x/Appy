import React, { Component } from 'react'
import { 
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
 } from 'react-native';

import RECIPE_BACKGROUND  from '../../constants/images';

import styles from './styles';

import RecipeList from '../../components/RecipeList/RecipeList';
import RecipeCatSmallList from '../../components/RecipeCatSmallList/SmallCategoryList';
import RecipeDeleteModal from '../../components/RecipeDeleteModal/RecipeDeleteModal';


class Recipe extends Component {
  state = {
    ModalVisible: false,
    idToDelete: null,
  };

  selectItem = (id) => {
    this.setState({
      ModalVisible: true,
      idToDelete: id,
    });
  };
  
  closeModal = () => this.setState({ModalVisible: false});

  render(){
    return (
      <ImageBackground source={require('../../assets/recipeBg.jpg')} style={styles.background} >
        <View style={styles.container}>
          <RecipeDeleteModal 
            Mvisible={this.state.ModalVisible}
            closeModal={this.closeModal}
            idToDelete={this.state.idToDelete}
          />
          <TouchableOpacity onPress={()=>this.props.onGetRecipes()}>
            <Text style={styles.screenTitle}>Recipes</Text>
          </TouchableOpacity>
            <RecipeCatSmallList categories={this.props.categories} />
            <RecipeList 
              recipes={this.props.recipes} 
              selectItem={this.selectItem}
              />
        </View>
      </ImageBackground>
    );
  }
}

export default Recipe;
