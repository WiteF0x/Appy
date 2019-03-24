import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    back: {
        color: 'black',
        marginRight: "90%",
        marginTop: scale(7),
    },
    container: {
        width: "100%",
        flex: 1,
    },
    containerView: {
        flex: 1,    
        alignItems: 'center',
    },
    screenTitle: {
        fontWeight: "bold",
        fontSize: scale(20),
        margin: scale(10),
    }
});

export default styles;
