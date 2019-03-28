import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

import { createArticleAction } from '../../store/actions';

import MyModal from '../CategorySelectModalArticle/CategorySelectModalArticle';

import styles from './style';

@connect(
  null,
  ({ onCreateArticle: createArticleAction }),
)
class ArticleInput extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    onCreateArticle: PropTypes.func,
  };

  state = {
    title: '',
    description: '',
    text: '',
    category: '',
    isDisable: true,
    ModVis: false,
    icon: 'ios-add',
  }

  selectItem = (id, name) => {
    this.setState({
      ModVis: false,
      category: id,
      currentCategoryName: name,
    }, () => {
      if (this.state.title.trim() !== '' && this.state.description.trim() !== '' && this.state.text.trim() !== '' && this.state.category.trim() !== '') {
        this.setState({ isDisable: false });
      }
    });
  };

  closeMy = () => this.setState({ ModVis: false });

  openModal = () => {
    if (this.state.ModVis === false) {
      this.setState({ ModVis: true })
    } else {
      this.closeMy();
    }
  };

  onTitleInputChange = (title) => {
    this.setState({ title });

    if (this.state.title.trim() !== '' && this.state.description.trim() !== '' && this.state.text.trim() !== '' && this.state.category.trim() !== '') {
      this.setState({ isDisable: false })
    }
  };

  onDescriptionInputChange = (description) => {
    this.setState({ description });

    if (this.state.title.trim() !== '' && this.state.description.trim() !== '' && this.state.text.trim() !== '' && this.state.category.trim() !== '') {
      this.setState({ isDisable: false });
    }
  };

  onTextInputChange = (text) => {
    this.setState({ text });

    if (this.state.title.trim() !== '' && this.state.description.trim() !== '' && this.state.text.trim() !== '' && this.state.category.trim() !== '') {
      this.setState({ isDisable: false })
    }
  };

  onAddHandle = () => {
    this.props.onCreateArticle(this.state);
    this.setState({
      title: '',
      description: '',
      text: '',
      category: '',
      currentCategoryName: '',
      isDisable: true,
    });
  }

  render() {
    const {
      title,
      description,
      text,
    } = this.state;

    return (
      <View style={styles.inputContainer1}>
        <TextInput
          key={1}
          placeholder='Type the title of article'
          value={title}
          onChangeText={this.onTitleInputChange}
          style={styles.input}
        />
        <TextInput
          key={2}
          placeholder='Type the text of article'
          value={text}
          onChangeText={this.onTextInputChange}
          style={styles.input}
        />
        <TextInput
          key={75}
          placeholder='Type the description of article'
          value={description}
          onChangeText={this.onDescriptionInputChange}
          style={styles.input}
        />
        <View style={styles.bottomLine}>
          <TouchableOpacity
            style={styles.open}
            onPress={() => this.openModal()}
          >
            <Icon name={this.state.icon} color='blue' size={20} />
          </TouchableOpacity>
          <Text style={styles.category}>
            Category:
              <Text style={styles.categoryColor}>{this.state.currentCategoryName}</Text>
          </Text>
          <TouchableOpacity
            style={styles.myAddButton}
            onPress={this.onAddHandle}
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

export default ArticleInput;
