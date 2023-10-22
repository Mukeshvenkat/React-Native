import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

export default ExpenseForm = ({ onCancel, submitButtonLabel, onSubmit, defaultValues }) => {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((currInputs) => {
            return {
                ...currInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    }

    const submitExpenseHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((currInput) => {
                return {
                    amount: { value: currInput.amount.value, isValid: amountIsValid },
                    date: { value: currInput.date.value, isValid: dateIsValid },
                    description: { value: currInput.description.value, isValid: descriptionIsValid },
                }
            });
            return;
        }
        onSubmit(expenseData);
    }
    const formIsValid = !inputs.amount.isValid || !inputs.description.isValid || !inputs.date.isValid;
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label='Amount'
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }} />
                <Input
                    style={styles.rowInput}
                    label='Date'
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }} />
            </View>
            <Input
                label='Description'
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value
                }} />
            {formIsValid && (
                <Text style={styles.errorText}>Input Error - Please check and enter correct input</Text>
            )}
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitExpenseHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        color: GlobalStyles.colors.error500,
        textAlign: 'center',
        margin: 8
    }
})