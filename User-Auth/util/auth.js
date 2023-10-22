import axios from "axios";

const API_KEY = 'AIzaSyABKE1xYOT8WvwhZYTUs8tuRNu85BJrYmI';

const authenticate = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    try {
        const response = await axios.post(url, { email: email, password: password, returnSecureToken: true })
        console.log(response.data);
    } catch (err) {
        console.log('ERROR - ', err);
    }

}

export const createUser = async (email, password) => {
    await authenticate('signUp', email, password);
};

export const login = async (email, password) => {
    await authenticate('signInWithPassword', email, password);
}