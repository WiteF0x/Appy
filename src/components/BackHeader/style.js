import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop: scale(12),
    marginLeft: scale(15),
    marginRight: scale(10),
  },
  text: {
    marginTop: scale(10),
    fontSize: scale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
