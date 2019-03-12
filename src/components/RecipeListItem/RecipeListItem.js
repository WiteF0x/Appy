import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './style';

import Icon from 'react-native-vector-icons/Ionicons';

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
