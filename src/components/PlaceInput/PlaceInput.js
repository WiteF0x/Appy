import React from 'react';
import { 
    View, 
    Button, 
    TextInput 
} from 'react-native';

import styles from './style';

class PlaceInput extends React.Component {
  state = {
    placeNameInput: '',
  }

  onInputChange = placeNameInput => this.setState({ placeNameInput });

  onSubmitHandle = () => {
    const { placeNameInput } = this.state;

    if (placeNameInput.trim() === "") {
      return;
    }

    this.props.placeSubmitHandler(placeNameInput);
  }

  render() {
    const { placeNameInput } = this.state;

    return (
      <View style = {styles.inputContainer}>
        <TextInput 
          placeholder='Type an awesome place'
          value={placeNameInput} 
          onChangeText={this.onInputChange}
          style={styles.placeInput}
        />     
        <Button
          title='Add'
          style={styles.placeButton}
          onPress={this.onSubmitHandle}
        /> 
      </View>
    );
  }
};

export default PlaceInput;
