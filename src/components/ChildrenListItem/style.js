import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  idtext: {
    fontSize: scale(15),
    color: 'orange',
  },
  id: {
    color: 'grey',
    marginTop: scale(20),
    fontSize: scale(9),
  },
  titletext: {
    fontSize: scale(15),
    color: 'orange',
  },
  title: {
    fontSize: scale(17),
    color: 'orange',
  },
  icon: {

  },
  listItem: {
    width: '95%',
    margin: scale(10),
    padding: scale(10),
    backgroundColor: '#eee',
  },
  main: {
    width: '100%',
    height: scale(100),
  },
});

export default styles;
