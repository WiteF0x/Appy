import React from 'react';
import { FlatList } from 'react-native';

import SelectListItem from '../SelectListItem/SelectListItem';
import styles from './style';

const SelectList = props => {

    const { categories } = props;
    console.log('__________SelectList');
    return (    
            <FlatList 
                style = {styles.listContainer}
                data={categories}
                renderItem={(info) => (
                    <SelectListItem
                        categoryId={info.item._id}
                        categoryTitle={info.item.title}
                        closeMy={props.closeMy}
                        selectItem={props.selectItem}
                    />
                )} 
            />
    );
}

export default SelectList;
    