import React from 'react';
import { FlatList } from 'react-native';

import RecipeSmallCategoryItem from '../RecipeCatSmallItem/SmallCategoryItem';

import styles from './style';

const SmallCategoryList = (props) => {
  const { categories } = props;

  return (
            <FlatList
                style = {styles.listContainer}
                data={categories}
                renderItem={info => (
                    <RecipeSmallCategoryItem
                        categoryId={info.item._id}
                        categoryTitle={info.item.title}
                        closeSelectModal={props.closeSelectModal}
                        selectCategory={props.selectCategory}
                    />
                )}
            />
  );
};

export default SmallCategoryList;

