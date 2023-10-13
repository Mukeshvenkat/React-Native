import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expenseName }) {
    return (
        <View>
            <ExpensesSummary expenses={expenses} periodName={expenseName} />
            <ExpensesList />
        </View>
    )
};

export default ExpensesOutput;