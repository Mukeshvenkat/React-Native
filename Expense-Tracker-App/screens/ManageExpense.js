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

    const selectedExpense = expenseCtx.expense.find((item) => item.id === expenseItemId);

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
    const confirmExpenseHandler = (expenseData) => {
        if (isEditing) {
            expenseCtx.updateExpense({
                expenseItemId,
                data: expenseData
            });
        } else {
            expenseCtx.addExpense(expenseData)
        }
        navigation.goBack();
    };
    return (
        <View style={styles.rootContainer}>
            <ExpenseForm
                onCancel={cancelExpenseHandler}
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmExpenseHandler}
                defaultValues={selectedExpense}
            />
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
    trashContainer: {
        paddingTop: 16,
        marginTop: 8,
        borderTopWexpenseItemIdth: 2,
        borderColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})