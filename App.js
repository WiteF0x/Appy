import React from 'react';
import { AppRegistry,
  Component,
  StyleSheet,
  Text,
  View, } from 'react-native';
// import { NavigationActions } from 'react-navigation';
// import Navigator from '../config/routes';

import FetchLocation from './components/FetchLocation';


export default class App extends React.Component {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
    }, err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello man!</Text>
        <FetchLocation onGetLocation = {this.getUserLocationHandler} />
        <View>
          {ConsolePanel}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
