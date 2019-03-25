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
        paddingLeft: scale(5),
        paddingRight: scale(3),
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor:'#68a0cf',
        color: 'black',
        fontStyle: 'normal',
        fontWeight: '600',
    },
    icon: {
        marginLeft: scale(4),
    },
});

export default styles;
