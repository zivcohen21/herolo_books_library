import uuid from "uuid";
import axios from 'axios';

export const fetchBooks = () => async dispatch => {
    const res = await axios.get('./booksList.json');
    console.log("state-action: " + JSON.stringify(res.data));
    dispatch({type: 'FETCH_BOOKS', books: res.data});
};

export const addBook = ({author = '', date = 0, title = ''} = {}) => ({
    type: 'ADD_BOOK',
    book: {
        id: uuid(),
        author,
        date,
        title
    }
});

export const removeBook = ({id} = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

export const editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});