import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const RecipeslistItem = props => (
        <View style={styles.listItem} >
            <View style={styles.line}>
                <Text style={styles.title}>{props.recipeTitle}</Text>
                <TouchableOpacity onPress={() => props.selectItem(props.recipeId)} >
                    <Icon
                        name="ios-trash"
                        color="red"
                        size={30}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>{props.recipeText}</Text>
        </View>
);

export default RecipeslistItem;
