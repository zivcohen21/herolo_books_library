import React from 'react';
import {connect} from 'react-redux';
import BooksListItem from './BooksListItem';
import selectBooks from '../selectors/books'
import {setTextFilter} from "../actions/filters";

export class BooksList extends React.Component {

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
        console.log(e.target.value);
    };

    render() {
        return (
            <div className="text-center justify-content-md-center">
                <h2>Books List</h2>
                <form>
                    <input className="form-control mt-5" type="search" placeholder="Search" aria-label="Search" value={this.props.filters.text} onChange={this.onTextChange}/>
                </form>

                {
                    this.props.books.length === 0 ? (
                        <p>No books</p>
                    ) : (
                        this.props.books.map((book) => {
                            return <BooksListItem key={book.id} book={book}  />;
                        })
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state0: " + JSON.stringify(state));
    return {
        filters: state.filters,
        books: selectBooks(state.books, state.filters.text)
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
