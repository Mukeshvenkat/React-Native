import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        margin: 24,
        padding: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: 36,
        fontFamily: 'open-sans-bold',
        color: Colors.accent500
    }
})