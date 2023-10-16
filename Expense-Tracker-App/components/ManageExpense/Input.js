import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default Input = ({ label, textInputConfig }) => {
    const inputStyles = [styles.text];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.textMultiline);
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    text: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 4,
        fontSize: 18
    },
    textMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})

