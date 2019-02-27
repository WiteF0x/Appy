import React from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import styles from './style';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';



class App extends React.Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  }

  placeNameChangeHandler = val => this.setState({ placeName: val });

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
            key: Math.random(), 
            name: prevState.placeName,
            image: {
              uri: "https://mirpozitiva.ru/uploads/posts/2016-11/medium/1479734077_kofe10.jpg"
            }
        },)
      };
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
          return {
            places: prevState.places.filter(place => {
              return place.key !== prevState.selectedPlace.key;
            }),
            selectedPlace: null
          };
        });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return{
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
}


  render(){ 
    const { places, placeName } = this.state;
    
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
        <PlaceInput 
          placeNname={placeName} 
          places={places} 
          placeSubmitHandler={this.placeSubmitHandler} 
          placeNameChangeHandler={this.placeNameChangeHandler}
        />
        <PlaceList 
            places={places} 
            onItemSelected  ={this.placeSelectedHandler} 
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNApp', () => App);
