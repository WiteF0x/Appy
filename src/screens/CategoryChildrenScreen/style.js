import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    screenTitle: {
        fontWeight: "bold",
        fontSize: scale(24),
        color: 'orange',
        margin: scale(10),
    }
});

export default styles;
