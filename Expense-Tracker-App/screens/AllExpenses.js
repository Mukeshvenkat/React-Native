import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
    return (
        <ExpensesOutput expensePeriod={"Total"} />
    )
};

export default AllExpenses;