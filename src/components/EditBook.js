import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import {editBook} from "../actions/books";
import Modal from 'react-modal';
import selectBooks from "../selectors/books";

export class EditBookPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: props.book,
            modalIsOpen: props.modalIsOpen,
        };
    }
    onSubmit = (book) => {
        this.props.editBook(this.props.book.id, book);
        console.log(book);
        this.props.onSubmit(book);
    };

    onCancel = () => {
        this.props.onCancel();
    };

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    contentLabel="Edit Modal"
                >

                    <BookForm
                        book={this.props.book}
                        onSubmit={this.onSubmit}
                        onCancel={this.onCancel}
                        books={this.props.books}
                    />
                </Modal>

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
    editBook: (id, expense) => dispatch(editBook(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBookPage);