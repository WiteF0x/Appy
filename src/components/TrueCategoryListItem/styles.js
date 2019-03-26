import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  idtext: {
    fontSize: scale(15),
    color: 'orange',
  },
  id: {
    color: 'grey',
    fontSize: scale(12),
  },
  titletext: {
    fontSize: scale(15),
    color: 'orange',
  },
  title: {
    fontSize: scale(12),
    color: 'grey',
  },
  icon: {

  },
  listItem: {
    width: '95%',
    margin: scale(10),
    padding: scale(10),
    backgroundColor: '#eee',
  },
});

export default styles;
