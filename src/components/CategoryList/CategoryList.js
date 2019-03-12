import React from 'react';
import { FlatList } from 'react-native';

import CategoryListItem from '../CategoryListItem/CategoryListItem';
import styles from './style';

const CategoryList = props => {

    const { categories } = props;
      
    return (    
            <FlatList 
                style = {styles.listContainer}
                data={categories}
                renderItem={(info) => (
                    <CategoryListItem
                        selectItem={props.selectItem}
                        categoryId={info.item._id}
                        categoryTitle={info.item.title}
                    />
                )} 
            />
    );
}

export default CategoryList;
    