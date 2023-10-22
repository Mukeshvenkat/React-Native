import { ActivityIndicator, StyleSheet, View } from "react-native"
import { GlobalStyles } from "../../constants/styles";

export const LoadingOverlay = () => {
    return (
        <View style={styles.rootContainer}>
            <ActivityIndicator size="large" color='white' />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700
    }
})