import React from 'react';
import { FlatList } from 'react-native';

import ChildrenListItem from '../ChildrenListItem/ChildrenListItem';
import styles from './style';

const ChildrenList = props => {

    const { childmas } = props;
      console.log('Children List')
      console.log(childmas)

    return (    
            <FlatList 
                style = {styles.listContainer}
                data={childmas}
                renderItem={(info) => (
                    <ChildrenListItem
                        // onGetCatChild={props.onGetCatChild}
                        childtitle={info.item.title}
                    />
                )} 
            />
    );
}

export default ChildrenList;
     