import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './components/HomePage';
import AddBook from './components/AddBook';
import Header from './components/Header';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {connect} from 'react-redux';
import * as actions from './actions/books';


class App extends React.Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={AddBook} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(undefined, actions)(App));

