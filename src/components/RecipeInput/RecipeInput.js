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

import { createRecipeAction } from '../../store/actions';

@connect(
  null,
  ({ onCreateRecipe: createRecipeAction }),
)

class RecipeInput extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    onCreateRecipe: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    text: '',
    category: '',
  }

  onTitleInputChange = title => this.setState({ title });

  onTextInputChange = text => this.setState({ text });

  onCategoryInputChange = category => this.setState({ category });

  onAddHandle = () => {
    this.props.onCreateRecipe(this.state);
  }

  render() {
    const { 
        title,
        text,
        category,
    } = this.state;

    return (
      <View style = {styles.inputContainer1}>
        <TextInput 
          key={1}
          placeholder='Type the title of recipe'
          value={title} 
          onChangeText={this.onTitleInputChange}
          style={styles.titleinput}
        /> 
        <TextInput
            key={2}
            placeholder='Type the text of recipe' 
            value={text}
            onChangeText={this.onTextInputChange}
            style={styles.textinput}
        /> 
        <TextInput
            key={3}
            placeholder='Type the category of recipe'
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

export default RecipeInput;
