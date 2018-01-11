import React from 'react';
import EditBookPage from "./EditBook";
import {removeBook} from "../actions/books";
import {connect} from "react-redux";

export class BooksListItem extends React.Component {

       constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            book: props.book
        };
    }

    openModal = () => {
        this.setState(() => ({
            modalIsOpen: true
        }));
    };

    onSubmit = (book) => {
        this.setState(() => ({
            book
        }));
        this.setState(() => ({
            modalIsOpen: false
        }));
        this.setState(() => ({
            modalIsOpen: false
        }));
    };

    onRemove = (rule) => {
        if(window.confirm(rule) === true){
            this.props.removeBook({id: this.props.book.id});
        }

    };

    onCancel = () => {
        this.setState(() => ({
            modalIsOpen: false
        }));
    };

    render() {
        const message = "Are you sure you want to delete this item?";
        return (
            <div className="border border-primary mt-2">
                <h3>{this.state.book.title}</h3>
                <h4>{this.state.book.author}</h4>
                <p>{this.state.book.date}</p>

                <button onClick={this.openModal} className="btn btn-primary mr-5 ml-5">Edit</button>
                {this.state.modalIsOpen ?
                    <EditBookPage
                        book={this.state.book}
                        modalIsOpen={this.state.modalIsOpen}
                        onSubmit={this.onSubmit}
                        onCancel={this.onCancel}
                    /> : null}
                <button onClick={this.onRemove.bind(this, message)} className="btn btn-danger mr-5 ml-5">Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeBook: (data) => dispatch(removeBook(data))
});

export default connect(undefined, mapDispatchToProps)(BooksListItem);