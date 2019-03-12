import React from 'react';
import { FlatList } from 'react-native';

import ArticleListItem from '../ArticleListItem/ArticleListItem';
import styles from './style';

const ArticleList = props => {
    const { articles } = props;

    return (
        <FlatList 
            style = {styles.listContainer}
            data={articles}
            renderItem={(info) => (
                <ArticleListItem
                    selectItem={props.selectItem}
                    articleId={info.item._id}
                    articleTitle={info.item.title}
                    articleText={info.item.text}
                    articleDescription={info.item.description}
                />
            )} 
        />
    );
}

export default ArticleList;
    