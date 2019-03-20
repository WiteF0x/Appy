import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class MenulistItem extends Component {

    render(){
        let Content = null;
        if(this.props.index === null){
            Content = null;
        }else{
                if(this.props.index === this.props.len-1){
                    Content = (
                        <View style={styles.Content}>
                            <Icon 
                                style={styles.icon}
                                name="ios-arrow-forward" 
                                size={20} 
                                color="black"
                            />
                                <Text style={styles.lastTitle}>
                                    {this.props.curTitle}
                                </Text>
                        </View>
                        )
                }else{
                    Content = (
                        <View style={styles.Content}>
                            <Icon 
                                style={styles.icon}
                                name="ios-arrow-forward" 
                                size={20} 
                                color="black"
                            />
                            <TouchableOpacity 
                                onPress={()=>{
                                    this.props.onDeleteAfter(this.props.index);
                                    this.props.goToFull(
                                        this.props.curTitle, 
                                        this.props.curId, 
                                        this.props.curChildren
                                    );

                                }}
                            >
                                <Text style={styles.title}>
                                    {this.props.curTitle}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            }
        return(
            <View>
                { Content } 
            </View>
        );
    }
}

export default MenulistItem;
