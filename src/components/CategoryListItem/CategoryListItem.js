import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const CategorylistItem = (props) => {
  const mymassiv = props.categoryChildren;
  return(
    <View style={styles.listItem} >       
      <View style={styles.openNext}>
        <Text style={styles.titletext}>Title:</Text>
        <TouchableOpacity onPress={()=>props.goToFull(props.categoryTitle,props.categoryId,{mymassiv})}> 
          <Icon
              name='ios-arrow-round-forward'
              color='grey'
              size={35}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
          <Text style={styles.title}>{props.categoryTitle}</Text>
        <Text style={styles.idtext}>ID:</Text>
        <Text style={styles.id}>{props.categoryId}</Text>
      <TouchableOpacity style="icon"onPress={()=>props.selectItem(props.categoryId)}>
        <Icon name="ios-trash" color="red" size={30} />
      </TouchableOpacity>
    </View>
)};

export default CategorylistItem;
