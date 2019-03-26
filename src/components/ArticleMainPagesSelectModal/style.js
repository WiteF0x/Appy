import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
  },
  container: {
    width: '100%',
    marginTop: scale(200),
    marginBottom: 5,
    marginLeft: '20%',
    marginRight: '15%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: scale(20),
    color: 'black',
    margin: scale(15),
  },
});

export default styles;
