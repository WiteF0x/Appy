import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  modalContainer: {
    marginLeft: scale(45),
    marginTop: scale(240),
    height: '40%',
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
    color: 'black',
    margin: scale(5),
  },
});

export default styles;
