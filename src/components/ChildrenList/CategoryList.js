import React from 'react';
import { FlatList } from 'react-native';

import ChildrenListItem from '../ChildrenListItem/ChildrenListItem';
import styles from './style';

const ChildrenList = props => {

    const { children } = props;
      
    return (    
            <FlatList 
                style = {styles.listContainer}
                data={children}
                renderItem={(info) => (
                    <ChildrenListItem
                        childId={info.item._id}
                        childTitle={info.item.title}
                        childParent={info.item.parentId}
                        myParent={props.myParent}
                    />
                )} 
            />
    );
}

export default ChildrenList;
    