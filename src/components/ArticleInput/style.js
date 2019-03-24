import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    inputContainer1: {
        width: '100%',
    },
    input: {
        width: "70%",
        marginLeft: scale(45),
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
    category: {
        marginTop: scale(0),
        marginBottom: scale(5),
        marginLeft: scale(5),
        fontSize: scale(14),
        width: '40%',
    },
    open: {
        marginTop: scale(2),
        marginBottom: scale(5),
        marginLeft: scale(50),
    },
    categoryColor: {
        color: 'orange',
    },
});

export default styles;
