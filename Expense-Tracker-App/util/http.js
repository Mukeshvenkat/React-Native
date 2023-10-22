import axios from 'axios';

const BACKEND_URL = 'https://react-native-sample-2bcec-default-rtdb.firebaseio.com';

export const StoreExpense = async (expenseData) => {
    try {
        const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
        const id = response.data.name;
        return id;
    } catch (error) {
        console.log('Error :', error)
    }
}

export const GetExpense = async () => {
    let expense = [];
    const response = await axios.get(
        BACKEND_URL + '/expenses.json'
    );

    for (const key in response.data) {
        let expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expense.push(expenseObj)
    };
    return expense;
};

export const deleteExpense = (id) => {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};

export const updateExpense = (id, expenseData) => {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}