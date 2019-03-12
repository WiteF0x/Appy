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

import { getCreateCategoryAction } from '../../store/actions';

@connect(
  null,
  ({onCreateCategory: getCreateCategoryAction}),
)

class CategoryInput extends React.Component {
  static propTypes = {
    categoryinput: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  
  state = {
    categoryInput: '',
  }

  onInputChange = categoryInput => this.setState({ categoryInput });

  onSubmitHandle = () => {
    const { categoryInput } = this.state;

    if (categoryInput.trim() === "") {
      return;
    }
    console.log(categoryInput);
    this.props.onCreateCategory(categoryInput);
  }

  render() {
    const { categoryInput } = this.state;

    return (
      <View style = {styles.inputContainer}>
        <TextInput
          key={132} 
          placeholder='Type a category'
          value={categoryInput} 
          onChangeText={this.onInputChange}
          style={styles.categoryInput}
        />     
        <TouchableOpacity
          style={styles.myAddButton} 
          onPress={this.onSubmitHandle}
        >
          <Text style={styles.buttext}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CategoryInput;
