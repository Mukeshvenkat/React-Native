import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
    return data.map((item) =>
        <View style={styles.listItem} key={item}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    )
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#e2b497',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})