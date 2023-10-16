import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
    const expenseCtx = useContext(ExpenseContext);

    const expenseItemId = route.params?.expenseId;
    const isEditing = !!expenseItemId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = () => {
        expenseCtx.deleteExpense(expenseItemId)
        navigation.goBack();
    };
    const cancelExpenseHandler = () => {
        navigation.goBack();
    };
    const confirmExpenseHandler = () => {
        if (isEditing) {
            expenseCtx.updateExpense({
                expenseItemId,
                data: {
                    description: 'Test - Update',
                    amount: 100.99,
                    date: new Date('2023-10-16')
                }
            });
        } else {
            expenseCtx.addExpense({
                description: 'Test - Add',
                amount: 90.99,
                date: new Date('2023-10-16')
            })
        }
        navigation.goBack();
    };
    return (
        <View style={styles.rootContainer}>
            <ExpenseForm />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode='flat' onPress={cancelExpenseHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmExpenseHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing &&
                <View style={styles.trashContainer}>
                    <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                </View>
            }
        </View>
    )
};

export default ManageExpense;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
        padding: 24
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWexpenseItemIdth: 120,
        marginHorizontal: 8
    },
    trashContainer: {
        paddingTop: 16,
        marginTop: 8,
        borderTopWexpenseItemIdth: 2,
        borderColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})