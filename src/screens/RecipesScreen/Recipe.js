import React, { Component } from 'react'
import { 
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
 } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import RecipeList from '../../components/RecipeList/RecipeList';
import RecipeDeleteModal from '../../components/RecipeDeleteModal/RecipeDeleteModal';
import SelectCategoryModal from '../../components/MainPagesSelectModal/MainPagesSelectModal';

import styles from './styles';

class Recipe extends Component {
  state = {
    ModalVisible: false,
    idToDelete: '',

    SelectVisible: false,
    currentCategoryName: 'All',
    category: '',
  };

  selectItem = (id) => {
    this.setState({
      ModalVisible: true,
      idToDelete: id,
    });
  };
  
  selectCategory = (id, name) => {
    this.setState({
      ModVis: false,
      category: id,
      currentCategoryName: name,
    })
  };

  openSelectModal = () => this.setState({SelectVisible: true});

  closeModal = () => this.setState({ModalVisible: false});

  closeSelectModal = () => this.setState({SelectVisible: false});

  render(){
    return (
      <ImageBackground source={require('../../assets/sweets.jpg')} style={styles.background} >
        <View style={styles.container}>
          <RecipeDeleteModal 
            Mvisible={this.state.ModalVisible}
            closeModal={this.closeModal}
            idToDelete={this.state.idToDelete}
          />
          <Text style={styles.screenTitle}>Recipes</Text>

          <View style={styles.categoryConteiner}>
              <TouchableOpacity 
                onPress={()=>{
                  this.props.onGetRecipes();
                  this.setState({currentCategoryName: 'All'});
                }}>
                <Icon 
                  name='ios-refresh' 
                  color='white' 
                  size={18}
                  style={styles.icon} 
                />
              </TouchableOpacity>
              <Icon
                  name='ios-funnel'
                  color='white'
                  size={15}
                  style={styles.iconfunnel}
                />
              <TouchableOpacity 
                onPress={()=>this.openSelectModal()}
                style={styles.touch}
              >
                <Text style={styles.categoryText}>Category: </Text> 
              </TouchableOpacity>
              <Text style={styles.currentCategory}>
                {this.state.currentCategoryName}
              </Text>
          </View>

            <SelectCategoryModal
              categories={this.props.categories}
              Mvis={this.state.SelectVisible}
              closeSelectModal={this.closeSelectModal}
              selectCategory={this.selectCategory}
            />
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
