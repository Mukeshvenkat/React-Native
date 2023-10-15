import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensePeriod, fallbackText }) {
    let context = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.length > 0) {
        context = <ExpensesList expenses={expenses} />
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensePeriod} />
            {context}
        </View>
    )
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingHorizontal: 24,
        paddingVertical: 24,
        paddingBottom: 0
    },
    infoText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 32,
        fontSize: 16
    }
})