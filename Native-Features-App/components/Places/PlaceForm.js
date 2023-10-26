import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import { ImagePicker } from "./ImagePicker";
import { LocationPicker } from "./LocationPicker";

export const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const changeTextHandler = (enteredText) => {
        setEnteredTitle(enteredText);
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} value={enteredTitle} onChangeText={changeTextHandler} />
            </View>
            <ImagePicker />
            <LocationPicker />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        paddingHorizontal: 4,
        paddingVertical: 8,
        marginVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})