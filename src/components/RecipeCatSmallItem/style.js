import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';


const styles = StyleSheet.create({
    title: {
        fontSize: scale(12),
        color: 'black',
    },
    listItem: {
        width: "95%",
        margin: scale(5),
        padding: scale(5),
    },
});

export default styles;
