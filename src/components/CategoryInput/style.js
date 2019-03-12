import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    categoryInput: {
        width: "70%",
        marginLeft: scale(10),
    },
    myAddButton: {
        paddingLeft: scale(20),
        paddingRight: scale(20),
    },
    buttext: {
        fontSize: scale(14),
        color: 'blue',
    },
});

export default styles;
