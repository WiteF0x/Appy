import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
    idtext: {
        fontSize: scale(15),
        color: 'orange',
    },
    id: {
        color: 'grey',
        fontSize: scale(12),
    },
    titletext: {
        fontSize: scale(15),
        color: 'orange',
    },
    title: {
        fontSize: scale(12),
        color: 'grey',
    },
    icon: {
        
    },
    main: {
        width: '100%',
        height: scale(100),
    },
});

export default styles;
