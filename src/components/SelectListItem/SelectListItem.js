import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

const SelectListItem = (props) => (
    <View >
      <TouchableOpacity onPress={()=>props.selectItem(props.categoryId,props.categoryTitle)}>
          <Text style={styles.title}>{props.categoryTitle}</Text>
      </TouchableOpacity>
    </View>
);

export default SelectListItem;
