import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

const RecipeslistItem = (props) => (
        <View style={styles.listItem} >
            <Text style={styles.title}>{props.recipeTitle}</Text>
            <Text style={styles.text}>{props.recipeText}</Text>
            <TouchableOpacity onPress={()=>props.selectItem(props.recipeId)} >
                <Icon name="ios-trash" color="red" size={30} />
            </TouchableOpacity>
        </View>
);

export default RecipeslistItem;
