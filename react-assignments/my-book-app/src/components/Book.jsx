import React, { PureComponent } from 'react';
import BookDetail from './BookDetails.jsx';

class Book extends PureComponent {
  render() {
    const { title, author, year } = this.props;

    return (
      <div style={{"textAlign":"left"}}>
        <BookDetail title={title} author={author} year={year} />
      </div>
    );
  }
}

export default Book;


// import React from 'react';

// const Book = ({ title, author, year }) => {
//     return (
//         <div style={{"text-align":"left"}}>
//             <h3>{title}</h3>
//             <p>Author: {author}</p>
//             <p>Year: {year}</p>
//         </div>
//     );
// };

// export default Book;
