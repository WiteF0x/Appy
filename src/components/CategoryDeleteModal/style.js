import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  modalContainer: {

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
  but: {
    width: scale(45),
    marginRight: scale(94),
  },
  buttonContainer: {
    width: '100%',
  },
  textCont: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scale(40),
    marginTop: scale(275),
  },
});

export default styles;
