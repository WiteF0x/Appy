import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { getRecipesByCategoryAction } from '../../store/actions';
import styles from './style';
import {connect} from 'react-redux';

const RecipeSmallCategoryItem = (props) => (
    <View style={styles.listItem} >
      <TouchableOpacity onPress={()=>props.onGetRecipesByCategory(props.categoryId)}>
        <Text style={styles.title}>{props.categoryTitle}</Text>
      </TouchableOpacity>
    </View>
);
  
const mapDispatchToProps = dispatch => ({
  onGetRecipesByCategory: (id) => dispatch(getRecipesByCategoryAction(id)),
});
  
export default connect(null, mapDispatchToProps) (RecipeSmallCategoryItem);
