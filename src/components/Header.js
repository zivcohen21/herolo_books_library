import React from 'react';
import {NavLink} from 'react-router-dom'

class Header extends React.PureComponent  {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand text-primary font-weight-bold" to="/" activeClassName="is-active">Books Library</NavLink>
                <NavLink className="nav-link text-primary font-weight-bold" to="/add" activeClassName="is-active">Add New Book</NavLink>
            </nav>
        );
    }
}

export default Header;