import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDay } from "../util/dateUtils";
import { GetExpense } from "../util/http";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { ErrorOverlay } from "../components/UI/ErrorOverlay";

function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const expenseCtx = useContext(ExpenseContext);

    const recentExpenses = expenseCtx.expense.filter((item) => {
        const today = new Date();
        const last7days = getDateMinusDay(today, 7);
        return item.date > last7days;
    });

    useEffect(() => {
        const getExpenseFunction = async () => {
            setIsFetching(true);
            try {
                const expenses = await GetExpense();
                expenseCtx.setExpense(expenses);
            } catch (error) {
                setError('Erro while fetching data!')
            }
            setIsFetching(false);
        };

        getExpenseFunction();
    }, []);

    if (error && !isFetching) {
        return <ErrorOverlay message={error} />
    }
    if (isFetching) {
        return <LoadingOverlay />
    }
    return (
        <ExpensesOutput expenses={recentExpenses} expensePeriod={"Last 7 days"} fallbackText="No Expenses registered in last 7 days" />
    )
};

export default RecentExpenses;