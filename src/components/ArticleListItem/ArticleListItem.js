import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
// let articleContent = null;

//     if (props.Mvisible) {
//         modalContent = (
//             <View style={styles.textCont}>
//                 <Text style={styles.text}></Text>
//             </View>
//         );
//     }

const ArticlelistItem = (props) => (
        <View style={styles.listItem} >
            <Text style={styles.title}>{props.articleTitle}</Text>
            <Text style={styles.text}>{props.articleText}</Text>
            <Text style={styles.decription}>{props.articleDescription}</Text>
            <TouchableOpacity onPress={()=>props.selectItem(props.articleId)}>
                <Icon name="ios-trash" color="red" size={30}/>
            </TouchableOpacity>
        </View>
);

export default ArticlelistItem;
