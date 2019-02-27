import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';
import styles from './style';

const PlaceList = props => {
    const { places } = props;

    return (
        <FlatList 
            style = {styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )} 
        />
    );
}

export default PlaceList;
