import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';

import { getArticlesByCategoryAction } from '../../store/actions';

import styles from './style';

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
