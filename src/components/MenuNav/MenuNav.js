import React from 'react';

import { FlatList, View } from "react-native";

import MenulistItem from '../MenuItem/MenuItem';

import styles from './style';

const MenuNav = props => {

    const { menu } = props;
    const len = menu.length;
    return (
        <View>
            <FlatList 
                horizontal={true}
                data={menu}
                renderItem={({item, index}) => (
                            <MenulistItem 
                                index={index}
                                len={len}
                                curTitle={item.title}
                                curId={item.id}
                                curChildren={item.children}
                                goToFull={props.goToFull}
                                onDeleteAfter={props.onDeleteAfter}
                            />
                        )
                    }  
                style={styles.listContainer}
            />
        </View>
    );
}
export default MenuNav;
