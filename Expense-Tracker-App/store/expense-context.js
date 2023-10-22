import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
    expense: [],
    setExpense: (expenses) => { },
    addExpense: ({ description, amount, date }) => { },
    updateExpense: ({ id, description, amount, date }) => { },
    deleteExpense: ({ id }) => { }
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpense = [...state];
            updatedExpense[updatableExpenseIndex] = updatedItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}
const ExpenseContextProvider = ({ children }) => {
    const [expenseState, dispatch] = useReducer(expensesReducer, []);

    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    };

    const setExpense = (expenses) => {
        dispatch({ type: 'SET', payload: expenses });
    };

    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const value = {
        expense: expenseState,
        setExpense: setExpense,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }
    return (
        <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider;