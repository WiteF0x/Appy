import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  listItem: {
    width: '95%',
    margin: scale(10),
    padding: scale(10),
    backgroundColor: '#eee',
    borderRadius: scale(10),
  },
  title: {
    fontSize: scale(18),
    color: 'orange',
    marginBottom: scale(10),
  },
  text: {
    fontSize: scale(10),
    color: 'grey',
    marginBottom: scale(10),
  },
  desription: {
    color: 'black',
    fontSize: scale(14),
    marginBottom: scale(10),
  },
});

export default styles;
