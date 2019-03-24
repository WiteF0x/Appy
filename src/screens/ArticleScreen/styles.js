import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    background: {
        width: '100%',
        height: '100%',
    },
    screenTitle: {
      textAlign: 'center',
      marginTop: scale(5),
      marginBottom: scale(10),
      fontWeight: "bold",
      fontSize: scale(24),
      color: 'orange',
    },
    categoryConteiner: {
        flexDirection: 'row',
        width: '100%',
      },
      categoryText: {
        color: '#eee',
        width: scale(60),
        marginLeft: scale(2),
      },
      currentCategory: {
        color: '#eee',
        width: scale(400),
        marginLeft: scale(3),
      },
      touch: {
        width: scale(60),
      },
      icon: {
        color: 'orange',
        marginLeft: scale(10),
        marginRight: scale(20),
      },
      iconfunnel: {
        marginTop: scale(2),
      }
});

export default styles;
