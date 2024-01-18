// BookList.js
import React, { Component } from 'react';
import Book from '../Book';
import BookForm from '../BookForm';
import './BookList.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
      ],
    };
  }

  handleAddBook = (newBook) => {
    this.setState((prevState) => ({ books: [...prevState.books, newBook] }));
  };

  handleDeleteBook = (index) => {
    const updatedBooks = [...this.state.books];
    updatedBooks.splice(index, 1);
    this.setState({ books: updatedBooks });
  };

  render() {
    return (
      <div className="book-list-container">
        <BookForm onAddBook={this.handleAddBook} />
        {this.state.books.length === 0 ? (
          <p className="mt-3">No books available. Please add a book.</p>
        ) : (
            <div className="book-list mt-3">
              <h2>Book List</h2>
              <ul className="list-group">
                {this.state.books.map((book, index) => (
                  <Book
                    key={index}
                    {...book}
                    onDelete={() => this.handleDeleteBook(index)}
                    className="list-group-item"
                  />
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
}

export default BookList;
