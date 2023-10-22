import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { StoreExpense, deleteExpense, updateExpense } from '../util/http';
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { ErrorOverlay } from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState();
    const expenseCtx = useContext(ExpenseContext);

    const expenseItemId = route.params?.expenseId;
    const isEditing = !!expenseItemId;

    const selectedExpense = expenseCtx.expense.find((item) => item.id === expenseItemId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = async () => {
        setIsSubmitting(true);
        try {
            await deleteExpense(expenseItemId);
            expenseCtx.deleteExpense(expenseItemId);
            navigation.goBack();
        } catch (error) {
            setError('Unable to Delete expense - try later!');
            setIsSubmitting(false);
        }
        // setIsSubmitting(false): - Its not added because the screen is navigated to previous screen.
    };
    const cancelExpenseHandler = () => {
        navigation.goBack();
    };
    const confirmExpenseHandler = async (expenseData) => {
        setIsSubmitting(true);
        try {
            if (isEditing) {
                await updateExpense(expenseItemId, expenseData);
                expenseCtx.updateExpense({
                    expenseItemId,
                    data: expenseData
                });
            } else {
                const expenseId = await StoreExpense(expenseData);
                expenseCtx.addExpense({ ...expenseData, id: expenseId });
            }
            navigation.goBack();
        } catch (error) {
            setError('Unable to Add/Edit data - try later!');
            setIsSubmitting(false);
        }
    };

    if (error && !isSubmitting) {
        return <ErrorOverlay message={error} />
    }
    if (isSubmitting) {
        return <LoadingOverlay />
    }
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