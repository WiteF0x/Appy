import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        alignItems: "center"
    },
    categoryInput: {
        width: "70%",
        marginLeft: scale(10),
    },
    parentContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    myAddButton: {
        marginLeft: scale(50),
    },
    buttext: {
        fontSize: scale(14),
        color: 'blue',
    },
    categoryColor: {
        color: 'orange',
    },
    open: {
        marginLeft: scale(60),
        marginRight: scale(5),
    },
    category: {
        width: scale(150),
        marginRight: scale(3),
        marginBottom: scale(5),
    },

});

export default styles;
