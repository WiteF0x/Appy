import React from 'react';
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux'; 

import styles from './style';

import { getCreateCategoryAction } from '../../store/actions';

import MyModal from '../CategorySelectModal/CategorySelectModal';

import Icon from 'react-native-vector-icons/Ionicons';


@connect(
  null,
  ({onCreateCategory: getCreateCategoryAction}),
)

class CategoryInput extends React.Component {
  static propTypes = {
    categoryinput: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  
  state = {
    categoryInput: '',
    isDisable: true,
  
    parentCategory: null,
    currentCategoryName: '',
    ModVis: false,
    icon: 'ios-add',
  }

  onInputChange = categoryInput => {
          this.setState({ categoryInput });

          this.setState({isDisable: false});
  };

  onSubmitHandle = () => {
    const { categoryInput } = this.state;

    if (categoryInput.trim() === "") {
      return;
    }
    const category = {
      categoryTitle : categoryInput,
      categoryParentId : this.state.parentCategory,
    };
    this.props.onCreateCategory(category);
    this.setState({
      categoryInput: '',
      currentCategoryName: '',
      isDisable: true,
    });
  };

  closeMy = () => this.setState({ModVis: false});

  openModal = () => {
    if(this.state.ModVis === false){
      this.setState({ModVis: true})
    } else{
      this.closeMy();
    };
  };

  selectItem = (id, name) => {
    this.setState({
      ModVis: false,
      parentCategory: id,
      currentCategoryName: name,
    });
  };

  render() {
    const { categoryInput } = this.state;

    return (
      <View style = {styles.inputContainer}>
        <TextInput
          key={132} 
          placeholder='Type a category'
          value={categoryInput} 
          onChangeText={this.onInputChange}
          style={styles.categoryInput}
        />     
        <View style={styles.parentContainer}>
          <TouchableOpacity 
            style={styles.open}
            onPress={()=>this.openModal()}
          >
            <Icon name={this.state.icon} color='blue' size={20}/>
          </TouchableOpacity>
          <Text style={styles.category}>
            Category:  
              <Text style={styles.categoryColor}>{this.state.currentCategoryName}</Text>
          </Text>
          <TouchableOpacity
          style={styles.myAddButton} 
          onPress={this.onSubmitHandle}
          disabled={this.state.isDisable}
          >
            <Text style={styles.buttext}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <MyModal 
          Mvis={this.state.ModVis}       
          closeMy={this.closeMy}
          selectItem={this.selectItem}
          categories={this.props.categories} 
        />
      </View>
    );
  }
};

export default CategoryInput;
