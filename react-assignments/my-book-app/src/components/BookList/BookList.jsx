// BookList.js
import React, { useState, useContext } from 'react';
import Book from '../Book';
import BookForm from '../BookForm';
import BookDataLoader from '../BookDataLoader';
import { ThemeContext } from '../ThemeContext';
import useBookFilter from '../../Hooks/useBookFilter'; // Import the useBookFilter hook
import useBookSorter from '../../Hooks/useBookSorter'; // Import the useBookSorter hook

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const filteredBooks = useBookFilter(books, searchTerm);
  const sortedBooks = useBookSorter(filteredBooks, sortBy);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className={`container mt-4 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <BookDataLoader setBooks={setBooks} />
      <BookForm onAddBook={handleAddBook} />
      <div className="mt-3">
        <h2>Book List</h2>
        <div className="form-group">
          <label>Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-control"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="year">Year</option>
          </select>
        </div>
        <button onClick={toggleTheme} className="btn btn-primary">
          Toggle Theme
        </button>
        <ul className="list-group">
          {sortedBooks.map((book, index) => (
            <Book
              key={index}
              {...book}
              onDelete={() => handleDeleteBook(index)}
              className="list-group-item"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};



export default BookList;
