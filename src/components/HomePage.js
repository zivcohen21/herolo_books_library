import React from 'react';
import BooksList from './BooksList';

const HomePage = (props) => (
    <div className="container">
        <BooksList location={props.location}/>
    </div>
);

export default HomePage;