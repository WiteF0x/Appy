import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const ChildrenListItem = props => {
  const Content = (
    <View>
      <Text>{props.childtitle}</Text>
    </View>
  )
  
  return(
    <View style={styles.main}>
      {Content}
    </View>
  )
}

export default ChildrenListItem;
