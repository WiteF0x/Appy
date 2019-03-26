import React from 'react';
import { FlatList } from 'react-native';

import CategoryListItem from '../TrueCategoryListItem/CategoryListItem';

import styles from './styles';

const CategoryList = (props) => {
  const { categories } = props;

  return (
            <FlatList
                style = {styles.listContainer}
                data={categories}
                renderItem={info => (
                    <CategoryListItem
                        startFunc={props.startFunc}
                        takeCategory={props.takeCategory}
                        goToFull={props.goToFull}
                        selectItem={props.selectItem}
                        categoryId={info.item._id}
                        categoryTitle={info.item.title}
                    />
                )}
            />
  );
};

export default CategoryList;

