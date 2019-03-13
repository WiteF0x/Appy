import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const ChildrenListItem = (props) => {
  let childContent = null;
  console.log('___________________');
  console.log(props);
  if (props.childParent === props.myParent) {
    console.log(props);
    childContent = (
      <View style={styles.listItem}>
        <Text style={styles.titletext}>Title:</Text>
        <Text style={styles.title}>{props.childTitle}</Text>
        <Text style={styles.idtext}>ID:</Text>
        <Text style={styles.id}>{props.childId}</Text>
      </View>
    )
  }

  return(
    <View>
      {childContent}
    </View>
)};

export default ChildrenListItem;
