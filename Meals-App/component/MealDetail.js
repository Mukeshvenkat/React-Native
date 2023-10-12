import { StyleSheet, Text, View } from "react-native";

function MealDetail({ duration, complexity, affordability, textStyle }) {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
};

export default MealDetail;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        fontSize: 12,
        marginHorizontal: 4
    }
})