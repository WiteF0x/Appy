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
    width: scale(250),
    fontSize: scale(18),
    color: 'orange',
    marginBottom: scale(17),
  },
  text: {
    color: 'black',
    fontSize: scale(14),
    marginBottom: scale(10),
  },
  line: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: scale(50),
  },
  line: {
    flexDirection: 'row',
  },
});

export default styles;
