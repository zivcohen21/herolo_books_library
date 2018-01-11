import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



export default class BookForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: props.book ? props.book.author : '',
            date: props.book ? moment(props.book.date) : moment(),
            title: props.book ? props.book.title : '',
            calendarFocused: false,
            error: '',
            books: props.books
        };
    }

    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({author}));
    };
    onDateChange = (date) => {
        if(date) {
            this.setState(() => ({date}))
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    };
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.books.length > 0)
        {
            let isUnique = true;
            this.state.books.map((book) => {
                if((this.props.book && this.props.book.id !== book.id && book.title.toLowerCase() === this.state.title.toLowerCase())
                || (!this.props.book && book.title.toLowerCase() === this.state.title.toLowerCase()))
                {
                    isUnique = false;
                    this.setState(() => ({error: 'Please provide an unique title.'}));
                }
            });
            if(isUnique){
                this.onUniqueTitle();
            }
        }
        else {
            this.onUniqueTitle();
        }
    };

    onUniqueTitle = () => {

        this.state.title = this.state.title.replace(/\w\S*/g, function(title)
        {
            return title.charAt(0).toUpperCase() + title.substr(1).toLowerCase();
        });
        this.state.title = this.state.title.replace(/[^a-zA-Z_ ]+/g, "");


        if(!this.state.author || !this.state.title) {
            this.setState(() => ({error: 'Please provide author and title.'}));
        }
        else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                author: this.state.author,
                title: this.state.title,
                date: this.state.date.format("DD-MM-YYYY"),
                id: this.props.book ? this.props.book.id : ''
            });
        }
    };

    onCancel = (e) => {
        e.preventDefault();
        this.props.onCancel();
    };

    render() {
        return (
            <div className="text-center row justify-content-md-center">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className="border border-primary m-5 p-4">
                    <fieldset>
                        <div className="form-group row">
                            <label htmlFor="author" className="col-sm-2 col-form-label">Author: </label>
                            <div className="col-sm-10">
                                <input
                                    id="author"
                                    type="text"
                                    placeholder="Author"
                                    autoFocus
                                    value={this.state.author}
                                    onChange={this.onAuthorChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title: </label>
                            <div className="col-sm-10">
                                <input
                                    id="title"
                                    type="text"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.onTitleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-2 col-form-label">Date: </label>
                            <div className="col-sm-10">
                                <SingleDatePicker
                                    id="date"
                                    date={this.state.date}
                                    onDateChange={this.onDateChange}
                                    focused={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                    isOutsideRange={(day) => moment(day) <= moment()}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success m-5">Save</button>
                        <button onClick={this.onCancel} className="btn btn-warning m-5">Cancel</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

