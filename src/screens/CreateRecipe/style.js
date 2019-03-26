import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  screenTitle: {
    fontWeight: 'bold',
    fontSize: scale(20),
    margin: scale(10),
  },
  back: {
    color: 'black',
    marginRight: '90%',
    marginTop: scale(7),
  },
});

export default styles;
