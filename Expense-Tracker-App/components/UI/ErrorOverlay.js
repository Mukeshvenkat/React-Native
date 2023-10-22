import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../constants/styles";

export const ErrorOverlay = ({ message }) => {
    return (
        <View style={styles.rootContainer}>
            <Text style={[styles.text, styles.title]}>An error message occurred!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold'
    }
})