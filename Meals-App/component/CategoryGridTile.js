import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button}>
                <Text style={styles.innerContainer}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 }
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})