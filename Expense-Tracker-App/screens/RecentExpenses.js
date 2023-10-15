import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDay } from "../util/dateUtils";

function RecentExpenses() {
    const expenseCtx = useContext(ExpenseContext);

    const recentExpenses = expenseCtx.expense.filter((item) => {
        const today = new Date();
        const last7days = getDateMinusDay(today, 7);
        return item.date > last7days;
    });
    return (
        <ExpensesOutput expenses={recentExpenses} expensePeriod={"Last 7 days"} fallbackText="No Expenses registered in last 7 days" />
    )
};

export default RecentExpenses;