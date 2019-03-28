import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

const ChildrenListItem = (props) => {
  const mymassiv = props.children;
  const Content = (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => {
          props.goToFull(
            props.childtitle,
            props.childid,
            { mymassiv },
          );
        }}>
          <Text style={styles.title}>{props.childtitle}</Text>
          <Text style={styles.id}>{props.childid}</Text>
        </TouchableOpacity>
      </View>
  );


  return (
    <View style={styles.main}>
      {Content}
    </View>
  );
};

export default ChildrenListItem;
