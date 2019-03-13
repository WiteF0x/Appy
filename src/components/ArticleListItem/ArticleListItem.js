import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

class ArticlelistItem extends React.Component {
  state = {
    isOpen: false,
  }
  
  render(){
    return(
         <View style={styles.listItem} >
            <TouchableOpacity onPress={()=>this.props.goToFull(this.props.articleTitle,this.props.articleText,this.props.articleDescription)}>
              <Text style={styles.title}>{this.props.articleTitle}</Text>
              <Text style={styles.text}>{this.props.articleText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.selectItem(this.props.articleId)}>
              <Icon name="ios-trash" color="red" size={30}/>
            </TouchableOpacity>
         </View>
    )
  }
}

export default ArticlelistItem;
