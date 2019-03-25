import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const CategorylistItem = (props) => (
    <View style={styles.listItem} >
      <TouchableOpacity onPress={()=>{
          props.takeCategory(props.categoryId);
          props.startFunc();
          }}>
        <Text style={styles.titletext}>Title:</Text>
        <Text style={styles.title}>{props.categoryTitle}</Text>

        <Text style={styles.idtext}>ID:</Text>
        <Text style={styles.id}>{props.categoryId}</Text>
      </TouchableOpacity>
        <TouchableOpacity style="icon"onPress={()=>props.selectItem(props.categoryId)}>
        <Icon name="ios-trash" color="red" size={30} />
      </TouchableOpacity>
    </View>
);

export default CategorylistItem;
