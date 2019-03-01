import React, { Component } from 'react'
import { View } from 'react-native';
import {connect} from 'react-redux';

//components
import PlaceList from '../../components/PlaceList/PlaceList';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PlaceDetail from '../../components/PlaceDetail/PlaceDetail';

//actions
import { 
  addPlace,
  deletePlace, 
  selectPlace,
  deselectPlace 
} from '../../store/actions/index';

import styles from './styles';


class App extends Component {

  static navigationOptions = {
    header: null
  }

  placeSubmitHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }
  modalClosedHandler = () => {
   this.props.onDeselectPlace();
  }

  placeSelectedHandler =  key => {
   this.props.onSelectPlace(key);
  };

  render(){
    return (
      <View style={styles.container}>
        <PlaceDetail 
            selectedPlace={this.props.selectedPlace}
            onItemDeleted={this.placeDeletedHandler} 
            onModalClosed={this.modalClosedHandler} 
        />
        <PlaceInput placeSubmitHandler={this.placeSubmitHandler} />
        <PlaceList 
            places={this.props.places}
            onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
