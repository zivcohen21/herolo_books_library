import React from 'react';
import {connect} from 'react-redux';
import BookForm from './BookForm';
import {addBook} from '../actions/books'
import selectBooks from '../selectors/books';


export class AddBook extends React.Component {

    onSubmit = (book) => {

        this.props.addBook(book);
        this.props.history.push('/');
    };

    onCancel = () => {
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <BookForm
                    onSubmit={this.onSubmit}
                    onCancel={this.onCancel}
                    books={this.props.books}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: selectBooks(state.books, '')
    };
};

const mapDispatchToProps = (dispatch) => ({
    addBook: (book) => dispatch(addBook((book)))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);