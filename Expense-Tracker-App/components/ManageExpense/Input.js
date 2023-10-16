import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default Input = ({ label, style, invalid, textInputConfig }) => {
    const inputStyles = [styles.text];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.textMultiline);
    }
    if (invalid) {
        inputStyles.push(styles.invalidInput)
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
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
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
})

