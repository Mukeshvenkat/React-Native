import { createContext, useReducer } from "react";

export const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Book - 1',
        amount: 60.99,
        date: new Date('2023-10-11')
    },
    {
        id: 'e2',
        description: 'Book - 2',
        amount: 20.99,
        date: new Date('2023-10-12')
    },
    {
        id: 'e3',
        description: 'Book - 3',
        amount: 40.99,
        date: new Date('2023-10-13')
    },
    {
        id: 'e4',
        description: 'Book - 4',
        amount: 60.99,
        date: new Date('2023-05-22')
    },
    {
        id: 'e5',
        description: 'Book - 5',
        amount: 10.99,
        date: new Date('2023-04-12')
    },
    {
        id: 'e6',
        description: 'Book - 5',
        amount: 80.99,
        date: new Date('2023-08-22')
    }
]

export const ExpenseContext = createContext({
    expense: [],
    addExpense: ({ description, amount, date }) => { },
    updateExpense: ({ id, description, amount, date }) => { },
    deleteExpense: ({ id }) => { }
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random.toString();
            return [{ ...action.payload, id: id }, ...state]
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
    const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    };

    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const value = {
        expense: expenseState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }
    return (
        <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider;