import React from 'react';
import { 
    View, 
    Button, 
    TextInput 
} from 'react-native';

import styles from './style'

const placeInput = props => {
    return (
        <View style = {styles.inputContainer}>
          <TextInput 
            placeholder="Type an awesome place"
            value={props.placeName} 
            onChangeText={props.placeNameChangeHandler} 
            style={styles.placeInput}
          />     
          <Button 
            title="Add"
            style={styles.placeButton}
            onPress={props.placeSubmitHandler}
          /> 
        </View>  
    );
};

export default placeInput
