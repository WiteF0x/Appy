import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles';

class Admin extends Component {
    render() {
        return(
            <View style={styles.containerView}>
              <TouchableOpacity onPress={()=>this.props.goToArticle()}>
                  <Text style={styles.linkText}>
                    Create Article
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.goToRecipe()}>
                  <Text style={styles.linkText}>
                    Create Recipe
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.goToCategory()}>
                  <Text style={styles.linkText}>
                    Create Category
                  </Text>
              </TouchableOpacity>
            </View>
        );
    }
}

export default Admin;
