import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage   }/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

export default listItem;
