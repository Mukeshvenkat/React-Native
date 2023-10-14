import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Book - 1',
        amount: 60.99,
        date: new Date('2023-05-02')
    },
    {
        id: 'e2',
        description: 'Book - 2',
        amount: 20.99,
        date: new Date('2023-05-04')
    },
    {
        id: 'e3',
        description: 'Book - 3',
        amount: 40.99,
        date: new Date('2023-05-06')
    },
    {
        id: 'e4',
        description: 'Book - 4',
        amount: 60.99,
        date: new Date('2023-04-02')
    }
]
function ExpensesOutput({ expenses, expensePeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
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
    }
})