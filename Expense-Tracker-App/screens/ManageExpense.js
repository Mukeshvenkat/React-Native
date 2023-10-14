import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";

function ManageExpense({ route, navigation }) {
    const expenseItem = route.params?.item;
    const isEditing = !!expenseItem;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = () => {
        navigation.goBack();
    };
    const cancelExpenseHandler = () => {
        navigation.goBack();
    };
    const confirmExpenseHandler = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.rootContainer}>
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
        minWidth: 120,
        marginHorizontal: 8
    },
    trashContainer: {
        paddingTop: 16,
        marginTop: 8,
        borderTopWidth: 2,
        borderColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})