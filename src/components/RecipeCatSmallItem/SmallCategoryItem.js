import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import { getRecipesByCategoryAction } from '../../store/actions';

import styles from './style';


const RecipeSmallCategoryItem = props => (
  <View style={styles.listItem} >
    <TouchableOpacity
      onPress={() => {
        props.onGetRecipesByCategory(props.categoryId);
        props.selectCategory(props.categoryId, props.categoryTitle);
        props.closeSelectModal();
      }}
    >
      <Text style={styles.title}>
        {props.categoryTitle}
      </Text>
    </TouchableOpacity>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onGetRecipesByCategory: id => dispatch(getRecipesByCategoryAction(id)),
});

export default connect(null, mapDispatchToProps)(RecipeSmallCategoryItem);
