import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    inputContainer1: {
        width: "100%",
    },
    input: {
        width: "70%",
        marginLeft: scale(45),
    },
    category: {
        marginTop: scale(0),
        marginBottom: scale(5),
        marginLeft: scale(5),
        fontSize: scale(14),
        width: '40%',
    },
    myAddButton: {
        marginTop: scale(5),
        marginLeft: scale(40),
        paddingLeft: scale(20),
        paddingRight: scale(20),
    },
    buttext: {
        fontSize: scale(14),
        textAlign: 'center',
        color: 'blue',
    },
    bottomLine: {
        flexDirection: 'row',
    },
    categoryColor: {
        fontSize: scale(13),
        color: 'orange',
    },
    open: {
        marginTop: scale(2),
        marginBottom: scale(5),
        marginLeft: scale(50),
    },
});

export default styles;
