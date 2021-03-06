import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  Content: {
    flexDirection: 'row',
  },
  title: {
    paddingRight: scale(5),
    paddingLeft: scale(5),
    fontSize: scale(12),
  },
  lastTitle: {
    paddingLeft: scale(4),
    paddingRight: scale(5),
    paddingTop: scale(1),
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#68a0cf',
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: scale(4),
  },
});

export default styles;
