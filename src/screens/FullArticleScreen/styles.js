import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    mainCont: {
        width: '100%',
    },
    container: {
        width: "100%",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '40%',
    },
    backButton: {
        width: scale(30),
        margin: scale(10),
    },
    title: {
        textAlign: 'center',
        fontSize: scale(28),
        color: 'orange',
        marginBottom: scale(45),
    },
    text: {
        fontSize: scale(12),
        color: 'grey',
        marginBottom: scale(20),
        marginLeft: scale(10),
    },
    description: {
        fontSize: scale(16),
        color: 'black',
        marginLeft: scale(10),
    },
});

export default styles;
