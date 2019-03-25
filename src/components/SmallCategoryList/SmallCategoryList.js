import React from 'react';
import { FlatList } from 'react-native';

import SmallCategoryItem from '../SmallCategoryItem/SmallCategoryItem';

import styles from './style';

const SmallCategoryList = props => {

    const { categories } = props;
      
    return (    
            <FlatList 
                style = {styles.listContainer}
                data={categories}
                renderItem={(info) => (
                    <SmallCategoryItem
                        categoryId={info.item._id}
                        categoryTitle={info.item.title}
                        closeSelectModal={props.closeSelectModal}
                        selectCategory={props.selectCategory}
                    />
                )} 
            />
    );
}

export default SmallCategoryList;
    