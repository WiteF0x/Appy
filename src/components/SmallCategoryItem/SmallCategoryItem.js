import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { getArticlesByCategoryAction } from '../../store/actions';
import styles from './style';
import {connect} from 'react-redux';

const SmallCategoryItem = (props) => (
    <View style={styles.listItem} >
      <TouchableOpacity 
        onPress={()=>{
          props.onGetArticlesByCategory(props.categoryId);
          props.selectCategory(props.categoryId, props.categoryTitle);
          props.closeSelectModal();
        }}
      >
        <Text style={styles.title}>{props.categoryTitle}</Text>
      </TouchableOpacity>
    </View>
);

const mapDispatchToProps = dispatch => ({
  onGetArticlesByCategory: (id) => dispatch(getArticlesByCategoryAction(id)),
});
  
export default connect(null, mapDispatchToProps) (SmallCategoryItem);
