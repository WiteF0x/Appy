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
                        goToFull={props.goToFull}
                        childtitle={info.item.title}
                        childid={info.item._id}
                        children={info.item.children}
                    />
                )} 
            />
    );
}

export default ChildrenList;
     