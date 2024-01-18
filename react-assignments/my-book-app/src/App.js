import React from 'react';
import BookList from './components/BookList/BookList.jsx';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <BookList />
      </div>
    </ThemeProvider>
  );
};

export default App;
