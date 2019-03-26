import React from 'react';
import { FlatList } from 'react-native';

import RecipesListItem from '../RecipeListItem/RecipeListItem';
import styles from './style';

const RecipeList = (props) => {
  const { recipes } = props;

  return (
        <FlatList
            style = {styles.listContainer}
            data={recipes}
            renderItem={info => (
                <RecipesListItem
                    selectItem={props.selectItem}
                    recipeId={info.item._id}
                    recipeTitle={info.item.title}
                    recipeText={info.item.text}
                />
            )}
        />
  );
};

export default RecipeList;
