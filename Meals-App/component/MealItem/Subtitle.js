import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
        marginHorizontal: 12,
        marginVertical: 4
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e2b497'
    }
})