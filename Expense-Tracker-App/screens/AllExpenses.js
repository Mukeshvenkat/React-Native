import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

function AllExpenses() {
    const expenseCtx = useContext(ExpenseContext);
    return (
        <ExpensesOutput expenses={expenseCtx.expense} expensePeriod={"Total"} fallbackText="No Expenses!" />
    )
};

export default AllExpenses;