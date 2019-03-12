import React from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux'; 

import styles from './style';

import { createArticleAction } from '../../store/actions';

@connect(
  null,
  ({onCreateArticle: createArticleAction}),
)

class ArticleInput extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  state = {
        title: '',
        description: '',
        text: '',
        category: '',
    }    

  onTitleInputChange = title => this.setState({ title });
  onDescriptionInputChange = description => this.setState({ description });
  onTextInputChange = text => this.setState({ text });
  onCategoryInputChange = category => this.setState({ category });


  onAddHandle = () => {
    this.props.onCreateArticle(this.state);
  }

  render() {
    const { 
        title,
        description,
        text,
        category,
    } = this.state;

    return (
      <View style = {styles.inputContainer1}>
        <TextInput 
          key={1}
          placeholder='Type the title of article'
          value={title} 
          onChangeText={this.onTitleInputChange}
          style={styles.titleinput}
        /> 
        <TextInput
            key={2}
            placeholder='Type the text of article' 
            value={text}
            onChangeText={this.onTextInputChange}
            style={styles.textinput}
        /> 
        <TextInput 
          key={75}
          placeholder='Type the description of article'
          value={description} 
          onChangeText={this.onDescriptionInputChange}
          style={styles.titleinput}
        /> 
        <TextInput
            key={3}
            placeholder='Type the category of article'
            value={category}
            onChangeText={this.onCategoryInputChange} 
            style={styles.catinput}
        />   
        <TouchableOpacity
          style={styles.myAddButton} 
          onPress={this.onAddHandle}
        >
          <Text style={styles.buttext}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ArticleInput;
