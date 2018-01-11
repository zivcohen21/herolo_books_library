let booksReducersDefaultState = [];

export default (state = booksReducersDefaultState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS':
            console.log("state-reducers: " + JSON.stringify(action.books));
            state = action.books || [];
            return state;

        case 'ADD_BOOK':
            return [
                ...state,
                action.book
            ];
        case 'REMOVE_BOOK':
            return state.filter(({ id }) =>  id !== action.id);

        case 'EDIT_BOOK':
            return state.map((book) =>  {
                if(book.id === action.id) {
                    return {
                        ...book,
                        ...action.updates
                    };
                }
                else {
                    return book;
                }
            });

        default:
            return state;
    }

}

