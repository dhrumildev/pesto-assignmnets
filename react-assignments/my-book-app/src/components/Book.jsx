// Book.js
import React from 'react';

const Book = ({ title, author, year }) => {
    return (
        <div style={{"text-align":"left"}}>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export default Book;
